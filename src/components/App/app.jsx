

import { CssBaseline, } from "@mui/material"

import React, { useMemo } from "react"
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
import { POST_QUANTITY } from "../../utils/constants"
import { HelloMessage } from "../HelloMessage/HelloMessage"

// let message = true

const App = () => {



    const [autorozation, SetAutorization] = useState(false);    // Стейт авторизации
    const [authErr, setAuthErr] = useState('');   // стейт ошибок авторизации




    useEffect(() => {
        if (localStorage.getItem('postApi') !== '' && localStorage.getItem('postApi')) {
            SetAutorization(true)
        }
    }, [])


    ///////////////////////////// Блок авторизации и регистрации /////////////////////////////

    function singIn(userData) {  // авторизация

        api.singInUser(userData)
            .then((data) => authIsTru(data))
            .catch((err) => setAuthErr(err.message))
    }
    function singUp(userData) {  // регистрация

        api.singUpUser(userData)
            .then((data) => {
                api.singInUser(data);
            })
            .catch((err) => setAuthErr(err.message))
    }
    function authIsTru(data) {   // вход в приложение при успешной регистрации/авторизации
        setUserData(data.data)
        localStorage.setItem('postApi', data.token)
        localStorage.setItem('group', data.data.group)
        SetAutorization(true)
    }
    function logOut() {         // Выход из учётной записи приложения.

        const result = window.confirm('Уже уходите?')

        if (result) {
            localStorage.removeItem('postApi');
            localStorage.removeItem('group');
            SetAutorization(false);
            setUserData({})
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////



    const [userData, setUserData] = useState([]);         // Стейт данных пользователя
    const [postData, setPostData] = useState([]);         // Стейт постов
    const [allPostCount, setAllPostcount] = useState([]); //  Стейт общего количества постов
    const [pageNumber, setPageNumber] = useState(1)       // Стейт пагинации

    useEffect(() => {

        if (autorozation) {

            api.getUserInfo().then((data) => setUserData(data))
        }

        if (autorozation) {
            paginatePage(1)
        }


    }, [autorozation])   // Хук useEffect (зависимость стейт авторизации) апи запрос на получение с сервера данных пользователя и массива с постами



    //////////////////////////////////////////////  блок пагинации //////////////////////////////////////////////

    let pagePostCount = Math.ceil(allPostCount / 12) // Количество страниц пагинации

    function paginatePage(currentPage = 1, search = '') {
        let postQuantity = POST_QUANTITY  // Константа определяющая количество постов на странице
        api.getPaginatePosts(currentPage, postQuantity, search)
            .then((data) =>       // апи запрос на получение постов с сервера.
            { setPostData(data.posts); setAllPostcount(data.total); setPageNumber(currentPage) })
            .catch((err) => console.log("ошибка при запросе постов:", err.message))
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
        (author._id !== userData._id) ? alert('Нельзя удалять то, что не создавали') : delPost(_id);

        function delPost(_id) {

            const result = window.confirm('хорошо подумал?')
            if (result) {
                api.deletePostById(_id)
                let updatedPostData = postData.filter((e) => { return e._id !== _id })
                setPostData(updatedPostData)
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <CssBaseline />  {/* сброс CSS стилий от MaterialUI */}

            <AllContextData.Provider value={[   // Контекс для работы с постами
                postData,
                changeStateLikedPost,
                deletePost,
                addNewPostInState,
                updatePostState,
                paginatePage
            ]}>
                <allUserData.Provider value={{  // Контекст данных пользователя
                    userData,
                    autorozation,
                    singIn,
                    singUp,
                    logOut,
                    setUserData,
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
                                        <PostPage />
                                    } />
                                    <Route path="*" element={
                                        <NotFound />
                                    } />
                                </Routes>
                            </main>

                            : <Attention />
                    }

                    {
                        (authErr !== '')
                            ? <AuthError authErr={authErr} setAuthErr={setAuthErr} />
                            : null
                    }
                    {/* {
                        helloMessage
                            ? <HelloMessage changeMessage={changeMessage} />
                            : null
                    } */}



                    <Routes>
                        <Route path="*" element={<Footer />} />
                    </Routes>

                </allUserData.Provider>
            </AllContextData.Provider>

        </>
    )
}

export default App;
