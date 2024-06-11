import './App.css'
import React from 'react'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer } from 'react-leaflet';


function App() {
  return (
      <div className="App">
        <MapContainer center={[19.726728, -70.923816]} zoom={13}>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2096855377. */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
  );
} 

export default App

