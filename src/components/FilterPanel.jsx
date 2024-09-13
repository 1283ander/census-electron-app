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

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${colors.text};
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  font-size: 1em;
  margin-bottom: 20px;
`;

const FilterPanel = ({ filters, setFilters }) => {
  const handleScopeChange = (e) => {
    setFilters({ ...filters, scope: e.target.value });
  };

  const handleDataTypeChange = (e) => {
    setFilters({ ...filters, dataType: e.target.value });
  };

  const handleRepresentationChange = (e) => {
    setFilters({ ...filters, representation: e.target.value });
  };

  return (
    <Panel>
      <Label htmlFor="scope">Geographic Scope:</Label>
      <Select id="scope" value={filters.scope} onChange={handleScopeChange}>
        <option value="county">County</option>
        <option value="tract">Tract</option>
        <option value="block">Block</option>
      </Select>

      <Label htmlFor="dataType">Data Type:</Label>
      <Select id="dataType" value={filters.dataType} onChange={handleDataTypeChange}>
        <option value="income">Median Household Income</option>
        <option value="ethnicity">Ethnic Distribution</option>
        <option value="age">Age Distribution</option>
      </Select>

      <Label htmlFor="representation">Representation Type:</Label>
      <Select id="representation" value={filters.representation} onChange={handleRepresentationChange}>
        <option value="chart">Chart</option>
        <option value="map">Map</option>
      </Select>
    </Panel>
  );
};

export default FilterPanel;
