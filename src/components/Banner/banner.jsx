import { CardMedia, Container, } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import BasicModal from "../Modal/modal"
import { Search } from "../Search/Search"


const Banner = () => {

    const urlpage = useParams()

    return (
        <>
            <Container maxWidth='xl'
                sx={{
                    height: '120px',
                    backgroundColor: 'aliceblue',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '10px',
                    marginTop: 16,
                    minWidth: '345px'

                }}
            >

                <div style={{
                    display: 'flex',
                    flexShrink: '4'
                }}>

                    <CardMedia
                        component="img"
                        height="100"
                        image="img/ded.png"
                        alt="Изображение ДедаМороза"
                    >
                    </CardMedia>


                    <CardMedia
                        component="img"
                        height="100"
                        src='img/elka2.png'
                        alt="Изображение ёлки"
                    >
                    </CardMedia>

                </div>

                <Search />

                <BasicModal urlpage={urlpage} />

            </Container>

        </>
    )
}


export { Banner }