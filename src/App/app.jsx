
import { Container, CssBaseline, Pagination } from "@mui/material"

import { Stack } from "@mui/system"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Banner } from "../Banner/banner"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import { PostList } from "../PostList/post-list"
import { postData } from "./posts"
// import s from './app.module.css'
import {} from './app.css'
import { Snow } from "../Snow/snow"
import api from "../utils/api"








const App = () => {
    
    
    
    const[userData, setUserData] = useState([]);
    
    useEffect(() => {api.getUserInfo().then((data) => setUserData(data))},[])
    
    // console.log(userData)



    let countedPost = [];

    const [dataState, setDataState] = useState([])

    useEffect(() =>
        postCount(), [])

    function postCount(i = 0) {  //Создаём массив из 12 постов для отображения

        countedPost = [];

        let count = i + 12 > 27 ? 27 : i + 12;
        for (i; i < count; i++) {
            countedPost.push(postData[i])
        }
        return setDataState(countedPost)
    }

   

    function postPage(num) {  //Посты, которые будут отражены в зависимости от выбранной страницы

       

        switch (num) {
            case 1: return postCount();
            case 2: return postCount(11);
            case 3: return postCount(23);
            default: return postCount();
        }
    }


    let pagePostCount = Math.ceil(postData.length / 12) // Количество страниц пагинации

   


    return (
        <>
            <CssBaseline />

            <Header userInfo={userData}/>
                <Snow/>
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

                </Container>
                <Container sx={{
                    display: "flex",
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    padding: '15px',
                    mb: '1%',
                }}>

                    <Pagination count={pagePostCount} color="primary" onChange={(event, num) => postPage(num)} sx={{
                        background: 'white',
                        borderRadius: '10px'
                    }} />

                </Container>
                <Container sx={{
                    display: "flex",
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    gap: '10px',
                    marginTop: '10px',
                    // height: '100vh',

                }} maxWidth='xl'>
                    <PostList postData={dataState} />
                </Container>

                <Container sx={{
                    display: "flex",
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    padding: '15px',
                    mb: '10%',
                }}>

                    {/* <Pagination count={pagePostCount} color="primary" onChange={(event, num) => postPage(num)} sx={{
                        background: 'white',
                        borderRadius: '10px'
                    }} /> */}


                </Container >

            </Stack>

            <Footer />
        </>
    )
}


export default App