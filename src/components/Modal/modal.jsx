import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Form } from '../Form/form';
import PostAddIcon from '@mui/icons-material/PostAdd';
import './modal.css'



export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant='contained' onClick={handleOpen} startIcon={<PostAddIcon />}>добавить пост</Button>
      <Modal
        open={open}
        onClose={handleClose}
  
      >
        <Box 
        // sx={style}
        className='modalstule'>
 
          <Form handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}