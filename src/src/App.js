import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DataTable from './components/DataTable';
import MapView from './components/MapView';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to CensusApp</h1>
        <p>Navigate through census data and maps.</p>
        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <DataTable searchTerm={searchTerm} />
        <MapView />
      </div>
    </div>
  );
}

export default App;
