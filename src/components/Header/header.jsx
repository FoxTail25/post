import React from "react";
import { AppBar, Avatar,  CardHeader, Typography } from "@mui/material";
import { useContext } from "react";
import { allUserData } from "../context/context";
import checkAvatar from "../../utils/avatar";




export const Header = () => {


    const { userData: userInfo } = useContext({ ...allUserData })




    return (
        <>

            <AppBar position="fixed" 
            sx={{alignItems: 'space-around'}}
            >

                <div
                    style={{
                        display: 'flex',
                        // maxWidth: '1000px',
                        minWidth: '0px',
                        // flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        padding: '5px 10px',
                        // flex: 1
                    }}>

                        <Typography variant="h6" component="div">
                            Project "Posts"
                        </Typography>


                    </div>



                    <CardHeader sx={{padding: '5px',
                    maxWidth: '300px'}}

                        avatar={

                            userInfo && <Avatar aria-label="recipe" src={checkAvatar(userInfo)}>
                                {checkAvatar(userInfo)}
                            </Avatar>

                        } 

                        title={userInfo?.about + ': ' + userInfo?.name}

                    />


                </div>



            </AppBar>
        </>
    )
}


