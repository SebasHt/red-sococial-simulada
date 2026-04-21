import React, { useState, useEffect } from 'react';
import './ajustes.css'

export default function Ajustes() {
const [oscuro, setOscuro] = useState(() => {
    return localStorage.getItem('modoOscuro') === 'true';
  });
const cambiarTexto = () => {
  if (nuevoTexto.trim() !== "") {
    setNombre(nuevoTexto);
    localStorage.setItem("nombreUsuario", nuevoTexto); 
    setNuevoTexto("");
  }
};
  useEffect(() => {
    if (oscuro) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('modoOscuro', oscuro);
  }, [oscuro]);

  return (
    <div>
      <div class="contenedorConfiguracion">
        <div class="cambio">
        <button class="cambioColor" onClick={() => setOscuro(!oscuro)}>
        {oscuro ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        <p>Deseas cambiarn a modo oscuro</p>
      </div>


      <input 
        type="text" 
        value={nuevoTexto} 
        onChange={(e) => setNuevoTexto(e.target.value)} 
        placeholder="Escribe nuevo texto"
      />
      <button onClick={cambiarTexto}>Cambiar texto</button>

      </div>
    </div>
  );
}