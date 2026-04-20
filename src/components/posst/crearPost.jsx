import React,{ useState} from 'react'

export default function crearPost() {
    const [publicacion, setPublicacion]= useState([]);
    const [texto, setTexto]=useState("");
    const [imagen, setImagen]=useState("");
    const CrearPublicacion = () =>{
        if (texto.trim() !==""){
            const nuevaPublicacio ={
                id: Date.now(),
                usuario : "agnes ortiz",
                tiempo: "1 min",
                texto,
                imagen,
            };
            setPublicacion([nuevaPublicacio, ...publicacion])
            setTexto("")
            setImagen("")
        }
    }

  return (
    <div>
        <div className='creaPublicacion'>
        <textarea
         value={texto}
         onChange={(e)=>setTexto(e.target.value)}
         placeholder='escribir'
        />
        <input type="text" 
        value={imagen}
        onChange={(e)=setImagen(e.target.value)}
        placeholder='Url en caso de imagen'/>
        <button onClick={CrearPublicacion}>publicar</button>

         {posts.map((post) => (
        <div key={post.id} className="container">
          <img
            className="fotoPerfil"
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt="perfil"
          />
          <span className="tiempoP">{post.tiempo}</span>
          <h4 className="nombreUsuario">{post.usuario}</h4>
          <hr />
          <p className="comentario">{post.texto}</p>
          {post.imagen && (
            <img className="imagenComentario" src={post.imagen} alt="post" />
          )}
            </div>
            ))}
        </div>
    </div>
  )
}
