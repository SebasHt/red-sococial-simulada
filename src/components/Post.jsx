import React, { useState } from "react";
import "./css/Posst.css"

function Post({ usuario, texto, imagen }) {
  const [mostrarLike, setMostrarLike] = useState(false);
  const [mostrarComentario, setMostrarComentario] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");

  const AgregarComentario = () => {
    if (nuevoComentario.trim() !== "") {
      setComentarios([...comentarios, nuevoComentario]);
      setNuevoComentario("");
    }
  };

  return (
    <div className="container">
      <img className="fotoPerfil" src="https://www.w3schools.com/w3images/avatar6.png"alt="perfil"/>
      <span className="tiempoP">32 min</span>
      <h4 className="nombreUsuario">{usuario}</h4>
      <hr />
      <p className="comentario">Have you seen this?</p>
      {imagen && (
        <img className="imagenComentario" src={imagen} alt="comentario" />
      )}
      <p className="comentario">{texto}</p>
      <hr />
      <div className="like-container">
        <button type="button" onClick={() => setMostrarLike(!mostrarLike)}>
          Like
        </button>
        {mostrarLike && <p className="like">👍</p>}
        <button type="button" onClick={() => setMostrarComentario(!mostrarComentario)}
        >
          Comment
        </button>
        {mostrarComentario && (
          <div className="comentarios">
            <input
              type="text"
              value={nuevoComentario}
              onChange={(e) => setNuevoComentario(e.target.value)}
              placeholder="Escribe un comentario"
            />
            <button onClick={AgregarComentario}>Enviar</button>
            <ul>
              {comentarios.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Posst() {
  return (
    <div>
      <Post
        usuario="agnes ortiz"
        texto="Lore ipsum dolor sit amet, consectetur adipisicing elit..."
        imagen="https://static.wikia.nocookie.net/yugiohenespanol/images/2/28/Foto_drag%C3%B3n_de_la_rosa_negra.jpg/revision/latest?cb=20120202064918&path-prefix=es"
      />
      <Post
        usuario="Zara tacones"
        texto="Lore ipsum dolor sit amet, consectetur adipisicing elit..."
      />
      <Post
        usuario="Pertizol"
        texto="Lore ipsum dolor sit amet, consectetur adipisicing elit..."
      />
    </div>
  );
}