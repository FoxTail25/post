import { Container } from "@mui/material"
import React from "react"
import ButtonJsx from "../Button/button"

const Banner = () => {
    return (
        <Container maxWidth='xl'
            sx={{
                height: '200px',
                backgroundColor: 'aliceblue',
                margin: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <ButtonJsx title='Добавить пост'/>

        </Container>
    )
}


export { Banner }