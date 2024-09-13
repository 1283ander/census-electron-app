import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../designTokens';

const Panel = styled.div`
  background-color: ${colors.background};
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  font-family: ${typography.fontFamily};
`;

const Title = styled.h2`
  color: ${colors.primary};
  margin-bottom: 10px;
`;

const DataItem = styled.p`
  color: ${colors.text};
  margin: 5px 0;
`;

const DemographicPanel = ({ data }) => {
  if (!data) return null;

  return (
    <Panel>
      <Title>Demographic Information</Title>
      <DataItem><strong>State:</strong> {data.state}</DataItem>
      <DataItem><strong>Population:</strong> {data.population.toLocaleString()}</DataItem>
      <DataItem><strong>Median Age:</strong> {data.medianAge}</DataItem>
      <DataItem><strong>Median Household Income:</strong> ${data.medianIncome.toLocaleString()}</DataItem>
      <DataItem><strong>Median Home Value:</strong> ${data.medianHomeValue.toLocaleString()}</DataItem>
      <DataItem><strong>Age Distribution:</strong> {data.ageDistribution}</DataItem>
      <DataItem><strong>Education Level:</strong> {data.educationLevel}</DataItem>
    </Panel>
  );
};

export default DemographicPanel;
