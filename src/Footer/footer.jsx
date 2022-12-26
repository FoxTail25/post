import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, Typography } from '@mui/material';
// import { ColorizeOutlined } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'aliceblue',
            marginTop: '10px',
            marginBottom: 0,
            padding: '5px' 
        }}>

            <Typography>Develeped by FoxTail25 in 2022</Typography>

            <div sx={{backgroundColor: 'inherit',
        }}>


                <Link href="tel:+79057800777" sx={{padding: '10px'}}><ContactPhoneIcon/>
                </Link>

                <Link href='https://t.me/Siverk'sx={{padding: '10px'}}><TelegramIcon />
                </Link>

                <Link href='mailto:foxtail25@gmail.com&subject=От сайта с постами' sx={{padding: '10px'}}><AlternateEmailIcon />

                </Link>


            </div>
        </Box>
    );
}
// retunr <a href=></a>


{/* <Link to="mailto:reports.in19@gmail.com&subject=Письмос сайта"/> */ }