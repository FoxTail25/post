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
      // maxHeight: 550,
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
        {/* <div style={{margin: '0 auto'}}> */}
        <CardMedia
          component="img"
          height="200"
          src={image}
          alt="Изображение"
        >
        </CardMedia>
        {/* </div> */}

        {/* {(tags?.length && (tags[0] !== ''))
          ? <div style={{
            display: 'flex',
            background: '#3f51b5'
          }}>
            <div style={{ paddingLeft: 10, color: 'white' }}>#tags:</div>{tags?.map((e, i) => <div key={i} style={{
              padding: "0px 4px", color: 'white', overflow: 'hidden', display: 'flex', flexWrap: 'nowrap'
            }}>{(e.length) > 10 ? '...' : e}</div>)}
          </div>

          : <div style={{
            display: 'flex',
            background: '#3f51b5'
            }}>
              <div style={{ paddingLeft: 10, color: 'white' }}>#tags: none</div>
            
          </div>

        } */}
        <CardContent sx={{ flex: 1, }}>
          <Typography variant="h5" color="text.secondary">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', LineClamp: 4, maxHeight: '40px' }}> */}
          {/* {text} */}
          <div dangerouslySetInnerHTML={{ __html: text }} style={{ overflow: 'hidden', LineClamp: 4, maxHeight: '50px' }} />
          {/* </Typography> */}
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
      </div>
      <div className="post__sticky post__sticky_type_bottom-right" >
        {/* <Button variant="outlined" onClick={() => deletePost(author, _id)}>Удалить пост</Button> */}

        {
          user.userData._id === author._id
            ? <IconButton onClick={() => deletePost(author, _id)}>
              <DeleteForeverIcon />
            </IconButton>
            : null
        }
      </div>

    </Card >

  );
}

export { Post };