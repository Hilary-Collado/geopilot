import './App.css'
import React from 'react'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import Header from './Header'; 

function App() {

// Suggested code may be subject to a license. Learn more: ~LicenseLog:635873163.
  // MAPA DE COORDENADAS
  // COORDENADAS
  const Markers = [
    {
      getcode: [18.228074, -70.544055],
      popUp: "18.228074, -70.544055\nHello world"
    },
    {
      getcode: [18.385408, -69.851357],
      popUp: "18.385408, -69.851357\nHello world"
    },
    {
      getcode: [18.903831, -70.270576],
      popUp: "18.903831, -70.270576\nHello world"
    }, {
      getcode: [18.909672, -70.28043],
      popUp: "Hello world"
    },
    {
      getcode: [18.910589, -70.281204],
      popUp: "Hello world"
    },
    // {
    //   getcode: [18.911439, -70.398757],
    //   popUp: "Hello world"
    // },

  ]
  // 18.228074,	-70.544055
  // 18.385408,	-69.851357
  // 18.903831,	-70.270576
  // 18.909672,	-70.28043
  // 18.910589,	-70.281204
  // 18.911439,	-70.398757 

  // ICONOS DEL MAPA 
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })


  // function App() {
  return (

   
    <div className="App">

  <Header />


      {/* COORDENADAS DONDE SE UBICARÁ CUANDO SE INGRESE */}
      <MapContainer center={[18.909672, -70.28043]} zoom={10}>

        {/* PARA LLAMAR AL MAPA */}

        {/* MAPA DE LEAFLET  */}
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />   */}

        {/* GOOGLE MAP  */}
        <TileLayer
          attribution="google map"
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />



        {/* MarkerClusterGroup AGRUPAR LOS ICONOS Y LOS MENSAJES */}
        <MarkerClusterGroup
          chunkedLoading
        // iconCreateFunction={createClusterCustomIcon}
        >
          {/* mostrar los iconos y los mensajes */}
          {
            Markers.map(marker => (
              <Marker position={marker.getcode} icon={customIcon}>
                <Popup>
                  {marker.popUp}
                </Popup>
              </Marker>
            ))
          }
        </MarkerClusterGroup>




      </MapContainer>
    </div>
  );
}

export default App

