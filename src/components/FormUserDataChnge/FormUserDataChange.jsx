import { Button, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../utils/api';
import { allUserData } from "../context/context";
import s from './formUserDataChange.module.css'

export const FormUserDataChange = ({ handleClose }) => {

  const { userData: userInfo, setUserData } = useContext({ ...allUserData })

  const { register, handleSubmit, formState: { errors, isValid } } = useForm(
    {
      mode: 'all'
    }
  )

  function sendFormData(data) {

    const userData = {
      name: data.name,
      about: data.about,
    }
    const userAvatar = {
      avatar: data.avatar
    }

    if (userData.name !== userInfo.name
      || userData.about !== userInfo.about) {
        api.changeUserInfo(userData)
        .then((res) => setUserData(res))
        .catch((err) => console.log(err))
      }
      
      if (userAvatar.avatar !== userInfo.avatar) {
        
        api.changeUserAvatar(userAvatar)
        .then((res) => setUserData(res))
        .catch((err) => console.log(err))
      }
      
    handleClose()
  }


  return (
    <>

      <form onSubmit={handleSubmit(sendFormData)} className={s.formUser}>

        <Typography variant="h6" gutterBottom>Изменение данных пользователя</Typography>

        <label className={s.formUserChangeLable}>
          Имя
          <input
            className={s.formUserChangeInput}
            defaultValue={userInfo.name} {...register("name", {
              required: true,
              message: "Поле не может быть пустым",
              minLength: 3
            })}
          />

        </label>

        <label className={s.formUserChangeLable}>
          Описание
          <input
            className={s.formUserChangeInput}
            defaultValue={userInfo.about} {...register("about", {
              required: true,
              message: "Поле не может быть пустым",
              minLength: 3
            }
            )}
          />
        </label>

        <label className={s.formUserChangeLable}>
          Аватар
          <input
            className={s.formUserChangeInput}
            defaultValue={userInfo.avatar} {...register("avatar")}
          />
        </label>

        <div className={s.formBtn}>
          <Button variant='outlined' type='submit' disabled={!isValid}>Изменить данные</Button>
        </div>

      </form>


    </>
  )
}
