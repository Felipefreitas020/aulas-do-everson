import './style.css'

export default function BoxAlerta({ children }) {
    return (
        <div className="box-container">
            <h1>Alerta!!!</h1>
            {children}
        </div>
    )
}