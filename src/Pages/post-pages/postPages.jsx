import { Avatar, Badge, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AllContextData } from "../../components/context/context"
import api from "../../utils/api"
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import s from './postPage.module.css'
import { PostTag } from "../../components/PostTag/post-tag";
import PostComment from "../../components/PostComments/PostComments";
import parse from 'html-react-parser';


export const PostPage = () => {

    const data = useContext(AllContextData)
    const changeStateLikedPost = data[1]
    const deletePost = data[2]
    const postIdFromUrl = useParams()

    const [singlePost, setSinglePost] = useState({})

    useEffect(() => { api.getPostById(postIdFromUrl.postId).then((data) => { setSinglePost(data) }) }, [changeStateLikedPost, postIdFromUrl.postId])

    const { _id, author, created_at, image, title, text, likes, comments, tags, } = singlePost
    // console.log(typeof singlePost)

// console.log(typeof text)
// console.log(text)


    let color

    if (likes?.length > 0) { color = 'warning' }


    return (

        <>
            {!singlePost ? <></> :
                <div className={s.mainpost}>
                    <div className={s.button__homepage_top}>
                        <Link to="/" className={s.btn__home}>
                            <Button variant="contained" >Вернуться на главную страницу</Button>
                        </Link>
                    </div>

                    {!singlePost
                        ? <h1>dont worry</h1>
                        :
                        <Card sx={{
                            maxWidth: '90vw',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',

                        }} >
                            <CardHeader
                                avatar={
                                    <Avatar >
                                        {author?.avatar}
                                    </Avatar>
                                } sx={{ minHeight: '7em' }}

                                title={author?.about + ' ' + author?.name}

                                subheader={dayjs(created_at).format('HH:MM:s DD/MM/YYYY')}
                            />


                            
                                {tags
                                    ? <PostTag tags={tags} />
                                    : 0
                                }
                            
                            <CardMedia
                                component="img"
                                height="auto"
                                src={image}
                                alt="Изображение"
                            >
                            </CardMedia>


                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="h5" color="text.secondary">
                                    {title}
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary"> */}
                                   {/* {parse(toString(text))} */}
                                   <p dangerouslySetInnerHTML={{__html: text}} />
                                    {/* {parse(text, {
        replace: ({ attribs }) => attribs && attribs.id === 'remove' && <></>
        })} */}
                                {/* </Typography> */}
                            </CardContent>


                            <div className={s.cart__bottom}>
                                <IconButton aria-label="add to favorites" color={color} onClick={function (e) { e.stopPropagation(); changeStateLikedPost(likes, _id) }}>
                                    <Badge badgeContent={likes?.length} color="primary">
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                                <Button variant="outlined" onClick={function (e) { e.stopPropagation(); deletePost(author, _id) }}>Удалить пост</Button>
                            </div>

                            <PostComment comments={comments}/>

                        </Card>}



                    <div className={s.button__homepage_bottom}>
                        <Link to="/" className={s.btn__home}>
                            <Button variant="contained" >Вернуться на главную страницу</Button>
                        </Link>
                    </div>


                </div>



            }</>

    )

}