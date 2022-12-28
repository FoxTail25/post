import React from "react"
import Button from '@mui/material/Button'
import PostAddIcon from '@mui/icons-material/PostAdd';

const ButtonJsx = ({title}) => {
    return (
        <>

        <Button size="small" variant="contained" onClick={() => { console.log("Есть контакт") }} startIcon={<PostAddIcon />}>{title}</Button>

      //  <Button size="small" variant="contained" >{title}</Button>

        
        </>
    )
}


export default ButtonJsx