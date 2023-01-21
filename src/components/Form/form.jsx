import { Button } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import api from "../../utils/api";
import { CHECK_EMAIL } from "../../utils/constants";
import { AllContextData } from "../context/context";
import './form.css'


export const Form = ({ handleClose, image, title, text, _id, tags, ...rest }) => {

    const data = useContext(AllContextData)
    const addNewPostInState = data[3]
    const updatePostState = data[4]

    console.log(tags)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            image: image,
            title: title,
            text: text,
            tags: tags,
        }
    });

    const cbSubmit = (data) => {

        if (data.tags === '' || data.tags === ' ' || data.tags.length === 0) {
            data.tags = []
        } else {
            data.tags = data.tags.split(',')
        }

        console.log(data.tags)
        Object.entries(rest).length
            ? api.changePost(data, _id).then((newPost) => updatePostState(newPost))
            : api.addNewPost(data).then((newPost) => addNewPostInState(newPost))

        handleClose()
    }

    return (
        <>
            <form onSubmit={handleSubmit(cbSubmit)} className='form'>

                <label className="labelfor"> {errors?.url?.message ? <p className="paragrafor">{errors?.url?.message}</p> : 'Введите URL изображения'}
                    <input className="inputfor"
                        {...register('image', {
                            required: {
                                value: true,
                                message: 'Поле обязательно для заполнения'
                            },
                            minLength: {
                                value: 7,
                                message: 'url адрес должен состоять не менее чем из 7 символов'
                            },
                            pattern: {
                                value: 'https://',
                                message: 'url адрес должен начинаться с https://'
                            }

                        })}
                        type='text'
                        placeholder="https://source.unsplash.com......." // https://source.unsplash.com/random/?nature"

                    ></input>
                </label>

                <label className="labelfor"> {errors?.head?.message ? <p className="paragrafor">{errors?.head?.message}</p> : 'Введите заголовок поста'}
                    <input className="inputfor"
                        {...register('title', {
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

                <label className="labelfor"> {errors?.body?.message ? <p className="paragrafor">{errors?.body?.message}</p> : 'Введите текст поста'}
                    <input className="inputfor"
                        {...register('text', {
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

                <label className="labelfor"> {errors?.tags?.message ? <p className="paragrafor">{errors?.tags?.message}</p> : 'Список тегов'}
                    <input className="inputfor"
                        {...register('tags', {
                            // required: {
                            //     value: true,
                            //     message: 'Поле обязательно для заполнения'
                            // },
                            // minLength: {
                            //     value: 10,
                            //     message: 'Имя должно состоять не менее чем из 10 символов'
                            // },
                        })}
                        type='text'
                        placeholder="tag1, tag2, tag3...."

                    ></input>
                </label>

                <Button type="submit" variant="contained" >{Object.entries(rest).length ? 'Сохранить изменения' : 'Опубликовать пост'}</Button>

            </form>

        </>
    )


}
