// import { TableContainer } from "@mui/material";
// import { Pagination, PaginationItem } from "@mui/material";
// import { Stack } from "@mui/system";

// import { useEffect } from "react";
import { Post } from "../Post/post";


const PostList = ({postData}) => {

    // [posts, setPosts] = useStat()
    

console.log(postData)

    return (
        <>

         {postData.map(el => <Post key={el._id} {...el} />)}

        </>
    )
}


export { PostList };