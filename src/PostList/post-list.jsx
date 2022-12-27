// import { TableContainer } from "@mui/material";
import React from "react";
import { Post } from "../Post/post";


const PostList = ({ posts }) => {



    return (
        <>
        {
            posts.map((el) => <Post key={el._id} {...el} />)
        }
        </>
    )
}


export { PostList };