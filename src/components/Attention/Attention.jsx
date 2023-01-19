import React, { useState } from 'react'
import { AuthForm } from '../AuthForm/AuthForm'
import './index.css'

export const Attention = () => {

  const [enter, setEnter] = useState(false)
  const [authReg, setAuthReg] = useState('')
  const enterText = 'Для входа на ресурс необходима авторизация или регистрация'

  

  return (
    <div className='authPage'>
      <div className='snowplace'>
        ' '
      </div>
      <div className='snowman'>
        <div className='attention'>
          {enter
            ? <AuthForm authReg={authReg}/>
            : <p>{enterText}</p>
          }
        </div>
        <div className='buttons-block'>
          <button className='auth-btn' onClick={() => { setEnter(!enter); setAuthReg('reg') }}>Регистарция</button>
          <button className='auth-btn' onClick={() => { setEnter(!enter); setAuthReg('auth')}}>Авторизация</button>
        </div>
      </div>
    </div>
  )
}
