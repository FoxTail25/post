import { Avatar, Badge, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
// import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { AllContextData } from "../../components/context/context"
import { Link, useParams } from "react-router-dom";
import PostComment from "../../components/PostCommentsList/PostCommentsList";
import api from "../../utils/api"
import dayjs from "dayjs";
import s from './postPage.module.css'
import BasicModal from "../../components/Modal/modal";
import checkAvatar from "../../utils/avatar";


export const PostPage = () => {

    const urlpage = useParams()

    // console.log(urlpage)

    const data = useContext(AllContextData)
    const changeStateLikedPost = data[1]
    const deletePost = data[2]
    const postIdFromUrl = useParams()

    const [singlePost, setSinglePost] = useState({})

    useEffect(() => { api.getPostById(postIdFromUrl.postId).then((data) => { setSinglePost(data) }) }, [changeStateLikedPost, postIdFromUrl.postId])

    const { _id, author, created_at, image, title, text, likes, comments, tags } = singlePost

 

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
                                    author&&<Avatar aria-label="recipe" src={checkAvatar(author)}>
                                        {checkAvatar(author)}
                                    </Avatar>
                                }
                                sx={{ minHeight: '7em' }}
                                title={author?.about + ' ' + author?.name}
                                subheader={dayjs(created_at).format('HH:MM:s DD/MM/YYYY')}
                            >

                            </CardHeader>
                            {/* 
                            {(tags?.length && (tags[0] !== ''))
                                ? <div style={{display: 'flex'}}>
                                <div style={{paddingLeft: 10}}>#tags:</div>{tags?.map((e,i) => <div key={i} style={{padding:"0px 4px"}}>{e}</div>)}
                                </div>
                                : null
                            } */}
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

                                <p dangerouslySetInnerHTML={{ __html: text }} />

                            </CardContent>

                            <div className={s.cart__bottom}>

                                <IconButton aria-label="add to favorites" color={color} onClick={function (e) { e.stopPropagation(); changeStateLikedPost(likes, _id) }}>
                                    <Badge badgeContent={likes?.length} color="primary">
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>

                                <BasicModal urlpage={urlpage} singlePost={singlePost} />

                                <Button variant="outlined" onClick={function (e) { e.stopPropagation(); deletePost(author, _id) }}>Удалить пост</Button>

                            </div>

                            {comments?.length
                                ? <PostComment comments={comments} id={_id} />
                                : null}
                            {/* {tags?.length
                                ? <PostComment comments={tags} id={_id} />
                                : null} */}

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