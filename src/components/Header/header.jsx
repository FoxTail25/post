import React from "react";
import { AppBar, Avatar, CardHeader, Typography } from "@mui/material";
import { useContext } from "react";
import { allUserData } from "../context/context";
import checkAvatar from "../../utils/avatar";
import './index.css';




export const Header = () => {


    const { userData: userInfo, logOut } = useContext({ ...allUserData })


    return (
        <>

            <AppBar position="fixed"
                sx={{ display: 'flex', alignItems: 'space-around' }}
            >

                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-around',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        padding: '5px 10px',
                    }}>

                        <Typography
                            className="project-name"
                        >
                            Project "Posts"
                        </Typography>


                    </div>


                    {
                        Object.entries(userInfo).length > 0

                            ? <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingRight: '5vw'
                            }}>

                                <CardHeader className="header-user-data"
                                    

                                    avatar={

                                        userInfo && <Avatar aria-label="recipe" src={checkAvatar(userInfo)}
                                        // classes={{width: '3vw'}}
                                        //     sx = {{width: '4vw',
                                        // height: '4vw'}}
                                        >
                                            {checkAvatar(userInfo)}
                                        </Avatar>

                                    }

                                    titleTypographyProps={{
                                        color: 'white',
                                        //  fontSize: '1.2vw'
                                    }}
                                    title={userInfo?.name}
                                    subheaderTypographyProps={{
                                        color: 'whitesmoke',
                                        // fontSize: '1.2vw'
                                    }}
                                    subheader={userInfo?.about}
                                    onClick = {() => console.log('headClick')}

                                />


                                <button className="logOutBtn" onClick={() => logOut() }>Log Out</button>


                            </div>
                            : null
                    }


                </div>




            </AppBar >
        </>
    )
}


