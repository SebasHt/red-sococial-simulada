import React, { useState, useEffect } from 'react';
import './ajustes.css';

export default function Ajustes() {
  const [oscuro, setOscuro] = useState(() => {
    return localStorage.getItem('modoOscuro') === 'true';
  });
  const [nombre, setNombre] = useState(() => {
    return localStorage.getItem("nombreUsuario") || "Texto inicial";
  });
  const [nuevoTexto, setNuevoTexto] = useState("");

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
      <div className="contenedorConfiguracion">
        <div className="cambio">
          <button className="cambioColor" onClick={() => setOscuro(!oscuro)}>
            {oscuro ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
          <p>Deseas cambiar a modo oscuro</p>
        </div>
        <input 
          type="text" 
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)} 
          placeholder="Escribe nuevo texto"
        />
        <button onClick={cambiarTexto}>Cambiar texto</button>
        <p>Nombre actual: {nombre}</p>
      </div>
    </div>
  );
}
