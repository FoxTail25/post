
import { Container, CssBaseline, Pagination } from "@mui/material"

import { Stack } from "@mui/system"
import React from "react"
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
import { likeIsHer } from "../utils/postlike"







const App = () => {


    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);

    useEffect(() => { api.getUserInfo().then((data) => setUserData(data)) }, [])
    useEffect(() => { api.getAllPosts().then((data) => setPostData(data)) }, [])

    const [pageNumber, setPageNumbet] = useState(1)


    //////////////////////////////////////////// функция изменения лайка ///////////////////////////////


    function updatePostState(likedPost) {
        console.log(likedPost)
        let updatedPostData = postData.map(el => { return el._id !== likedPost._id ? el : likedPost; });
        setPostData(updatedPostData)
    }
    function changeStateLikedPost(likesArr, postId) {

        api.changePostLike(postId, likeIsHer(likesArr, userData._id)).then((res) => updatePostState(res));

    }


    ///////////////////////////////////////// Ниже блок пагинации //////////////////////////////////

    let countedPost;
    if (postData.length >= 12) {

        postCounted()

    }
    function postCounted(num = pageNumber) {

        countedPost = [];
        let count = 12 * num > postData.length ? postData.length : 12 * num;
        let i = (num === 1) ? 0 : (12 * num) - ((12 * (num - 1)))
        for (i; i < count; i++) {
            countedPost.push(postData[i])
        }

        return countedPost

    }
    let pagePostCount = Math.ceil(postData.length / 12) // Количество страниц пагинации

    ////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////// Функция удаления поста ///////////////////////////////////////

    function deletePost(author, _id) {
     
        (author._id !== userData._id) ? alert('Человек старался, писал, душу вкадывал. А ты удалять? Не хорошо...') : delet();
        function delet() {
            alert('точно?') ? api.deletePost(_id) : alert('И правильно!))');
        }
    }

    return (
        <>
            <CssBaseline />
            <AllContextData.Provider value={[countedPost, changeStateLikedPost, deletePost]}>
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

                        <Pagination count={pagePostCount} color="primary" onChange={(event, num) => setPageNumbet(num)} sx={{
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

                    </Container >

                </Stack>

                <Footer />
            </AllContextData.Provider>
        </>
    )
}


export default App;