import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useContext } from 'react';
import { allUserData } from '../context/context';
import { CHECK_EMAIL } from '../../utils/constants';
import '../../formAuthReg.css'


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

            <form className='authRegForm' onSubmit={handleSubmit(cbSubmit)}>

                <h5 className='authRegForm__header'>
                    Авторизация
                    <br />
                    <p className='authRegForm__header_text'>(По умолчанию указаны фейковые данные)</p>
                </h5>

                <label className='authRegForm__leble'> {errors?.email?.message ? <p className='authRegForm__leble_error'>{errors?.email?.message}</p> : 'Ваш Email'}
                    <input className='authRegForm__input'
                        {...register('email', {
                            required: {
                                value: true,
                                message: ' обязательное поле'
                            },
                            // minLength: {
                            //     value: 7,
                            //     message: 'очень коротко'
                            // },
                            pattern: {
                                value: CHECK_EMAIL,
                                message: ' неверный емаил'
                            }

                        })}
                        type='email'
                        placeholder="shla@Sobaka.poShosse"

                    ></input>
                </label>

                <label className='authRegForm__leble'> {errors?.password?.message ? <p className='authRegForm__leble_error'>{errors?.password?.message}</p> : 'Введите пароль'}
                    <input className='authRegForm__input'
                        {...register('password', {
                            required: {
                                value: true,
                                message: ' обязательное поле'
                            },
                            minLength: {
                                value: 3,
                                message: ' слишком короткий пароль'
                            },
                        })}
                        type='password'
                        autoComplete="on"
                        placeholder="пароль не менее 7 сиволов"

                    ></input>
                </label>

                <div className='authRegForm__BtnBlock'>

                    <Button
                        variant='outlined'
                        size='small'
                        onClick={() => { setAuthReg(!authReg) }}>
                        Регистрация
                    </Button>

                    <Button type='submit'
                        variant='contained'
                        size='small'
                        color='success'
                        disabled={!isValid}
                    >
                        Войти
                    </Button>

                </div>

            </form>

        )
    }
