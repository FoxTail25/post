
import { Container, CssBaseline, Pagination } from "@mui/material"

import { Stack } from "@mui/system"
import React, { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Banner } from "../Banner/banner"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import { PostList } from "../PostList/post-list"
// import { postData } from "./posts"
// import s from './app.module.css'
import { } from './app.css'
import { Snow } from "../Snow/snow"
import api from "../utils/api"
import { AllContextData } from "../context/context"







const App = () => {

    const contextData = useContext(AllContextData)
    
    console.log(contextData)

    const [userData, setUserData] = useState([]);
    useEffect(() => { api.getUserInfo().then((data) => setUserData(data)) }, [])


    const [postData, setPostData] = useState([]);
    useEffect(() => { api.getAllPosts().then((data) => setPostData(data)) }, [])




    let pagePostCount = Math.ceil(postData.length / 12) // Количество страниц пагинации



    return (
        <>
            <CssBaseline />
            <AllContextData.Provider value={AllContextData}>
                <Header userInfo={userData} />
                <Snow />
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

                        <Pagination count={pagePostCount} color="primary" onChange={(event, num) => console.log(num)} sx={{
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

                        <PostList postData={postData} />

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
            </AllContextData.Provider>
        </>
    )
}


export default App