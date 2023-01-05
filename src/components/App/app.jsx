
import { CssBaseline, } from "@mui/material"

import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
// import { PostList } from "../PostList/post-list"
import './app.css'
import { Snow } from "../Snow/snow"
import api from "../../utils/api"
import { AllContextData } from "../context/context"
import { likeIsHer } from "../../utils/postlike"
import { Route, Routes } from 'react-router-dom';
import { NotFound } from "../../Pages/not-found/notFound"
import { PostPage } from "../../Pages/post-pages/postPages"
import AllPost from "../../Pages/all-post-page/allpostpage"
import { Postp2 } from "../../Pages/postp2/postp2"







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
        // console.log(countedPost)
        return countedPost

    }
    let pagePostCount = Math.ceil(postData.length / 12) // Количество страниц пагинации

    ////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////// Функция удаления поста ///////////////////////////////////////

    function deletePost(author, _id ) {
        
        (author._id !== userData._id) ? alert('Человек старался, писал, душу вкадывал. А ты удалять? Не хорошо...') : delet();
        
        function delet() {
            api.deletePost(_id) 
        }
    
    
    }

    return (
        <>
            <CssBaseline />
            <AllContextData.Provider value={[countedPost, changeStateLikedPost, deletePost]}>
                <Header userInfo={userData} />

                <Snow />
                <main className="main">

                    <Routes>


                        <Route path="/" element={<AllPost 
                        postData={countedPost} pagePostCount={pagePostCount} setPageNumbet={setPageNumbet} 
                        />} />
                        {/* <Route path="/post/:postId" element={<Postp2/>}/> */}
                        <Route path='/post/:postId' element={<PostPage/>} />
                        <Route path="*" element={<NotFound />} />

                    </Routes>

                </main>

                <Footer />
            </AllContextData.Provider>
        </>
    )
}


export default App;