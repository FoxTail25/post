import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';



import { useState } from 'react'
import { FormAuth } from '../FormAuth/form-auth'
import { FormReg } from '../FormReg/form-reg';
// import AuthFormTrans from '../AuthFormTrans/AuthFormTrans'
import s from './attention.module.css'

export const Authorisation = () => {

  const [authReg, setAuthReg] = useState(true)

  const style = {
    position: 'absolute',
    top: '38%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={s.authPage}>

        <div className={s.snowman}>
          <div className={s.snowmanAttention}>
            Для входа на ресурс необходима авторизация
          </div>

          <div className={s.buttonBlock}>
            <button className={s.authBtn} onClick={
              () => { handleOpen(); setAuthReg(true) }
            }>
              Авторизация
            </button>
            или
            <button className={s.authBtn} onClick={
              () => { handleOpen(); setAuthReg(false) }
            }>
              Регистарция
            </button>

          </div>

        </div>

      </div>



      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              {
                authReg

                  ? <FormAuth authReg={authReg} handleClose={handleClose} setAuthReg={setAuthReg} />
                  : <FormReg authReg={authReg} handleClose={handleClose} setAuthReg={setAuthReg} />
              }
            </Box>
          </Fade>
        </Modal>
      </div>


    </>
  )
}
