import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import s from './notFound.module.css'
import { useContext } from 'react';
import { AllContextData } from '../../components/context/context';


export const NotFound = () => {
    const navigate = useNavigate()
    const data = useContext(AllContextData)
    const pagnatePage = data[5]

    function checkurl() {

        navigate('/'); pagnatePage()

    }

    return (
        <div className={s.notFound}>
            <SentimentDissatisfiedIcon fontSize='large' color='inherit' />
            <h1 >Извините, по вашему запросу ничего не найдено</h1>
            <Button variant='contained' onClick={() => checkurl()}>На главную</Button>
        </div>
    )

}