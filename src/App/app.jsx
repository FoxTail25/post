import { SettingsInputCompositeSharp } from "@mui/icons-material"
import { Container, CssBaseline, Pagination, TextField, Stack, Link } from "@mui/material"
import React from "react"
import { useEffect, useState } from "react"
import { Banner } from "../Banner/banner"
import { Footer } from "../Footer/footer"
import Header from "../Header/header"
import { PostList } from "../PostList/post-list"
import api from "../utils/api"
import { isLiked } from "../utils/constants"
// import { postData } from "./posts"


// console.log(postData)


const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        Promise.all([api.getPostList(), api.getUserInfo()])
            .then(([postsData, userData]) => {
                setCurrentUser(userData)
                setPosts(postsData);
            })
    }, [])



    function handleUpdateUserInfo(updateUserInfo) {
        api.setUserInfo(updateUserInfo)
            .then((newInfoUser) => {
                setCurrentUser(newInfoUser)
            })
    }

    function handlePostLike(post) {
        const liked = isLiked(post.likes, currentUser._id)
        api.changeLikePost(post._id, liked)

            .then((newCardPost) => {
                const newPosts = posts.map(cardPostState => {
                    console.log('Карточка из стейта', cardPostState);
                    console.log('Карточка c сервера', newCardPost);
                    return cardPostState._id === newCardPost._id ? newCardPost : cardPostState
                })
           setPosts(newPosts);
            })
    }

    
    return (
        <>
            <CssBaseline />
            <Header user={currentUser} onUpdateUserData={handleUpdateUserInfo} />
            <Container sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                gap: '10px',
                marginTop: '10px',
                // height: '100vh',

            }} maxWidth='xl'>
                <Banner />
                <PostList
                    //postData={postData} 
                    posts={posts}
                    onPostLike={handlePostLike}
                    currentUser={currentUser}
                />
            </Container>
            {/* <Button variant="contained" onClick={() => { console.log('Есть контакт!') }} >Добавить пост</Button> */}
            <Footer />
        </>
    )
}


export default App