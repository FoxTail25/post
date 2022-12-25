import React from "react"
import { Post } from "../Post/post";
// import {postData} from "./posts"
// console.log(postData)

const PostList = ({postData}) => {

    


    return (
        <>
            {postData.map(el => <Post key={el._id} data={el}/>)}
  
        </>
    )
}


export { PostList };