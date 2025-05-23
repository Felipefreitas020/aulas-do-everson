import './style.css'

export default function InputTexto({ nome, idade, }) {
    return (
        <button className="botao-container">
            {nome} {idade}
        </button>
    )
}