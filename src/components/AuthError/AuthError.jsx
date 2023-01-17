import { Button } from '@mui/material'
import React from 'react'
import './index.css'

export const AuthError = ({ authErr, setAuthErr }) => {



    return (
        <div className='errorBlock'>
            <div className='errorMessage'>
                {authErr} :(
            </div>
            <Button variant='outlined' onClick={() => setAuthErr('')}>Попробовать снова</Button>
        </div>

    )
}
