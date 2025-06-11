
/*import { useState, useRef } from "react"
export default function App() {
  let variable = '0'
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const ShowValue = () => {
    alert(`
        Valor variavel: ${variable}
        Valor do state ${state}
        Valor do Ref: ${ref.current}
      `)
  }
 
  return(
    <>
    <p>Valor Variável: {variable}</p>
    <p>valor do state:{state}</p>
    <p>Valor do ref: {ref.current}</p>

    <button onClick={() => variable ++}>Aumentar variavel</button>
    <button onClick={() => setState (state +100 )}>Aumentar state</button>
    <button onClick={()=> ref.current ++}>Valor do ref</button>
    <button onClick={ShowValue}>Exibir valores</button>
    
    

    </>
  )
}*/

import ClickTraker from "./components/clickTracker";


export default function App() {
  return(
    <ClickTraker/>
  )
}