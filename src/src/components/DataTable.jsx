import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, typography } from '../designTokens';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: ${typography.fontFamily};
`;

const Th = styled.th`
  border: 1px solid ${colors.lightGray};
  padding: 12px;
  background-color: ${colors.primary};
  color: white;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

const Td = styled.td`
  border: 1px solid ${colors.lightGray};
  padding: 12px;
  text-align: center;
  color: ${colors.text};
`;

const DataTable = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    fetch('data/census-data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filteredData = sortedData.filter((item) =>
    item.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Table>
      <thead>
        <tr>
          <Th onClick={() => requestSort('state')}>State</Th>
          <Th onClick={() => requestSort('population')}>Population</Th>
          <Th onClick={() => requestSort('medianAge')}>Median Age</Th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <Td>{item.state}</Td>
            <Td>{item.population}</Td>
            <Td>{item.medianAge}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
