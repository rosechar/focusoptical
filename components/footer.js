import {
    Stack,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Link
  } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

function createData(day, open, close, closed) {
    return { day, open, close, closed };
  }
  
  const rows = [
    createData('Mon', "9", "6", false),
    createData('Tue', "9", "7", false),
    createData('Wed', "9", "5:30", false),
    createData('Thur', "9", "6", false)
  ];
  const rows2 = [
    createData('Fri', "9", "5", false),
    createData('Sat', "9", "12", false),
    createData('Sun', "CLOSED", "", true)
  ];

export default function Footer() {
    return (
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 3, md: 7 }}
        alignItems={"center"}
        backgroundColor="text.disabled"
        justifyContent={"space-evenly"}
        padding={1}
        
      >
      <Stack direction={{ xs: 'column', sm: 'row'}} padding={4}>
        <Stack direction="column">
        <Typography variant="h4" fontWeight={1}>
          Focus Optical
        </Typography>
        <Typography variant="overline"  marginLeft={2}>
          Since 1984
        </Typography>
        <Typography variant="b1"  marginLeft={2}>
        2046 W Auburn Rd,
        Rochester Hills, MI 48309
        </Typography>
        <Link href="tel:2488528830" variant="b1" underline="none" color="inherit"marginLeft={2}>
        (248) 852-8830
        </Link>
        <Typography marginTop={3} marginLeft={2} fontSize=".7rem">© 2022. <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/3695/glasses">Glasses</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com" >Icons8</a></Typography>
        </Stack>
      </Stack>
        <Stack direction={"row"}>
        {/* <TableContainer sx={{maxWidth:200}}>
        <Table sx={{ [`& .${tableCellClasses.root}`]: { borderBottom: "none"}}} size="small" >
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.day}
                >
                <TableCell  component="th" scope="row" >
                    {row.day}
                </TableCell>
                {
                    row.closed
                    ? <TableCell  align="right">CLOSED</TableCell>
                    : (<TableCell  align="right">{row.open}-{row.close}</TableCell>)
                }
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <TableContainer sx={{maxWidth:200}} >
        <Table sx={{ [`& .${tableCellClasses.root}`]: { borderBottom: "none"}}} size="small" >
            <TableBody>
            {rows2.map((row) => (
                <TableRow
                key={row.day}
                >
                <TableCell size='small' component="th" scope="row" >
                    {row.day}
                </TableCell>
                {
                    row.closed
                    ? <TableCell size='small' align="right">CLOSED</TableCell>
                    : (<TableCell size='small' align="right">{row.open}-{row.close}</TableCell>)
                }
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer> */}
        </Stack>
        </Stack>
    )
}