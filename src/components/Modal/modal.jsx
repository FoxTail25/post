import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Form } from '../Form/form';
import PostAddIcon from '@mui/icons-material/PostAdd';
import './modal.css'

import { IconButton } from "@mui/material"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { FormComment } from '../FormComment/formComment';


export default function BasicModal({ urlpage, singlePost }) {

  // console.log(singlePost)

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <div>
      {!urlpage.postId
        ? <Button variant='contained' onClick={handleOpen} startIcon={<PostAddIcon />}>добавить пост</Button>
        : <IconButton aria-label="Отрадакировать пост" onClick={handleOpen}>
          <div style={{fontSize: '15px'}}>
            редактировать пост...
          </div>
          <DriveFileRenameOutlineIcon />
        </IconButton>
      }
      {urlpage.postId
        ? <IconButton aria-label="Отрадакировать пост" onClick={handleOpen2}>

          
          <PostAddIcon />
          <div style={{fontSize: '15px'}}>
            добавить комментарий...
          </div>
        </IconButton>
        : null

      }
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className='modalstule'>
          <Form handleClose={handleClose} {...singlePost} />
        </Box>
      </Modal>


      <Modal
        open={open2}
        onClose={handleClose2}
      >
        <Box className='modalstule'>
          <FormComment handleClose2={handleClose2} {...singlePost} />
        </Box>
      </Modal>

    </div >
  );
}