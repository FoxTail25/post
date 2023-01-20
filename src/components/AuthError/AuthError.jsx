import { Button } from '@mui/material'
import React from 'react'
import s from './authErr.module.css'

export const AuthError = ({ authErr, setAuthErr }) => {



    return (
        <div className={s.errorBlock}>
            <div className={s.errorMessage}>
                {authErr} :(
            </div>
            <Button variant='contained' onClick={() => setAuthErr('')}>Попробовать снова</Button>
        </div>

    )
}
