import React from "react";
import emailjs from '@emailjs/browser';
import {
  Box,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
  Typography,
  Alert,
  Snackbar,
  Backdrop,
  CircularProgress
} from "@mui/material";
  

function ContactForm({updateFormStatus}) {
    const [formError, setFormError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [formValues, setFormValues] = React.useState({
        name:{
          value:'',
          error:false,
          errorMessage:'Please enter a valid name'
        },
        email:{
          value:'',
          error:false,
          errorMessage:'Please enter a valid email address'
        },
        phone:{
          value:'',
          error:false,
          errorMessage:'Please enter a valid phone number'
        },
        appointment:{
          value:'eye'
        },
        details:{
            value:''
        }
      })

const handleChange = (e) => {
    const field = e.target.name;
    const newValue = e.target.value;
    setFormValues(current => ({
          ...current,
          [field]: {
            ...current[field],
            value:newValue
          },
      }));
    validateField(field, newValue);
  }

const handleSubmit = (e) => {
    e.preventDefault();
    const formFields = Object.keys(formValues);
    let emailParams = {};
    let error = false;
    for (let index = 0; index < formFields.length; index++) {
        const currentField = formFields[index];
        const currentValue = formValues[currentField].value;
        if (validateField(currentField, currentValue)) {
            error = true;
        }
        else {
            emailParams[currentField] = currentValue;
        }
    }
    if (error) {
        setFormError(true);
    }
    else {
        setLoading(true);
        emailjs.send("service_58fw4wl", "template_zhg23lg", emailParams, "YFvOQwCSTBFreWFPu")
        .then(function(response) {
            handleBackdropClose();
            updateFormStatus(true);
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            handleBackdropClose();
            console.log('FAILED...', error);
         });
    }
    
}
function validateField(field, value) {
    switch(field) {
        case 'email':
            let emailError = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            setFormValues(current => ({
                ...current,
                [field]: {
                  ...current[field],
                  error:!emailError
                },
            }));
            return !emailError;
        case 'name':
            let nameError = value.length >= 6;
            setFormValues(current => ({
                ...current,
                [field]: {
                  ...current[field],
                  error:!nameError
                },
            }));
            return !nameError;
        case 'phone':
            let phoneError = value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i);
            setFormValues(current => ({
                ...current,
                [field]: {
                  ...current[field],
                  error:!phoneError
                },
            }));
            return !phoneError;
        default:
            break;
    }
    return false;
  }

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setFormError(false);
  };
  const handleBackdropClose = () => {
    setLoading(false);
  };

  return (
    <React.Fragment>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={handleBackdropClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar anchorOrigin={{vertical:'top', horizontal: 'center'}} open={formError} autoHideDuration={5000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="error" >
          Please fix errors before submitting
        </Alert>
      </Snackbar>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 2, width: 325, alignSelf:"center" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              id="name"
              autoFocus
              value={formValues.name.value}
              onChange={handleChange}
              error={formValues.name.error}
              helperText={formValues.name.error && formValues.name.errorMessage}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formValues.email.value}
              onChange={handleChange}
              error={formValues.email.error}
              helperText={formValues.email.error && formValues.email.errorMessage}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              value={formValues.phone.value}
              onChange={handleChange}
              error={formValues.phone.error}
              helperText={formValues.phone.error && formValues.phone.errorMessage}

            />
            <FormControl sx={{ width: 325, mt: 2 }}>
            <InputLabel id="appointment-type">Appointment Type</InputLabel>
                <Select
                    required={true}
                    input={<OutlinedInput label="Appointment Type" />}
                    labelId="appointment-type"
                    id="appointment-type"
                    value={formValues.appointment.value}
                    label="appointment"
                    name="appointment"
                    onChange={handleChange}

                >
                    <MenuItem value={"eye"}>Eye Exam</MenuItem>
                    <MenuItem value={"contact"}>Contact Lens Exam</MenuItem>
                    <MenuItem value={"adjustment"}>Glasses Adjustment</MenuItem>
                    <MenuItem value={"retail"}>Glasses & Contact Retail</MenuItem>
                </Select>
            </FormControl>
            <TextField
              margin="normal"
              fullWidth
              id="details"
              label="Additional Details"
              name="details"
              value={formValues.details.value}
              onChange={handleChange}

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
        </Box>
    </React.Fragment>

    
  );
};

export default ContactForm;