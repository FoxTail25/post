import { IconButton } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useContext } from 'react';
import { allUserData } from '../context/context';
import s from './form-auth.module.css'


export const AuthForm = ({ authReg, setEnter }) => {

    const { singIn, singUp } = useContext({ ...allUserData })


    let fildemail, fildpass;
    if (authReg === 'auth') {
        fildemail = 'test@fakepost.com';
        fildpass = 'qwer1234';
    } else {
        fildemail = '';
        fildpass = '';
    }

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'all',
        defaultValues: {
            email: fildemail,
            password: fildpass,
        }

    });

    

    const cbSubmit = (data) => {

        authReg === 'auth'
            ? singIn(data)
            : singUp({ ...data, group: 'group-7' })
    }



    return (


        <form className={s.authFormStyle} onSubmit={handleSubmit(cbSubmit)}>

            {
                authReg === 'auth'
                    ? <h5 className={s.authRegHeader}>Авторизация</h5>
                    : <h5 className={s.authRegHeader}>Регистарция</h5>
            }
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
                            value: /@/gm,
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
                            value: 3,
                            message: 'слишком коротко'
                        },
                    })}
                    type='password'
                    placeholder="пароль не менее 7 сиволов"

                ></input>
            </label>


            <div className={s.authBtnBlock}>

                <IconButton className={s.goBackBtn} onClick={() => { setEnter() }}>
                    <KeyboardBackspaceIcon className={s.goBack} />
                </IconButton>

                <IconButton type='submit' className={s.authBtn} disabled={!isValid}>
                    <VpnKeyIcon className={s.authIconTrue} />
                </IconButton>

            </div>

        </form>


    )
}
