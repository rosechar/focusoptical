import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
    Paper,
    Button,
    Typography,
    Stack,
    Link,
    Box
} from '@mui/material'

export const DefaultSettingsT = {
  autoPlay: true,
  animation: "fade",
  indicators: false,
  duration: 1000,
  navButtonsAlwaysVisible: false,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: true
}

const Testimonals = () => {
    const [settings, setSettings] = useState (DefaultSettingsT);

    return (
        <div >
            <Carousel 
                {...settings}
            >
                {
                    items.map((item, index) => {
                        return <Testimonal item={item} key={index} />
                    })
                }
            </Carousel>
        </div>
    )
}


function Testimonal({item}) {
    return (
      <Box textAlign="center" pl={{md:3}} pr={{md:3}}>

          <Stack spacing={1}  >
            
            <Typography pt={.5} component={Link} href={item.href} color="text.primary" lineHeight={2} variant="overline">{item.description}</Typography>
            <Typography  variant='body2' fontStyle="italic" color="text.secondary">- {item.name}</Typography>
          </Stack>

        </Box>
    )
}

const items= [
    {
        name: "Ed",
        description: "The owner was very helpful...I'll come here from now on",
        href: 'https://g.co/kgs/k2vTVR'
    },
    {
        name: "Emily",
        description: "I have been going here since I was a little girl! Tom is super helpful, and the doc is great! I would recommend this place to everyone.",
        href: 'https://g.co/kgs/yiVrZD'
    },
    {
        name: "Erik",
        description: "Tom really helped me out to get a great pair of glasses for a great price!",
        href: 'https://g.co/kgs/A64L4m'
    }
]

export default Testimonals;