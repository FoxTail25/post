import { Container, CssBaseline } from "@mui/material"
import React from "react"
import { Header } from "../Header/header"
import { PostList } from "../PostList/post-list"
import {postData} from "./posts"


console.log(postData)


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
                marginTop: '10px'
            }}>
                <PostList />
            </Container>
            {/* <Button variant="contained" onClick={() => { console.log('Есть контакт!') }} >Добавить пост</Button> */}

        </>
    )
}


export default App