import { Avatar, Badge, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AllContextData, allUserData } from "../../components/context/context"
import { Link, useNavigate, useParams } from "react-router-dom";
import PostComment from "../../components/PostCommentsList/PostCommentsList";
import api from "../../utils/api"
import dayjs from "dayjs";
import BasicModal from "../../components/Modal/modal";
import checkAvatar from "../../utils/avatar";
import { PostTagList } from "../../components/PostTagList/PostTagList";
import s from './postPage.module.css'


export const PostPage = () => {

    const urlpage = useParams()

    const user = useContext({ ...allUserData })
    const data = useContext(AllContextData)

    const changeStateLikedPost = data[1]
    const deletePost = data[2]
    const postIdFromUrl = useParams()
    const navigate = useNavigate()

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
                            className='singlePost__card__header'
                                avatar={
                                    author && <Avatar aria-label="recipe" src={checkAvatar(author)}>
                                        {checkAvatar(author)}
                                    </Avatar>
                                }
                                sx={{ minHeight: '7em' }}
                                title={author?.about + ' ' + author?.name}
                                subheader={dayjs(created_at).format('HH:MM:s DD/MM/YYYY')}
                            >

                            </CardHeader>

                            <CardMedia
                                component="img"
                                height="auto"
                                // width='auto'
                                src={image}
                                alt="Изображение"
                                // sx={{maxWidth:'600px', alignSelf:'center'}}
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

                                < BasicModal urlpage={urlpage} singlePost={singlePost} />


                                {
                                    user?.userData._id === author?._id
                                        ? <IconButton onClick={() => deletePost(author, _id)} className={s.post_deleteBtn_icon}>
                                            <DeleteForeverIcon className={s.post_delete_icon}/>
                                        </IconButton>
                                        : null
                                }

                            </div>

                            {
                                comments?.length
                                ? <PostComment comments={comments} id={_id} />
                                : null
                            }
                            {
                                tags?.length
                                ? <PostTagList tags={tags} id={_id} />
                                : null
                            }




                        </Card>}

                    <div className={s.button__homepage_bottom}>
                        <Button variant="contained"
                            onClick={() => navigate(-1)}
                        >Вернуться на главную страницу</Button>
                    </div>

                </div>

            }</>
    )

}