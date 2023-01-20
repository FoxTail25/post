import React, { useState } from 'react'
import { AuthForm } from '../AuthForm/form-auth'
import s from './attention.module.css'

export const Attention = () => {

  const [enter, setEnter] = useState(false)
  const [authReg, setAuthReg] = useState('')
  const enterText = 'Для входа на ресурс необходима авторизация'



  return (
    <div className={s.authPage}>

      <div className={s.snowman}>
        <div className={s.snowmanAttention}>
          {(enter
          )
            ? <AuthForm authReg={authReg} setEnter={setEnter}/>
            : `${enterText}`
          }
        </div>
        {
          !enter ?
          <div className={s.buttonBlock}>
              <button className={s.authBtn} onClick={() => { setEnter(!enter); setAuthReg('auth') }}>Авторизация</button>
              или
              <button className={s.authBtn} onClick={() => { setEnter(!enter); setAuthReg('reg') }}>Регистарция</button>
            </div>
            : null
        }
      </div>

    </div>
  )
}
