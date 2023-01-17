
import { useContext } from "react";
import { NotFound } from "../../Pages/not-found/notFound";
import { AllContextData, allUserData } from "../context/context";
import { Post } from "../Post/post";


const PostList = () => {

    const countedPost = useContext(AllContextData)

    const { autorozation: autohorized } = useContext({ ...allUserData })


    let post = (!!countedPost[0]) ? countedPost[0] : [];


    return (
        <>

            {
            !!post.length
                ? post.map(el => <Post key={el._id} {...el} />)
                : <NotFound />

            }


        </>
    )
}



export { PostList };