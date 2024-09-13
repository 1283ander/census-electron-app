import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DataTable from './components/DataTable';
import MapView from './components/MapView';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left-panel">
          <h1>Welcome to CensusApp</h1>
          <p>Navigate through census data and maps.</p>
          <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <DataTable searchTerm={searchTerm} />
        </div>
        <div className="right-panel">
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default App;
