import React from 'react'
import {CardHeader} from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import dayjs from 'dayjs';
import HTMLReactParser from 'html-react-parser';

export const PostComments = ({author, created_at, text, ...rest}) => {

    // console.log(created_at)
    // console.log(text, rest)

  return (
    <>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {author.name.slice(0,1)}
          </Avatar>
        }

        title={author.name}
        subheader={dayjs(created_at).format('hh:mm DD-MM-YYYY')}
      />
      <div>
        {HTMLReactParser(text)}
      </div>
    </>
  )
}
