import { CardMedia, Container, } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import BasicModal from "../Modal/modal"


const Banner = () => {

    const urlpage = useParams()


    return (
        <>
            <Container maxWidth='xl'
                sx={{
                    height: '120px',
                    backgroundColor: 'aliceblue',
                    margin: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '5px',
                    marginTop: 16,

                }}
            >


                <div style={{ display: 'flex', }}>

                    <CardMedia
                        component="img"
                        height="100"
                        image="img/ded.png"
                        alt="Изображение ДедаМороза"
                    >
                    </CardMedia>
                </div>

                <div style={{ flex: '.7' }}>


                    <CardMedia
                        component="img"
                        height="100"
                        src='img/elka2.png'
                        alt="Изображение ёлки"
                    >
                    </CardMedia>

                </div>
                
                <BasicModal urlpage={urlpage}/>

            </Container>

        </>
    )
}


export { Banner }