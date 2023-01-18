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
import { allUserData } from '../context/context';


export default function BasicModal({ urlpage, singlePost, setSinglePost }) {

  // console.log(singlePost?.author?._id)

  const user = React.useContext({ ...allUserData })

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  // console.log(user?.userData._id === singlePost?.author?._id)


  return (
    <div>

      {
      !urlpage.postId 
        ? <Button variant='contained' onClick={handleOpen} startIcon={<PostAddIcon />}>добавить пост</Button>
        : user?.userData._id === singlePost?.author?._id
        ?
        <IconButton aria-label="Отрадакировать пост" onClick={handleOpen}>
          <div style={{fontSize: '15px'}}>
            редактировать пост...
          </div>
          <DriveFileRenameOutlineIcon />
        </IconButton>
        : null
      }


      {urlpage.postId
        ? <IconButton aria-label="добавить коммент" onClick={handleOpen2}>

          
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
          <FormComment handleClose2={handleClose2} {...singlePost} setSinglePost={setSinglePost}/>
        </Box>
      </Modal>

    </div >
  );
}