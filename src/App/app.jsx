import { Container, CssBaseline } from "@mui/material"
import React from "react"
import { Banner } from "../Banner/banner"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import { PostList } from "../PostList/post-list"
import { postData } from "./posts"


// console.log(postData)


const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Container sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                gap: '10px',
                marginTop: '10px',
                // height: '100vh',

            }} maxWidth='xl'>
                <Banner/>
                <PostList postData={postData} />
            </Container>
            {/* <Button variant="contained" onClick={() => { console.log('Есть контакт!') }} >Добавить пост</Button> */}
<Footer/>
        </>
    )
}


export default App