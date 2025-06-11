import React, { useState } from 'react';
import FormularioComentario from './FormularioComentario';
import ListaComentarios from './ListaComentarios';

const FeedDeComentarios = () => {
  const [comentarios, setComentarios] = useState([
    { nome: 'Ana', texto: 'React é incrível!' },
    { nome: 'João', texto: 'Muito bom esse projeto!' }
  ]);

  const adicionarComentario = (nome, texto) => {
    if (nome && texto) {
      setComentarios([...comentarios, { nome, texto }]);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '30px', maxWidth: '600px', margin: '0 auto', borderRadius: '8px' }}>
      <h2>Feed de Comentários</h2>
      <FormularioComentario onAdicionarComentario={adicionarComentario} />
      <ListaComentarios comentarios={comentarios} />
    </div>
  );
};

export default FeedDeComentarios;
