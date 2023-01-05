import { Link } from 'react-router-dom'
import s from './notFound.module.css'


export const NotFound = () => {

    return (
        <div className={s.notFound}>
            <Link to='/'><h1>назад</h1></Link>
            <h1 >Извините, по вашему запросу ничего не найдено</h1>
        </div>
    )

}