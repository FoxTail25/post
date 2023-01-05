import { Container, Typography } from "@mui/material"
import React from "react"
import ButtonJsx from "../Button/button"


const Banner = () => {
    return (
        <Container maxWidth='xl'
            sx={{
                height: '100px',
                backgroundColor: 'aliceblue',
                margin: '20px',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}
        >
            <Typography>Дипломаная работа</Typography>
            <ButtonJsx title='Добавить пост'/>

        </Container>
    )
}


export { Banner }