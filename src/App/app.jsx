import { Container, CssBaseline, Pagination, PaginationItem } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Banner } from "../Banner/banner"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import { PostList } from "../PostList/post-list"
import { postData } from "./posts"


// console.log(postData)





const App = () => {
    
    let countedPost = [];
    
    const [dataState, setDataState] = useState([])

    useEffect(() =>    
    postCount(),[])
    
    function postCount(i = 0) {
        
        countedPost = [];
        
        let count = i + 12 > 27 ? 27 : i + 12;
        for (i; i < count; i++) {
            countedPost.push(postData[i])
        }
        return setDataState(countedPost)
    }
    

    function postPage(num) {
        switch(num) {
            case 1 : return postCount();
            case 2 : return postCount(11);
            case 3 : return postCount(23);
            default: return postCount();
        }
    }

    // postPage()

    let pagePostCount = Math.ceil(postData.length / 12) // Количество страниц пагинации


    return (
        <>
            <CssBaseline />
            <Header />
            <Stack>

                <Container sx={{
                    display: "flex",
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    gap: '10px',
                    marginTop: '10px',
                    // height: '100vh',

                }} maxWidth='xl'>
                    <Banner />
                    <PostList postData={dataState} />
                </Container>

                <Container sx={{
                    display: "flex",
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    padding: '15px'
                    }}>

                    <Pagination count={pagePostCount} color="primary" onChange={(event, num) => {return console.log(num, postPage(num))}}/>


                </Container>

            </Stack>

            <Footer />
        </>
    )
}


export default App