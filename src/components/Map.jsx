import React from "react";
import 'leaflet/dist/leaflet.css';
//import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';



const Map = () => {
    return (
        <MapContainer center={[48.622016, 22.303276]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
        </MapContainer>
    );
};

export default Map