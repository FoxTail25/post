
import { useContext } from "react";
import { NotFound } from "../../Pages/not-found/notFound";
import { AllContextData } from "../context/context";
import { Post } from "../Post/post";


const PostList = () => {

    const countedPost = useContext(AllContextData)

    // const { autorozation: autohorized } = useContext({ ...allUserData })
    const search = countedPost[7]

    let post = (!!countedPost[0]) ? countedPost[0] : [];

// console.log(search)

    return (
        <>

            {
            !!post.length || !search
                ? post.map(el => <Post key={el._id} {...el} />)
                : <NotFound/>

            }


        </>
    )
}



export { PostList };