import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import s from './notFound.module.css'


export const NotFound = () => {

    return (
        <div className={s.notFound}>
            <SentimentDissatisfiedIcon fontSize='large' color='inherit'/>
            <h1 >Извините, по вашему запросу ничего не найдено</h1>
            <Link to='/' className={s.btn__home}><Button variant='contained'>На главную</Button></Link>
        </div>
    )

}