import dayjs from 'dayjs'
import React, { useState } from 'react'
import './clock.css'

export const Clock = () => {

    const [clock, setClock] = useState('')
    const [defis, setDefis] = useState(':')

    function watch() {
        setClock(dayjs().format("HH:mm:ss DD/MM/YYYY"))
    }

    function puls() {
        defis === ':' ? setDefis(' ') : setDefis(':')
    }

    setInterval(watch, 1000)
    // setInterval(puls, 1000)

    return (

        <div className='clock'>
            
            <div className='clock__time'>
            Время    {clock.slice(0, 2)}:{clock.slice(3, 5)}:{clock.slice(6, 8)}
            </div>

            <div className='clock__time'>
              Дата  {clock.slice(9, )}
            </div>

        </div>
    )
}
