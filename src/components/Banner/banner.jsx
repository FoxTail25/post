import { CardMedia, Container, Typography } from "@mui/material"
import React from "react"
import ButtonJsx from "../Button/button"


const Banner = () => {
    return (
        <Container maxWidth='xl'
            sx={{
                height: '120px',
                backgroundColor: 'aliceblue',
                margin: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '5px'
            }}
        >
            {/* <Typography>Дипломаная работа</Typography> */}

            <div style={{ display: 'flex', }}>

                <CardMedia
                    component="img"
                    height="100"
                    src='./241-2419780_друзья-от-всей-души-поздравляю-вас-с-наступающим-новым-дед-мороз-с.png'
                    alt="Изображение"
                >
                </CardMedia>
            </div>

            <div style={{ flex: '.7' }}>


                <CardMedia
                    component="img"
                    height="100"
                    src='./elka2.png'
                    alt="Изображение"
                >
                </CardMedia>

            </div>

            <ButtonJsx title='Добавить пост' />

        </Container>
    )
}


export { Banner }