import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import L from 'leaflet';
import { colors } from '../designTokens';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 20px;
`;

const MapView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/census-data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <MapWrapper>
      <MapContainer center={[37.0902, -95.7129]} zoom={4} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item, index) => (
          <Marker key={index} position={item.coordinates}>
            <Popup>
              <strong>{item.state}</strong><br/>
              Population: {item.population.toLocaleString()}<br/>
              Median Age: {item.medianAge}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  );
};

export default MapView;
