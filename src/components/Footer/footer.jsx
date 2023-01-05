import * as React from 'react';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Footer = () => {


    return (
        <Box sx={{
            // position: 'fixed',
            // bottom: 0,
            width: '100%',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            gap: '10px',
            backgroundColor: 'aliceblue',
            marginBottom: 0,
        }}>




            <Typography noWrap={true} sx={{ fontSize: '14px' }}> thisProjectAuthor: Foxtail25 </Typography>

            <Link href="tel:+79057800777" sx={{
                padding: '10px',

                opacity: 0.7,
                '&:hover': {
                    opacity: [0.8, 0.9, 1],
                },
            }}><ContactPhoneIcon />
            </Link>

            <Link href='https://t.me/Siverk' sx={{
                padding: '10px',
                opacity: 0.7,
                '&:hover': {
                    opacity: [0.8, 0.9, 1],
                },
            }}><TelegramIcon />
            </Link>

            <Link href='mailto:foxtail25@gmail.com&subject=От сайта с постами' sx={{
                padding: '10px',
                opacity: 0.7,
                '&:hover': {
                    opacity: [0.8, 0.9, 1],
                },
            }}><AlternateEmailIcon />

            </Link>


        </Box>
    );
}
