import { SettingsInputCompositeSharp } from "@mui/icons-material"
import { Container, CssBaseline, Pagination, TextField, Stack, Link } from "@mui/material"
import React from "react"
import { useEffect, useState } from "react"
import { Banner } from "../Banner/banner"
import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"
import { PostList } from "../PostList/post-list"
import api from "../utils/api"
import { postData } from "./posts"


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
                />
            </Container>
            {/* <Button variant="contained" onClick={() => { console.log('Есть контакт!') }} >Добавить пост</Button> */}
            <Footer />
        </>
    )
}


export default App