// import { TableContainer } from "@mui/material";
import React from "react";
import { Post } from "../Post/post";


const PostList = ({ posts, onPostLike, currentUser}) => {



    return (
        <>
        {
            posts.map((el) => <Post key={el._id} {...el} onPostLike = {onPostLike} currentUser = {currentUser}/>)
        }
        </>
    )
}


export { PostList };