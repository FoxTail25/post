import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useContext } from 'react';
import { allUserData } from '../context/context';
import s from './form-auth.module.css'
import { CHECK_EMAIL } from '../../utils/constants';


export const FormReg = ({authReg, handleClose , setAuthReg}) => {

    const { singUp } = useContext({ ...allUserData })



    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'all',
        defaultValues: {
            group: 'group-7',
        }

    });


    const cbSubmit = (data) => {
        singUp(data)
        handleClose()

    }



    return (


        <form className={s.authFormStyle} onSubmit={handleSubmit(cbSubmit)}>


            <h5 className={s.authRegHeader}>
                Регистарция
                <br />
                <p>(необходимо указать емаил, пароль и если желаете, изменить группу постов)</p>
            </h5>

            <label className={s.authfild}> {errors?.email?.message ? <p className={s.authfild}>{errors?.email?.message}</p> : 'Ваш Email'}
                <input className={s.authfild}
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'обязательное поле'
                        },
                        minLength: {
                            value: 7,
                            message: 'очень коротко'
                        },
                        pattern: {
                            value: CHECK_EMAIL,
                            message: 'неверный емаил'
                        }

                    })}
                    type='email'
                    placeholder="shla@Sobaka.poShosse"

                ></input>
            </label>

            <label className={s.authfild}> {errors?.password?.message ? <p className={s.authfild}>{errors?.password?.message}</p> : 'Введите пароль'}
                <input className={s.authfild}
                    {...register('password', {
                        required: {
                            value: true,
                            message: 'обязательное поле'
                        },
                        minLength: {
                            value: 8,
                            message: 'слишком коротко'
                        },
                    })}
                    type='password'
                    autoComplete="on"
                    placeholder="пароль не менее 8 сиволов"

                ></input>
            </label>

            <label className={s.authfild}> {errors?.password?.message ? <p className={s.authfild}>{errors?.password?.message}</p> : 'Укажите группу'}
                <input className={s.authfild}
                    {...register('group', {
                        required: {
                            value: true,
                            message: 'обязательное поле'
                        },
                        minLength: {
                            value: 2,
                            message: 'слишком коротко'
                        },
                        
                    })}
                    type='text'
                    placeholder="не менее 2 символов"

                ></input>
            </label>

            <div className={s.authBtnBlock}>

                <Button
                    variant='outlined'
                    onClick={() => { setAuthReg(!authReg) }}>
                    авторизации
                </Button>

                <Button type='submit'
                    variant='contained'
                    color='success'
                    disabled={!isValid}>
                    Регистрация
                </Button>

            </div>

        </form>

    )
}
