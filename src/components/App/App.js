import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [
  business,
];

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching for ${term} in ${location} and sorting by ${sortBy}.`);
  }

  render() {
    return (
      <div className="App">
        <h1>Avez-vous faim ?</h1>
        <h2>(Are you hungry?)</h2>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
