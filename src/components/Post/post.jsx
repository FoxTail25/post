import { Avatar, Badge, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import dayjs from "dayjs";
import './post.css'
import { useContext } from "react";
import { AllContextData } from "../context/context";
import { Link } from "react-router-dom";
import cN from "classnames";




const Post = ({ image, likes, comments, tags, isPublished, _id, title, author, text, created_at, updated_at, v }) => {



  const data = useContext(AllContextData)
  const changeStateLikedPost = data[1]
  const deletePost = data[2]



 

  return (

    <Card className="post" sx={{
      maxWidth: 345,
      minWidth: 345,
      maxHeight: 550,
      paddingBottom: 4,

    }} >
      <Link to={`/post/${_id}`}
        className="post__link">
        <CardHeader
          avatar={
            <Avatar >
              {author.avatar}
            </Avatar>
          } sx={{ minHeight: '7em' }}

          title={author.about + ' ' + author.name}

          subheader={dayjs(created_at).format('HH:MM:s DD/MM/YYYY')}
        />

        <CardMedia
          component="img"
          height="194"
          src={image}
          alt="Изображение"
        >
        </CardMedia>
        <CardContent sx={{ flex: 1, }}>
          <Typography variant="h5" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', LineClamp: 4, maxHeight: '40px' }}>
            {text}
          </Typography>
        </CardContent>
      </Link>
      <div className="post__sticky post__sticky_type_bottom-left" >
        <IconButton aria-label="add to favorites" color={cN({ 'gray': !likes.length }, { 'warning': likes.length })} onClick={() => changeStateLikedPost(likes, _id)} >
          <Badge badgeContent={likes.length} color="primary" >
            <FavoriteIcon />
          </Badge>
        </IconButton>

        {comments.length ?
          <Link to={`/post/${_id}`}>
            <IconButton aria-label="go to comments" >
              <Badge badgeContent={comments.length} color='primary'  >
                <QuestionAnswerIcon color='gray' />
              </Badge>
            </IconButton>
          </Link>
          : null}
      </div>
      <div className="post__sticky post__sticky_type_bottom-right" >
        <Button variant="outlined" onClick={() => deletePost(author, _id)}>Удалить пост</Button>
      </div>

    </Card >

  );
}

export { Post };