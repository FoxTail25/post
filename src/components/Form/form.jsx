import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import s from './form.module.css'


export const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm(); // register -  это функция, которую необходимо подключить к каждому полю ввода. Она будет принимать и проверять значение введенное пользователем в каождое поле инпюта. handleSubmit - это функция высшего порядка, вызываемая при отправке формы. Она собирает данные из полей ввода. fotmState - это объект в котором содержится информация о состоянии формы. Также там лежит объект ошибок errors.




    return (
        <>
            <div style={{
                textAlign: 'center',
                color: "AppWorkspace",
                padding: '20px',
            }}>Добавить новый пост</div>

            <form>

                <label> Введите имя
                    <input type='text'
                        name='name'
                        placeholder="Anonimus"
                    // value={formData.name}
                    // onChange={inputChange}
                    >
                    </input>
                </label>

                <label> Введите URL изображения
                    <input type='text'
                        name='url'
                        placeholder="url"
                    // value={formData.url}
                    // onChange={inputChange}
                    ></input>
                </label>

                <label> Введите заголовок поста
                    <input type='text'
                        name='postHead'
                        placeholder="Заголовок"
                    // value={formData.postHead}
                    // onChange={inputChange}
                    ></input>
                </label>

                <label> Введите текст поста
                    <input type='text'
                        name='postBody'
                        placeholder="сам текст"
                    // value={formData.postBody}
                    // onChange={inputChange}
                    ></input>
                </label>




            </form>



            <Button type="submit" variant="contained" className={s.btn_submit}>Опубликовать пост</Button>


        </>
    )


}
