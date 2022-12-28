import React from "react";
import { AppBar,  Container,  Typography } from "@mui/material";




export const Header = ({ userInfo }) => {

    // console.log(userInfo)
    // console.log(typeof userInfo)



    return (
        <>

            <AppBar position="static" sx={{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Container >

                    <Typography variant="h6" component="div">
                        Проект "Посты"
                    </Typography>


                    {/* <Button color="inherit">Login</Button> */}
                </Container>

                <Container sx={{
                    display: 'flex',
                    height: '60px',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}>

                    <Typography variant="h6" component="div" >

                        {userInfo?.about}:

                    </Typography>

                    <Typography variant="h6" component="div" noWrap sx={{padding: '10px'}}>

                        {userInfo?.name}

                    </Typography>

                    <Typography variant="h6" component="div" noWrap>

                        {userInfo?.email}

                    </Typography>

                </Container>

            </AppBar>
            {/* </Box> */}
        </>
    )
}


