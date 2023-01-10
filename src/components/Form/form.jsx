import { Button } from "@mui/material";
// import React from "react";
import { useForm } from "react-hook-form";
import  './form.css'


export const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });

    const cbSubmit = (data) => {
        console.log(data);
    }

    // console.log(errors?.name?.message)



    return (
        <>



            <form onSubmit={handleSubmit(cbSubmit)} className='form'>

                <label className="labelfor"> {errors?.name?.message ? <p className="paragrafor">{errors?.name?.message}</p> :'Ваше имя'}
                    <input className="inputfor"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Поле обязательно для заполнения'
                            },
                            minLength: {
                                value: 2,
                                message: 'Имя должно состоять не менее чем из 2х символов'
                            },
                        })}
                        type='text'
                        placeholder="Anonimus"
              
                    >
                    </input>
                </label>

                <label className="labelfor"> {errors?.url?.message ? <p className="paragrafor">{errors?.url?.message}</p> :'Введите URL изображения'}
                    <input className="inputfor"
                        {...register('url', {
                            required: {
                                value: true,
                                message: 'Поле обязательно для заполнения'
                            },
                            minLength: {
                                value: 12,
                                message: 'url адрес должен состоять не менее чем из 12 символов'
                            },
                            pattern: {
                                value:/https:\/\//gm,
                                message: 'url адрес должен начинаться с https://'
                            }

                        })}
                        type='text'
                        placeholder="https://unsplash..."
               
                    ></input>
                </label>

                <label className="labelfor"> {errors?.head?.message ? <p className="paragrafor">{errors?.head?.message}</p> :'Введите заголовок поста'}
                    <input className="inputfor"
                        {...register('head', {
                            required: {
                                value: true,
                                message: 'Поле обязательно для заполнения'
                            },
                            minLength: {
                                value: 3,
                                message: 'Заголовок должно состоять не менее чем из 3х символов'
                            },
                        })}
                        type='text'
                        placeholder="Заголовок"
              
                    ></input>
                </label>

                <label className="labelfor"> {errors?.body?.message ? <p className="paragrafor">{errors?.body?.message}</p> :'Введите текст поста'}
                    <input className="inputfor"
                        {...register('body', {
                            required: {
                                value: true,
                                message: 'Поле обязательно для заполнения'
                            },
                            minLength: {
                                value: 10,
                                message: 'Имя должно состоять не менее чем из 10 символов'
                            },
                        })}
                        type='text'
                        placeholder="сам текст"
          
                    ></input>
                </label>


                <Button type="submit" variant="contained" >Опубликовать пост</Button>


            </form>





        </>
    )


}



// register -  это функция, которую необходимо подключить к каждому полю ввода. Она будет принимать и проверять значение введенное пользователем в каождое поле инпюта. handleSubmit - это функция высшего порядка, вызываемая при отправке формы. Она собирает данные из полей ввода. fotmState - это объект в котором содержится информация о состоянии формы. Также там лежит объект ошибок errors.