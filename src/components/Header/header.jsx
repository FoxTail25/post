import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { allUserData } from "../context/context";




export const Header = () => {


    const userInfo = useContext(allUserData)



    return (
        <>

            <AppBar position="fixed" >
                <Container sx={{
                    maxwidth: '1600px',
                    minWidth: '0px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Container >

                        <Typography variant="h6" component="div">
                            "Посты" (2й дипломный проект)
                        </Typography>


                    </Container>

                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                        flexWrap: 'wrap'

                    }}>

                        <Typography variant="h6" component="div" >

                            {userInfo?.about}:

                        </Typography>

                        {/* <div style={{
                            width: '60px',
                            padding: '0 6px',
                            borderRadius: '50%'
                        }}>
                            <CardMedia component="img"
                            variant='rounded'
                                height="50"
                                src={userInfo?.avatar}
                                alt="Изображение">

                            </CardMedia>
                        </div> */}
                        <Typography variant="h6" component="div" noWrap sx={{ padding: '10px' }}>

                            {userInfo?.name}

                        </Typography>
                        {/* <Typography variant="h6" component="div" noWrap>

                            {userInfo?.email}

                        </Typography> */}
                        {/* <img src={userInfo?.avatar}> */}


                    </Container>
                </Container>

            </AppBar>
        </>
    )
}


