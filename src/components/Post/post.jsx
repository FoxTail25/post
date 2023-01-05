import { Avatar, Badge, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import dayjs from "dayjs";
import { } from './post.css'
import { useContext } from "react";
import { AllContextData } from "../context/context";
import { Link } from "react-router-dom";



const Post = ({ image, likes, comments, tags, isPublished, _id, title, author, text, created_at, updated_at, v }) => {



  const data = useContext(AllContextData)
  const changeStateLikedPost = data[1]
  const deletePost = data[2]



  let color;

  if (likes.length > 0) { color = 'warning' }

  return (

    <Card className="post" sx={{
      maxWidth: 345,
      minWidth: 345,

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
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
</Link>
        <div className="post__sticky post__sticky_type_bottom-left" >
          <IconButton aria-label="add to favorites" color={color} onClick={() => changeStateLikedPost(likes, _id)} >
            <Badge badgeContent={likes.length} color="primary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </div>
        <div className="post__sticky post__sticky_type_bottom-right" >
          <Button variant="outlined" onClick={() => deletePost(author, _id)}>Удалить пост</Button>
        </div>
      
    </Card>

  );
}

export { Post };