import { Avatar, Badge, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import dayjs from "dayjs";
import './post.css'
import { useContext } from "react";
import { AllContextData, allUserData } from "../context/context";
import { Link, } from "react-router-dom";
import cN from "classnames";
import checkAvatar from "../../utils/avatar";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StyleIcon from '@mui/icons-material/Style';


const Post = ({ image, likes, comments, tags, isPublished, _id, title, author, text, created_at, updated_at, v }) => {

  const user = useContext({ ...allUserData })
  const data = useContext(AllContextData)

  let dataAuthor

  if (user.userData._id === author._id) {
    dataAuthor = user.userData
  } else {
    dataAuthor = author
  }

  const changeStateLikedPost = data[1]
  const deletePost = data[2]


  return (

    <Card className="post" sx={{
      maxWidth: 345,
      minWidth: 345,
      paddingBottom: 4,

    }} >
      <Link to={`/post/${_id}`}
        className="post__link">
        <CardHeader
          avatar={

            author && <Avatar aria-label="recipe" src={checkAvatar(dataAuthor)}>
              {checkAvatar(dataAuthor)}
            </Avatar>

          } sx={{ minHeight: '7em' }}

          title={dataAuthor.about + ' ' + dataAuthor.name}

          subheader={dayjs(created_at).format('HH:MM:s DD/MM/YYYY')}
        />
        <CardMedia
          component="img"
          height="200"
          src={image}
          alt="Изображение"
        >
        </CardMedia>

        <CardContent sx={{ flex: 1, }}>
          <Typography variant="h5" color="text.secondary">
            {title}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: text }} style={{ overflow: 'hidden', LineClamp: 4, maxHeight: '50px' }} className="post__text__fild"/>
        </CardContent>
      </Link >
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

        {tags.length ?
          <Link to={`/post/${_id}`}>
            <IconButton aria-label="go to comments" >
              <Badge badgeContent={tags.length} color='primary'  >
                <StyleIcon color='gray' />
              </Badge>
            </IconButton>
          </Link>
          : null}




      </div>
      <div className="post__sticky post__sticky_type_bottom-right" >

        {
          user.userData._id === author._id
            ? <IconButton onClick={() => deletePost(author, _id)} className='comment-deleteBtn-icon'>
              <DeleteForeverIcon className='comment-delete-icon' />
            </IconButton>
            : null
        }
      </div>

    </Card >

  );
}

export { Post };