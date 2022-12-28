
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


const App = () => {

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

            <Header />

            <div className='snow s1'></div>
            <div className='snow s2'></div>
            <div className='snow s3'></div>
            <div className='snow s4'></div>
            <div className='snow s5'></div>
            <div className='snow s6'></div>
            <div className='snow s7'></div>
            <div className='snow s8'></div>
            <div className='snow s9'></div>
            <div className='snow s10'></div>
            <div className='snow s11'></div>
            <div className='snow s12'></div>
            <div className='snow s13'></div>
            <div className='snow s14'></div>
            <div className='snow s15'></div>
            <div className='snow s16'></div>
            <div className='snow s17'></div>
            <div className='snow s18'></div>
            <div className='snow s19'></div>
            <div className='snow s20'></div>
            <div className='snow s21'></div>
            <div className='snow s22'></div>
            <div className='snow s23'></div>
            <div className='snow s24'></div>
            <div className='snow s25'></div>
            <div className='snow s26'></div>
            <div className='snow s27'></div>
            <div className='snow s28'></div>
            <div className='snow s29'></div>
            <div className='snow s31'></div>
            <div className='snow s34'></div>
      
            <div className='snow s37'></div>
            <div className='snow s38'></div>
            <div className='snow s40'></div>
            <div className='snow s41'></div>
            <div className='snow s42'></div>
            <div className='snow s43'></div>
            <div className='snow s44'></div>
            <div className='snow s45'></div>
            <div className='snow s46'></div>
            <div className='snow s47'></div>
            <div className='snow s48'></div>
            <div className='snow s49'></div>
            <div className='snow s50'></div>


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