import usuario from './data/usuarios'

export default function ListaUsuarios () {
    return (
        <>
        <h2>Lista de Usuario:</h2>
        <ul>
            {usuario.map}((usuario) => (
                <li key={usuario.id}>{usuario.nome} </li>
            )
        </ul>
        </>
    )
}