import {useState} from 'react'
import './info.css'


export default function MiniInfo() {
const [nombre, setNombre] = useState(() => {
  return localStorage.getItem("nombreUsuario") || "Agnes Ortiz";
});

  return (
    <div class="containerInfo">
        <img class="avatarInfo" src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
        <h2 className='nombre'>{nombre}</h2>
        <hr />
        <samp class="texto ">🎂 Julio 11, 2000</samp>
        <samp class="texto ">🏠 Medellin, Colombia</samp>
    </div>
  )
}
