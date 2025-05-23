import { useState } from "react"
import "./style.css"
export default function FormCadastro() {
  // formas de criar as chamadas de state / estado
  const [nome, setnome] = useState('')
  const [email, setEmail] = useState('')
  const [curso, setcurso] = useState('')
  const [cadastro, setcadastro] = useState(" ")

  function enviarCadastro(){
    setcadastro(` Seu Nome é ${nome} seu email é ${email} e seu curso é ${curso}`)
  }


  return (
    <div>
      <h2>Cadastro</h2>
      <input type="text"
        placeholder="nome"
        value={nome}
        onChange={(e) => setnome(e.target.value)}
      />

      <input type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="text"
        placeholder="curso"
        value={curso}
        onChange={(e) => setcurso(e.target.value)}
      />
      <button className="botao" onClick={enviarCadastro}>Enviar</button>
      <p>{cadastro}</p>
      

    </div>
  )
}