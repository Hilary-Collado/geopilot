// import React from "react";
import './Header.css'

import React, { useState } from 'react';
import { TileLayer } from 'react-leaflet';

const Header = () => {
  const [dropdownValue, setDropdownValue] = useState('');

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const handleMapChange = () => {
    if (dropdownValue === 'Claro') {
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />  
      // ...
    } else if (dropdownValue === 'Google') {
        <TileLayer
        attribution="google map"
        url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
      />
      // ...
    }
  };


return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>

      <div className="import-button">
        <button>Importar</button>
      </div>

      <div className="dropdown">
        <select value={dropdownValue} onChange={handleDropdownChange}>
          <option value="">Seleccionar mapa</option>
          <option value="Claro">Claro</option>
          <option value="Google">Google</option>
        </select>

        <button onClick={handleMapChange}>Ver mapa</button>
      </div>
    </header>
  );
};


export default Header
