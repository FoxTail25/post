

import { CssBaseline, } from "@mui/material"

import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import './app.css'
import { Snow } from "../Snow/snow"
import api from "../../utils/api"
import { AllContextData } from "../context/context"
import { allUserData } from "../context/context"
import { likeIsHer } from "../../utils/postlike"
import { Route, Routes } from 'react-router-dom';
import { NotFound } from "../../Pages/not-found/notFound"
import { PostPage } from "../../Pages/post-pages/postPages"
import AllPost from "../../Pages/all-post-page/allpostpage"




const App = () => {



    const [userData, setUserData] = useState([]);         // Стейт данных пользователя
    const [postData, setPostData] = useState([]);         // Стейт постов
    const [allPostCount, setAllPostcount] = useState([]); //  Стейт общего количества постов
    const [pageNumber, setPageNumber] = useState(1)       // Стейт пагинации
    
    useEffect(() => { api.getUserInfo().then((data) => setUserData(data)) }, [])   // апи запрос на получение с сервера данных пользователя
    useEffect(() => { paginatePage(1) }, [])   // апи запрос на получение постов с сервера.

    // console.log(userData)
    
    //////////////////////////////////////////////  блок пагинации //////////////////////////////////////////////

    let pagePostCount = Math.ceil(allPostCount / 12) // Количество страниц пагинации
    
    function paginatePage(page=1 ) {
        // console.log(page)
            let number = 12
        api.getPaginatePosts(page, number).then((data) => 
        {setPostData(data.posts); setAllPostcount(data.total); setPageNumber(page)})
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    

    //////////////////////////////////////////// функция изменения лайка ////////////////////////////////////

    function changeStateLikedPost(likesArr, postId) {

        api.changePostLike(postId, likeIsHer(likesArr, userData._id)).then((res) => updatePostState(res));

    }
    function updatePostState(likedPost) {

        let updatedPostData = postData.map(el => { return el._id !== likedPost._id ? el : likedPost; });
        setPostData(updatedPostData)

    }

    //////////////////////////// функция обновления стейта постов, после добавления нового поста ////////////////////

    function addNewPostInState(newPost) {

        let updatedPostData = [...postData, newPost];
        setPostData(updatedPostData)
    }
    
    /////////////////////////////////////////// Функция удаления поста /////////////////////////////////////////
    
    function deletePost(author, _id) {
        
        (author._id !== userData._id) ? alert('Человек старался, писал, душу вкадывал. А ты удалять? Не хорошо...') : delPost(_id);
        
        function delPost(_id) {

            api.deletePostById(_id)

            let updatedPostData = postData.filter((e) => {return e._id !== _id})
            setPostData(updatedPostData)
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    
    return (
        <>
            <CssBaseline />  {/* сброс CSS стилий от MaterialUI */}

            <AllContextData.Provider value={[
                postData, changeStateLikedPost, deletePost, addNewPostInState, updatePostState ]}>

                <allUserData.Provider value={userData}>

                    <Routes>
                        <Route path="*" element={<Header />} />
                    </Routes>

                    <Snow />

                    <main className="main">

                        <Routes>

                            <Route index element={<AllPost
                                pagePostCount={pagePostCount} 
                                pageNumber={pageNumber} 
                                paginatePage={paginatePage}/>} />
                        

                            <Route path='/post/:postId' element={<PostPage />} />
                            <Route path="*" element={<NotFound />} />

                        </Routes>

                    </main>

                    <Routes>
                        <Route path="*" element={<Footer />} />
                    </Routes>

                </allUserData.Provider>

            </AllContextData.Provider>

        </>
    )
}

export default App;
