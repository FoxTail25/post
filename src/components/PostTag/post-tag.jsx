import { Badge } from '@mui/material'
import React from 'react'
import tagsArrMutation from '../../utils/tagsArrMutation'

let tag

export const PostTag = ({tags}) => {

    
    if (tags) {
        tag = tagsArrMutation(tags)
        // console.log(tag)
    }

  return (
    <>

    {tag.length > 0 ? <Badge badgeContent={([tag])} color="primary" showZero={true} sx={{
    marginRight: 8}}/>
    : null}

    </>

  )
}
