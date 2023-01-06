import React from "react";
import { AppBar,  Container,  Typography } from "@mui/material";
import { useContext } from "react";
import { allUserData } from "../context/context";




export const Header = () => {


    const userInfo = useContext(allUserData)
    console.log(userInfo)



    return (
        <>

            <AppBar position="static" sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Container >

                    <Typography variant="h6" component="div">
                        Проект "Посты"
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

                    <Typography variant="h6" component="div" noWrap sx={{padding: '10px'}}>

                        {userInfo?.name}

                    </Typography>

                    <Typography variant="h6" component="div" noWrap>

                        {userInfo?.email}

                    </Typography>

                </Container>

            </AppBar>
        </>
    )
}


