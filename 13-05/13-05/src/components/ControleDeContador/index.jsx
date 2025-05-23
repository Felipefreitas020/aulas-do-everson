import { useState } from "react";
import "./style.css"
export default function ControleDeContador(){
    const [num,setNum] = useState(0) 

    function aumentar(){
        if(num + 1)
            setNum(num + 1)
    }

    function diminuir() {
  if (num > 0) {
    setNum(num - 1);
  }

  }
  return(

    <div className="container">
        <h1>seu número é {num}</h1><br />
        <button className="btn" onClick={aumentar}>aumentar número</button><br /><br />
        
        <button className="btn" onClick={diminuir}>diminuir número</button>

   
    </div>
  )
}