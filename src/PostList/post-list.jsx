// import { TableContainer } from "@mui/material";
// import { Pagination, PaginationItem } from "@mui/material";
// import { Stack } from "@mui/system";

// import { useEffect } from "react";
import { Post } from "../Post/post";


//<<<<<<< ficha-background
//const PostList = ({postData}) => {
//=======
const PostList = ({ posts, onPostLike, currentUser}) => {
//>>>>>>> develop

    // [posts, setPosts] = useStat()
    

// console.log(postData)

    return (
        <>



        {
            posts.map((el) => <Post key={el._id} {...el} onPostLike = {onPostLike} currentUser = {currentUser}/>)
        }

        </>
    )
}


export { PostList };