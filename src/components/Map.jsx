import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'
import PropTypes from 'prop-types';
import { Icon } from 'leaflet';
import IconImage from '../assets/placeholder.png';

const customIcon = new Icon({
    iconUrl: IconImage,
    iconSize: [38, 38],
});

const Map = ({ markers = [], height}) => {
    return (
        <MapContainer center={[48.622016, 22.303276]} zoom={12} style={{ height: height+'px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="httpsй://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <MarkerClusterGroup>
                {markers.map((marker) => (
                    <Marker position={[marker[0], marker[1]]} icon={customIcon}>
                        <Popup>
                            <h2>{marker[2]}</h2>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

Map.propTypes = {
    markers: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType(
                [PropTypes.number,
                    PropTypes.string]
            )
        )
    ),
    height: PropTypes.number.isRequired
};

export default Map;