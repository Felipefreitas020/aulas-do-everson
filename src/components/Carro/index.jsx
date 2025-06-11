import "./style.css";

export default function ({ nome, imagem, descricao }) {
  return (
    <div className="carro">
      <h2>{nome}</h2>
      <img src={imagem} alt={nome} />
      <div className="description">
        <h3>{descricao}</h3>

      </div>
    </div>
  );
}

