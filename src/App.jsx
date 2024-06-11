import './App.css'
import React from 'react'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer } from 'react-leaflet';

export default function App() {

  const Markers = [
    {
      getcode: [18.228074, -70.544055],
      popUp: "Hello world"
    },
    {
      getcode: [18.385408, -69.851357],
      popUp: "Hello world"
    },
    {
      getcode: [18.903831, -70.270576],
      popUp: "Hello world"
    }, {
      getcode: [18.909672, -70.28043],
      popUp: "Hello world"
    },
    {
      getcode: [18.910589, -70.281204],
      popUp: "Hello world"
    },
    {
      getcode: [18.911439, -70.398757],
      popUp: "Hello world"
    },

  ]
  // 18.228074,	-70.544055
  // 18.385408,	-69.851357
  // 18.903831,	-70.270576
  // 18.909672,	-70.28043
  // 18.910589,	-70.281204
  // 18.911439,	-70.398757

  // }



  // function App() {
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

