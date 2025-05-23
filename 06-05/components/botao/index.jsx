import './style.css'

export default function Botao({ nome, idade }) {
    return (
        <button className="botao-container">
            {nome} {idade}
        </button>
    )
}
}