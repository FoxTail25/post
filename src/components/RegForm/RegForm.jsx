// import { IconButton } from '@mui/material';
// import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import React, { useContext } from 'react'
// import { useForm } from 'react-hook-form';
// import { allUserData } from '../context/context';
// import cN from 'classnames';
// import './index.css'


// export const RegForm = () => {


//     // const {singIn} = useContext({...allUserData})
//     const { singUp } = useContext({ ...allUserData })

//     const { register, handleSubmit, formState: { errors } } = useForm({
//         mode: 'onBlur',
//         defaultValues: {
//             email: '',
//             group: 'guest',
//             password: '',
//         }
//     });
//     let authKeyStyle = !!!Object.entries(errors).length

//     const cbSubmit = (data) => {

//         console.log(data)
//          singUp(data)
//     }


//     return (
//         <>
//             <form className='form-registation' onClick={handleSubmit(cbSubmit)}>

//                 <label className="reglable"> {errors?.email?.message ? <p className="reglable">{errors?.email?.message}</p> : 'ваш email'}
//                     <input className="regfild"
//                         {...register('email', {
//                             required: {
//                                 value: true,
//                                 message: 'обязательное поле'
//                             },
//                             minLength: {
//                                 value: 7,
//                                 message: 'очень коротко'
//                             },
//                             pattern: {
//                                 value: /@/gm,
//                                 message: '"Это email? Неверю!"'
//                             }

//                         })}
//                         type='email'
//                         placeholder="shla@Sobaka.poShosse"

//                     ></input>
//                 </label>


//                 <label className="reglable"> {errors?.password?.message ? <p className="reglable">{errors?.password?.message}</p> : 'Введите пароль'}
//                     <input className="regfild"
//                         {...register('password', {
//                             required: {
//                                 value: true,
//                                 message: 'обязательное поле'
//                             },
//                             minLength: {
//                                 value: 3,
//                                 message: 'слишком коротко'
//                             },
//                         })}
//                         type='text'
//                         placeholder="пароль"

//                     ></input>
//                 </label>

//                         <label className="reglable"> {'если желаете измените группу'}
//                             <input className="regfild"
//                                 {...register('group')}
//                                 value='guest'
//                                 type='text'
        
//                             ></input>
//                         </label>
                        
//                 <IconButton type='submit' className={cN('authBtn', { 'authTrtuBtn': authKeyStyle })}>
//                     <VpnKeyIcon className={cN({ 'authIconTrue': authKeyStyle })} />
//                 </IconButton>

//             </form>
//         </>
//     )
// }
