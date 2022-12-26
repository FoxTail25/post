import { Container, CssBaseline, Pagination, PaginationItem } from "@mui/material"
import React from "react"
import { Banner } from "../Banner/banner"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import { PostList } from "../PostList/post-list"
import { postData } from "./posts"


// console.log(postData)





const App = () => {
    
    
    let countedPost = [];
    
    function postCount(i = 0) {
        let count = i + 12 > 27 ? 27 : i + 12;
        for (i; i < count; i++) {
            countedPost.push(postData[i])
        }
        return countedPost
    }
    
    postCount(23)

// console.log(countedPost)

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
                <Banner />
                <PostList postData={countedPost} />
            </Container>

            <Pagination count={3} color="primary" />

            <Footer />
        </>
    )
}


export default App