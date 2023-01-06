
// import cn from 'classnames';
import "./index.css";
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, Button } from "@mui/material"
// import MoreVertIcon from '@mui/icons-material/MoreVert';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import React, { useCallback } from "react";
import { isLiked } from "../utils/constants";
import api from '../utils/api';
// import dayjs from "dayjs";



//const Post = ({ image, likes, comments, tags, isPublished, _id, title, author, text, created_at, updated_at, v }) => {


const Post = ({ image, likes, comments, tags, isPublished, _id, title, author, text, created_at, updated_at, v, onPostLike, currentUser, handleDeleteClick }) => {


  // console.log(author)

  const liked = isLiked(likes, currentUser._id)

  function handleLikeClick() {
    onPostLike({ _id, likes })
  }

  const handleDeletePost = useCallback(() =>
    api.deletePostCardById(_id)
      .then(() => {
        alert("Вы уверены, что хотите удалить пост?")
      }), [_id]);

      
  
  return (
    <Card sx={{
      maxWidth: 345,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author.avatar}
          </Avatar>

        }

        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={author.about + ' ' + author.name + ' ' + author.email}


      // subheader={dayjs(created_at).format('HH:MM:s DD/MM/YYYY')}

      />
      <CardMedia
        component="img"
        height="194"
        //   image="logo192.png"
        src={image}
      // src="https://mobimg.b-cdn.net/v3/fetch/a7/a7a88f4e16d37240432d3ccdde6fe30c.jpeg?w=1470&r=0.5625"
      // alt=""
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
{/* //      <div>
 //       <IconButton aria-label="add to favorites" >
//          <FavoriteIcon />
//        </IconButton>
 //     </div>
//======= */}
      <IconButton

        style={!liked ? { color: "grey" } : { color: "red" }}
        aria-label="add to favorites" onClick={handleLikeClick} >
        <FavoriteIcon />{likes.length}
      </IconButton>
      {author._id === currentUser._id && <Button onClick={handleDeletePost}>Удалить пост</Button>}
     
    </Card >
  );
}

export { Post };