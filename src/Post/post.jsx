import { Avatar, Badge, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useContext } from "react";
import dayjs from "dayjs";
import { Container } from "@mui/system";
import {} from './post.css'
import { AllContextData } from "../context/context";


const Post = ({ image, likes, comments, tags, isPublished, _id, title, author, text, created_at, updated_at, v }) => {

  // console.log(likes)

  const contextPost = useContext(AllContextData)
  console.log(contextPost.allPost)

  let color;
  if (likes.length > 0) {color = 'warning'}

  return (
    <Card sx={{
      maxWidth: 345,
      minWidth: 345,
      display: 'flex',
      flexDirection: 'column',
      
    }}>
      <CardHeader
        avatar={
          <Avatar >
            {author.avatar}
          </Avatar>
        } sx={{ minHeight: '7em' }}
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={author.about + ' ' + author.name}

        subheader={dayjs(created_at).format('HH:MM:s DD/MM/YYYY')}
      />
      <CardMedia
        component="img"
        height="194"
        src={image}
        alt="Изображение"
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>

      <div className="cart-bottom">
        <IconButton aria-label="add to favorites" color={color}>
        <Badge badgeContent={likes.length} color="primary">
          <FavoriteIcon />
          </Badge>
        </IconButton>
        <Button variant="outlined">Удалить пост</Button>
      </div>
      {/* <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse orientation="horizontal" in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse> */}
    </Card>
  );
}

export { Post };