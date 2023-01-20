import s from './helloMessage.module.css'


import React from 'react'
import { Button } from '@mui/material'

export const HelloMessage = ({ changeMessage }) => {

    return (
        <div className={s.helloBolock}>
            <div className={s.helloText}>
                Приветствую Вас уважаемый гость! Если вы желаете просто посмотреть информацию размещенную на ресурсе. А так же ознакомиться с функционалом самого приложения. Тогда просто выберите "Авторизация" (по умолчанию данные уже заполнены) далее кликните на ключик. Это позволит вам съэкономить время. Если вы желате зарегистрироваться. То вам необходимо выбрать пунк "регистрация" ввести адрес электронной почты и пароль.
            </div>
            <Button variant='contained' onClick={() => changeMessage()}>Всё ясно :)</Button>
        </div>
    )
}
