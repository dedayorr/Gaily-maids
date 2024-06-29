// components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 42.0396,
  lng: -88.2826
};

const locations = [
  { lat: 42.0373, lng: -88.2812, name: 'Elgin' },
  { lat: 41.9953, lng: -88.1856, name: 'Bartlett' },
  { lat: 41.9537, lng: -88.2531, name: 'Wayne' },
  { lat: 42.0425, lng: -88.0798, name: 'Hoffman Estates' },
  { lat: 42.1681, lng: -88.4287, name: 'Huntley' },
  { lat: 42.2411, lng: -88.3162, name: 'Crystal Lake' }
];

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {locations.map((location, index) => (
          <Marker key={index} position={{ lat: location.lat, lng: location.lng }} label={location.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
