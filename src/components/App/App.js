import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Avez-vous faim ?</h1>
      <h2>(Are you hungry?)</h2>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
