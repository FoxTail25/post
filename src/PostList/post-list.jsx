
import { useContext } from "react";
import { AllContextData } from "../context/context";
import { Post } from "../Post/post";


const PostList = ({postData}) => {
    
    const countedPost = useContext(AllContextData)
    // console.log(countedPost)
    
// console.log(!!countedPost[0])

    let post = (!!countedPost[0]) ? countedPost[0]: [];


    return (
        <>

         {/* { postData.map(el => <Post key={el._id} {...el} />)} */}
         {post.map(el => <Post key={el._id} {...el} />)}

        </>
    )
}


export { PostList };