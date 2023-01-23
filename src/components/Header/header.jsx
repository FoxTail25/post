import React from "react";
import { AppBar, Avatar, CardHeader, Typography } from "@mui/material";
import { useContext } from "react";
import { allUserData } from "../context/context";
import checkAvatar from "../../utils/avatar";
import TransitionsModal from "../TransitModal/transitModal";
import { useState } from "react";
import s from './header.module.css';
import dayjs from "dayjs";
import { Clock } from "../Clock/Clock";




export const Header = () => {


    const { userData: userInfo, logOut } = useContext({ ...allUserData })
    const [onpenUserModal, setOpenUserModal] = useState(false)


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
                    {/* <Typography  
                    className={s.projectName}
                    > */}
                        <Clock />
                    {/* </Typography> */}

                    <div style={{
                        display: 'flex',
                        padding: '5px 10px',
                    }}>

                        <Typography
                            className={s.projectName}
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
                                <CardHeader className={s.headerUserData}
                                    avatar={
                                        userInfo && <Avatar aria-label="recipe" src={checkAvatar(userInfo)}
                                        >
                                            {checkAvatar(userInfo)}
                                        </Avatar>
                                    }
                                    titleTypographyProps={{
                                        color: 'white',
                                    }}
                                    title={userInfo?.about}
                                    subheaderTypographyProps={{
                                        color: 'whitesmoke',
                                    }}
                                    subheader={userInfo?.name}
                                    onClick={() => setOpenUserModal(!onpenUserModal)}

                                />


                                <button className={s.logOutBtn} onClick={() => logOut()}>Log Out</button>


                            </div>
                            : null
                    }


                </div>




            </AppBar >

            <TransitionsModal onpenUserModal={onpenUserModal} setOpenUserModal={setOpenUserModal} />

        </>
    )
}


