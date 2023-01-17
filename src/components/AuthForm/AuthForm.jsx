import { IconButton } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import './index.css'
import cN from 'classnames';
import { useContext } from 'react';
import { allUserData } from '../context/context';


export const AuthForm = () => {

    const {singIn} = useContext({...allUserData})

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
            defaultValues: {
            email: '',
            password: '',
        }
    });

    let authKeyStyle = !!!Object.entries(errors).length 
    // console.log(authKeyStyle)
    // console.log(register.email)

    const cbSubmit = (data ) => {

        // console.log( data)
        singIn(data)
 

    }



  return (
    
    
    <form onSubmit={handleSubmit(cbSubmit)} 
    // className='form'
    
    >

    <label className="authfild"> {errors?.email?.message ? <p className="authfild">{errors?.email?.message}</p> : 'Ваш Email'}
        <input className="authfild"
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
                    message: '"Это email? Неверю!"'
                }

            })}
            type='email'
            placeholder="shla@Sobaka.poShosse" 

        ></input>
    </label>

    <label className="authfild"> {errors?.password?.message ? <p className="authfild">{errors?.password?.message}</p> : 'Введите пароль'}
        <input className="authfild"
            {...register('password', {
                required: {
                    value: true,
                    message: 'обязательное поле'
                },
                minLength: {
                    value: 3,
                    message: 'слишком коротка'
                },
            })}
            type='text'
            placeholder="пароль"

        ></input>
    </label>




    <IconButton type='submit' className={cN('authBtn', {'authTrtuBtn': authKeyStyle})}>
            <VpnKeyIcon className={cN({'authIconTrue':authKeyStyle})}/>
    </IconButton>

</form>


  )
}
