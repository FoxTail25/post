// import { TableContainer } from "@mui/material";
import React from "react";
import { Post } from "../Post/post";


const PostList = ({ postData }) => {
    
    console.log(typeof {postData})
    console.log(postData[0])
    
    let countedPost = [];

    function postCount(data, i=0) {
        let count = i + 12 > 27 ? 27: i + 12;
        for( i; i < count; i++) {
            countedPost.push(data[i])
        }
        return countedPost
    }
    postCount(postData, 23)



    return (
        <>
            {countedPost.map(el => <Post key={el._id} {...el} />)}
        </>
    )
}


export { PostList };