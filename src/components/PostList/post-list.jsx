
import { useContext } from "react";
import { AllContextData } from "../context/context";
import { Post } from "../Post/post";


const PostList = () => {
    
    const countedPost = useContext(AllContextData)

    // console.log(countedPost)

    let post = (!!countedPost[0]) ? countedPost[0]: [];


    return (
        <>

         {post.map(el => <Post key={el._id} {...el} />)}

        </>
    )
}



export { PostList };