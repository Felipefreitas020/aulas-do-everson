import { useRef } from "react"
export default function ClickTraker(){
    const ref = useRef(0)
    const value = () => console.log(`Valor do ref: ${ref.current +1}`)

    return(
    <div>
        

        <button onClick={value}>Valor do ref</button>
    </div>
    )
}