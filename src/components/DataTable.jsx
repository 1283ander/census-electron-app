import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../designTokens';

const TableContainer = styled.div`
  overflow-x: auto;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${typography.fontFamily};
`;

const Th = styled.th`
  background-color: ${colors.primary};
  color: white;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${colors.lightGray};
  color: ${colors.text};
`;

const DataTable = ({ data }) => {
  if (!data) return null;

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <Th>State</Th>
            <Th>Population</Th>
            <Th>Median Age</Th>
            <Th>Median Income</Th>
            <Th>Median Home Value</Th>
            <Th>Age Distribution</Th>
            <Th>Education Level</Th>
            <Th>Ethnic Distribution</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{data.state}</Td>
            <Td>{data.population.toLocaleString()}</Td>
            <Td>{data.medianAge}</Td>
            <Td>${data.medianIncome.toLocaleString()}</Td>
            <Td>${data.medianHomeValue.toLocaleString()}</Td>
            <Td>{data.ageDistribution}</Td>
            <Td>{data.educationLevel}</Td>
            <Td>{data.ethnicDistribution}</Td>
          </tr>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default DataTable;
