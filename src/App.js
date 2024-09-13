import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DataTable from './components/DataTable';
import MapView from './components/MapView';
import SearchBar from './components/SearchBar';
import PopulationChart from './components/PopulationChart';
import DemographicPanel from './components/DemographicPanel';
import FilterPanel from './components/FilterPanel';
import StatusIndicator from './components/StatusIndicator';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [addressData, setAddressData] = useState(null);
  const [status, setStatus] = useState('');
  const [filters, setFilters] = useState({
    scope: 'county',
    dataType: 'income',
    representation: 'chart',
  });

  const handleSearch = async () => {
    if (!searchTerm) return;

    setStatus('Fetching address data...');
    try {
      // Replace with your actual Census API endpoint and key
      const apiKey="YOUR_CENSUS_API_KEY"; // <-- Replace with your Census API key
      const response = await fetch(`https://api.census.gov/data/2020/dec/pl?get=NAME,P1_001N,P2_001N,P3_001N,P4_001N,P5_001N,P6_001N&for=block:*&in=state:*&key=${apiKey}`);
      const data = await response.json();

      // Process data as per your API response structure
      // For demonstration, assuming data is an object with relevant fields
      const processedData = {
        state: "California",
        population: 39512223,
        medianAge: 36.5,
        medianIncome: 75000,
        medianHomeValue: 550000,
        ageDistribution: "35% under 18, 30% 18-64, 35% 65+",
        educationLevel: "25% High School, 50% Bachelor's, 25% Graduate",
        ethnicDistribution: "60% White, 20% Hispanic, 15% Asian, 5% Other",
        coordinates: [36.7783, -119.4179],
      };

      setAddressData(processedData);
      setStatus('Address data fetched successfully.');
    } catch (error) {
      console.error('Error fetching address data:', error);
      setStatus('Error fetching address data.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left-panel">
          <h1>Welcome to CensusApp</h1>
          <p>Navigate through census data and maps.</p>
          <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onSearch={handleSearch} />
          <StatusIndicator status={status} />
          {addressData && (
            <>
              <FilterPanel filters={filters} setFilters={setFilters} />
              <DemographicPanel data={addressData} />
              <DataTable data={addressData} />
              {filters.representation === 'chart' && <PopulationChart />}
            </>
          )}
        </div>
        <div className="right-panel">
          {addressData && (filters.representation === 'map') && <MapView data={addressData} filters={filters} />}
        </div>
      </div>
    </div>
  );
}

export default App;
