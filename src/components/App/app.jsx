

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
import { Route, Routes, useLocation } from 'react-router-dom';
import { NotFound } from "../../Pages/not-found/notFound"
import { PostPage } from "../../Pages/post-pages/postPages"
import AllPost from "../../Pages/all-post-page/allpostpage"




const App = () => {


    // const navigate = useNavigate()
    const location = useLocation()
  
    const backgroundLocation = location.state?.backgroundLocation;
    const initialPath = location.state?.initialPath

    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);

    useEffect(() => { api.getUserInfo().then((data) => setUserData(data)) }, [])
    useEffect(() => { api.getAllPosts().then((data) => setPostData(data)) }, [])


    const [pageNumber, setPageNumber] = useState(1)


    //////////////////////////////////////////// функция изменения лайка ///////////////////////////////


    function changeStateLikedPost(likesArr, postId) {

        api.changePostLike(postId, likeIsHer(likesArr, userData._id)).then((res) => updatePostState(res));

    }
    function updatePostState(likedPost) {

        let updatedPostData = postData.map(el => { return el._id !== likedPost._id ? el : likedPost; });
        setPostData(updatedPostData)

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
            api.deletePost(_id)
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <CssBaseline />
            <AllContextData.Provider value={[countedPost, changeStateLikedPost, deletePost]}>
                <allUserData.Provider value={userData}>
                    <Header />

                    <Snow />
                    <main className="main">

                        {/* <Routes> */}
                        <Routes location={(backgroundLocation && { ...backgroundLocation, pathname: initialPath }) || location}>

                            <Route index element={<AllPost
                                pagePostCount={pagePostCount} setPageNumber={setPageNumber} />} />
                                
                            <Route path='/post/:postId' element={<PostPage />} />
                            <Route path="*" element={<NotFound />} />

                        </Routes>

                    </main>

                    <Footer />
                </allUserData.Provider>
            </AllContextData.Provider>

        </>
    )
}


export default App;