import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import styled from 'styled-components';
import L from 'leaflet';
import { colors } from '../designTokens';

const { BaseLayer, Overlay } = LayersControl;

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

const MapView = ({ data, filters }) => {
  const [incomeData, setIncomeData] = useState([]);
  const [ethnicityData, setEthnicityData] = useState([]);

  useEffect(() => {
    if (data) {
      // Process income and ethnicity data
      const income = data.map(item => ({
        state: item.state,
        medianIncome: item.medianIncome,
        coordinates: item.coordinates,
      }));

      const ethnicity = data.map(item => ({
        state: item.state,
        ethnicDistribution: item.ethnicDistribution,
        coordinates: item.coordinates,
      }));

      setIncomeData(income);
      setEthnicityData(ethnicity);
    }
  }, [data]);

  return (
    <MapWrapper>
      <MapContainer center={[37.0902, -95.7129]} zoom={4} style={{ height: '100%', width: '100%' }}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          {filters.dataType === 'income' && (
            <Overlay name="Median Household Income">
              <LayerGroup>
                {incomeData.map((item, index) => (
                  <Marker key={index} position={item.coordinates}>
                    <Popup>
                      <strong>{item.state}</strong><br/>
                      Median Income: ${item.medianIncome.toLocaleString()}
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </Overlay>
          )}
          {filters.dataType === 'ethnicity' && (
            <Overlay name="Ethnic Distribution">
              <LayerGroup>
                {ethnicityData.map((item, index) => (
                  <Marker key={index} position={item.coordinates}>
                    <Popup>
                      <strong>{item.state}</strong><br/>
                      Ethnic Distribution: {item.ethnicDistribution}
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </Overlay>
          )}
        </LayersControl>
      </MapContainer>
    </MapWrapper>
  );
};

export default MapView;
