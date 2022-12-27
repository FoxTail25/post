import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import { ColorizeOutlined } from '@mui/icons-material';

export const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        paddingTop: 5,
        marginTop: 10
        }}>

            <Typography
            >Develeped by FoxTail25 in 25.12.2022</Typography>

            <BottomNavigation 
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Box>
    );
}