import {useState} from 'react'
import './Posst.css'



export default function Posst() {

  let [mostrar, setMostrar]= useState(false)
  return (
   <div class="container">
        <img class="fotoPerfil" src="https://www.w3schools.com/w3images/avatar6.png" />
        <span type="tiempoP">32 min</span>
        <h4 class="nombreUsuario">agnes ortiz</h4>
        <hr />
        <br />
        <p class="comentario">Have you seen this?</p>
        <img class="imagenComentario" src="https://static.wikia.nocookie.net/yugiohenespanol/images/2/28/Foto_drag%C3%B3n_de_la_rosa_negra.jpg/revision/latest?cb=20120202064918&path-prefix=es" />
        <p class="comentario" >Lore ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <br />
        <hr />
        <button type="button" onClick={()=> setMostrar(!mostrar)}>Like</button> 
        {mostrar==true ? <p> 👍</p>: ""}
        <button type="button" > Comment</button> 
    </div>
  )
}

