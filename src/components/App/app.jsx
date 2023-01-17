

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
import { Attention } from "../Attention/Attention"
import { AuthError } from "../AuthError/AuthError"


const App = () => {

    // const data = {
    //     about: 'Frontend-developer',
    //     name: 'Шустиков Григорий Владимирович'

    // }

    // useEffect(() => {api.changeUserInfo( data, authToken).then(( data ) => console.log( data ))})


    const [autorozation, SetAutorization] = useState(false);         // Стейт авторизации
    const [authErr, setAuthErr] = useState('');
    const [authToken, setAuthToken] = useState('')

    
    function singIn(userData) {
        api.singInUser(userData).then((data) => authIsTru(data))
        .catch((err) => setAuthErr(err.message))
    } 
    
    function authIsTru(data) {
        console.log('display token', data.token)
        setAuthToken(data.token)
        console.log('display userData', data.data)
        setUserData(data.data)
        localStorage.setItem('postApi', authToken)
        SetAutorization(true)
    }

    // let token = localStorage.getItem('postApi')
// console.log('display token from App', token)


    const [userData, setUserData] = useState([]);         // Стейт данных пользователя
    const [postData, setPostData] = useState([]);         // Стейт постов
    const [allPostCount, setAllPostcount] = useState([]); //  Стейт общего количества постов
    const [pageNumber, setPageNumber] = useState(1)       // Стейт пагинации

    useEffect(() => {
        if (autorozation) {

            api.getUserInfo(authToken).then((data) => setUserData(data))
        }
    }, [autorozation])   // апи запрос на получение с сервера данных пользователя

    useEffect(() => {
        if (autorozation) {
            paginatePage(1)
        }
    }, [autorozation])





    //////////////////////////////////////////////  блок пагинации //////////////////////////////////////////////

    let pagePostCount = Math.ceil(allPostCount / 12) // Количество страниц пагинации

    function paginatePage(currentPage = 1, search = '') {
        let postQuantity = 12
        api.getPaginatePosts(currentPage, postQuantity, authToken, search).then((data) =>       // апи запрос на получение постов с сервера.
        { setPostData(data.posts); setAllPostcount(data.total); setPageNumber(currentPage) })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////// функция изменения лайка ////////////////////////////////////

    function changeStateLikedPost(likesArr, postId) {

        api.changePostLike(postId, likeIsHer(likesArr, userData._id), authToken).then((res) => updatePostState(res));
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

            api.deletePostById(_id, authToken)

            let updatedPostData = postData.filter((e) => { return e._id !== _id })
            setPostData(updatedPostData)
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <CssBaseline />  {/* сброс CSS стилий от MaterialUI */}

            <AllContextData.Provider value={[
                postData, changeStateLikedPost, deletePost, addNewPostInState, updatePostState, paginatePage, authToken
            ]}>
                <allUserData.Provider value={{
                    userData,
                    autorozation,
                    singIn
                }}>

                    <Routes>
                        <Route path="*" element={<Header />} />
                    </Routes>
                    <Snow />
                    {
                        autorozation

                            ? <main className="main">
                                <Routes>
                                    <Route index element={
                                        <AllPost pagePostCount={pagePostCount} pageNumber={pageNumber} paginatePage={paginatePage} />
                                    } />
                                    <Route path='/post/:postId' element={
                                        <PostPage authToken={authToken}/>
                                    } />
                                    <Route path="*" element={
                                <NotFound />
                            } />
                                </Routes>
                            </main>

                            : <Attention />
                    }

                    {
                        !autorozation & (authErr !== '')
                        ? <AuthError authErr={authErr} setAuthErr={setAuthErr}/>
                        :null
                    }


                    <Routes>
                        <Route path="*" element={<Footer />} />
                    </Routes>

                </allUserData.Provider>
            </AllContextData.Provider>

        </>
    )
}

export default App;
