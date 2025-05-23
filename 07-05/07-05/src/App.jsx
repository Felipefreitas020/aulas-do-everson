import "./style.css"
export default function App() {
 
 
  function enviarFormulario(event) {
    event.preventDefault()

    const nome = event.target[0].value
    const mensagem = event.target[1].value
    alert(`mensagem enviada por ${nome}: ${mensagem}`)

  }
  return (
    <form className="buton" onSubmit={enviarFormulario} >
      <input type="text" placeholder="seu nome"/>
      <input type="text" placeholder="Escreva algo" />
      <button>enviar</button>
    </form>

    
  )
}