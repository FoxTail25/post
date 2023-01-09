import { Avatar, Badge, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AllContextData } from "../../components/context/context"
import api from "../../utils/api"
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import s from './postPage.module.css'

export const PostPage = () => {

    let p = window.location.pathname.slice(6)
    const data = useContext(AllContextData)
    const changeStateLikedPost = data[1]
    const deletePost = data[2]

    const [singlePost, setSinglePost] = useState([])
    useEffect(() => { api.getPostById(p).then((data) => { setSinglePost(data) }) }, [changeStateLikedPost, p])





    const { _id, author, created_at, image, title, text, likes, } = singlePost

    let color

    if (likes?.length > 0) { color = 'warning' }


    return (

        <>
            {!singlePost ? console.log('stop') :
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
                                <Typography variant="body2" color="text.secondary">
                                    {text}
                                </Typography>
                            </CardContent>

                            <div className={s.cart__bottom}>
                                <IconButton aria-label="add to favorites" color={color} onClick={function (e) { e.stopPropagation(); changeStateLikedPost(likes, _id) }}>
                                    <Badge badgeContent={likes?.length} color="primary">
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                                <Button variant="outlined" onClick={function (e) { e.stopPropagation(); deletePost(author, _id) }}>Удалить пост</Button>
                            </div>

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