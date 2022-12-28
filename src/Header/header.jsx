import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
const Header = () => {
    return (
        <>
            {/* <Box sx={{
                flexGrow: 1,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                }}
            } > */}
                <AppBar position="static" sx={{
                // maxWidth: '1200px',
                // display: 'flex',
                // justifyContent: "center"

                }}>
                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Посты
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
    {/* </Box> */}
        </>
    )
}


export { Header };