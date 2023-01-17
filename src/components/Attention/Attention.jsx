import React, { useState } from 'react'
import { AuthForm } from '../AuthForm/AuthForm'
import './index.css'

export const Attention = () => {

  const [enter, setEnter] = useState(false)
const enterText = 'Для входа на ресурс необходим авторизация'
  return (
    <div className='authPage'>
      <div className='snowplace'>
        ' '
      </div>
      <div className='snowman'>
        <div className='attention'>
          {enter
           ? <AuthForm/>
           : <p style={{paddingTop: '20px'}}>{enterText}</p>
          }
        </div>
        <div className='buttons-block'>
        <button className='auth-btn' onClick={() => {console.log('reg'); setEnter(!enter)}}>Регистарция</button>
        <button className='auth-btn' onClick={() => {console.log('reg'); setEnter(!enter)}}>Авторизация</button>
        </div>
      </div>
    </div>
  )
}
