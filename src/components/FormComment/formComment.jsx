import { Button } from "@mui/material";
import { useContext } from "react";
// import React from "react";
import { useForm } from "react-hook-form";
import api from "../../utils/api";
import { AllContextData } from "../context/context";
import './formComment.css'


export const FormComment = ({ handleClose2, comments, _id, ...rest }) => {



    const data = useContext(AllContextData)

    // const addNewPostInState = data[3]
    const updatePostState = data[4]

console.log(_id)
console.log(comments)

      
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
            defaultValues: {
            text: '',
            // title: '',
            // text: '',
        }
    });

    const cbSubmit = (data ) => {

        console.log( data)
        // Object.entries(rest).length 
        api.addNewComments(data, _id).then((newPost) => updatePostState(newPost))
        // : api.addNewPost(data).then((newPost) => addNewPostInState(newPost))

        handleClose2()
    }

    return (
        <>
            <form onSubmit={handleSubmit(cbSubmit)} className='form'>

                <label className="labelfor"> {errors?.url?.message ? <p className="paragrafor">{errors?.url?.message}</p> : 'Ваш комметарий'}
                    <input className="inputfor"
                        {...register('text', {
                            required: {
                                value: true,
                                message: 'Поле обязательно для заполнения'
                            },
                            minLength: {
                                value: 12,
                                message: 'Комментарий должен быть не менее 2х символов'
                            },
   
                        })}
                        type='text'
                        placeholder="Вот что я хочу сказать..." // https://source.unsplash.com/random/?nature"
      
                    ></input>
                </label>


                <Button type="submit" variant="contained" >{Object.entries(rest).length ? 'Сохранить изменения' : 'Опубликовать пост'}</Button>

            </form>

        </>
    )


}
