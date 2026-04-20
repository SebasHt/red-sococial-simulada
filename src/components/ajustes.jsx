import React, { useState } from 'react';

export default function Ajustes() {
  const [oscuro, setOscuro] = useState(false);

  return (
    <div 
      style={{ 
        backgroundColor: oscuro ? 'black' : 'white', 
        height: '100vh' 
      }}
    >
      <button onClick={() => setOscuro(!oscuro)}>
        {oscuro ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </div>
  );
}

