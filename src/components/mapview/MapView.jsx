import React from "react";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1349893412.
import { Map, TileLayer } from 'react-leaflet'; 
import Markers from "../marker/Markers";
// import 'react-leaflet/dist/leaflet.css'
// import 'react-leaflet/lib/'

// const MapView = () =>{
//     // para llamar las coordenadas ya luego la conecto a la db 
//     return <Map center={{lat: '19.72673', long: '-70.9238'}} zoom={13}>
//         <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
//     </Map>
// }


// const center = {
//     lat: 51.505,
//     lng: -0.09,
//   }
  
//   function DraggableMarker() {
//     const [draggable, setDraggable] = useState(false)
//     const [position, setPosition] = useState(center)
//     const markerRef = useRef(null)
//     const eventHandlers = useMemo(
//       () => ({
//         dragend() {
//           const marker = markerRef.current
//           if (marker != null) {
//             setPosition(marker.getLatLng())
//           }
//         },
//       }),
//       [],
//     )
//     const toggleDraggable = useCallback(() => {
//       setDraggable((d) => !d)
//     }, [])
  
//     return (
//       <Marker
//         draggable={draggable}
//         eventHandlers={eventHandlers}
//         position={position}
//         ref={markerRef}>
//         <Popup minWidth={90}>
//           <span onClick={toggleDraggable}>
//             {draggable
//               ? 'Marker is draggable'
//               : 'Click here to make marker draggable'}
//           </span>
//         </Popup>
//       </Marker>
//     )
//   }
  
//   render(
//     <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <DraggableMarker />
//     </MapContainer>,
//   )




export default MapView;

 