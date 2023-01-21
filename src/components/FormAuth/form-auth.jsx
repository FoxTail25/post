import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useContext } from 'react';
import { allUserData } from '../context/context';
import s from './form-auth.module.css'
import { CHECK_EMAIL } from '../../utils/constants';


export const FormAuth = ({ authReg, handleClose, setAuthReg }) => {

    const { singIn } = useContext({ ...allUserData })

        const { register, handleSubmit, formState: { errors, isValid } } = useForm({
            mode: 'all',
            defaultValues: {
                email: 'test@fakepost.com',
                password: 'qwer1234',
            }
        });

        const cbSubmit = (data) => {

            singIn(data)
            handleClose()

        }

        return (

            <form className={s.authFormStyle} onSubmit={handleSubmit(cbSubmit)}>

                <h5 className={s.authRegHeader}>
                    Авторизация
                    <br />
                    <p>(По умолчанию указаны фейковые данные)</p>
                </h5>

                <label className={s.authfild}> {errors?.email?.message ? <p className={s.authfild}>{errors?.email?.message}</p> : 'Ваш Email'}
                    <input className={s.authfild}
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'обязательное поле'
                            },
                            // minLength: {
                            //     value: 7,
                            //     message: 'очень коротко'
                            // },
                            pattern: {
                                value: CHECK_EMAIL,
                                message: 'неверный емаил'
                            }

                        })}
                        type='email'
                        // suggested = "current-password"
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
                                value: 3,
                                message: 'слишком коротко'
                            },
                        })}
                        type='password'
                        autoComplete="on"
                        placeholder="пароль не менее 7 сиволов"

                    ></input>
                </label>

                <div className={s.authBtnBlock}>

                    <Button
                        variant='outlined'
                        onClick={() => { setAuthReg(!authReg) }}>
                        Регистрация
                    </Button>

                    <Button type='submit'
                        variant='contained'
                        disabled={!isValid}
                    >
                        Войти
                    </Button>

                </div>

            </form>

        )
    }
