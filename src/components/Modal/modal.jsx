import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Form } from '../Form/form';
import PostAddIcon from '@mui/icons-material/PostAdd';
import './modal.css'

import {  IconButton } from "@mui/material"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


export default function BasicModal({ urlpage, singlePost }) {

  // console.log(singlePost)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      {!urlpage.postId
        ? <Button variant='contained' onClick={handleOpen} startIcon={<PostAddIcon />}>добавить пост</Button>
        : <IconButton aria-label="edit post" onClick={handleOpen}>
          <DriveFileRenameOutlineIcon />
        </IconButton>
      }
      <Modal
        open={open}
        onClose={handleClose}

      >
        <Box
          // sx={style}
          className='modalstule'>

          <Form handleClose={handleClose} {...singlePost}/>
        </Box>
      </Modal>
    </div>
  );
}