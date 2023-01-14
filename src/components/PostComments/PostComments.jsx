import React from 'react'
import {CardHeader} from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import dayjs from 'dayjs';
import HTMLReactParser from 'html-react-parser';
import checkAvatar from '../../utils/avatar';
import './index.css'

export const PostComments = ({author, created_at, text, ...rest}) => {

    // console.log(author)
    // console.log(text, rest)

  return (
    <div className='post-header'>
      <CardHeader 
        avatar={
          <Avatar aria-label="recipe" src={checkAvatar(author)}>
          {checkAvatar(author)}
          </Avatar>
        }

        title={author.name}
        subheader={dayjs(created_at).format('hh:mm DD-MM-YYYY')}
      />
      <div className='comment-text'>
        {HTMLReactParser(text)}
      </div>
    </div>
  )
}
