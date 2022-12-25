import { Button, Container } from "@mui/material"
import React from "react"

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

            {/* <div>banner</div> */}
            <Button variant="contained" onClick={() => { console.log("Есть контакт") }}>Добавить постЭ</Button>

        </Container>
    )
}


export { Banner }