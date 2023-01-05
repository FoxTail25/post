import { useContext } from "react"
import { AllContextData } from "../../components/context/context"



export const Postp2 = () => {
    
    let siP
    const countedPost = useContext(AllContextData)
    
    const p = window.location.pathname.slice(6)
    console.log(countedPost)

    // profilePage()

    // function profilePage() {

    // }
    siP = (countedPost[0].filter(element => element._id === p))[0]

    console.log(siP)
    console.log(p)


    return (
        null
    )
}