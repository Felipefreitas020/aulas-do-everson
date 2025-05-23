import './style.css'

// a prop children é uma forma de passar elementos filhos para dentro de um componente.

export default function Card({ children }) {
    return (
        <div className="card-container">
            {children}
        </div>
    )
}