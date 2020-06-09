import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  // Function for using the Yelp utility to set state
  searchYelp(term, location, sortBy) {
    // console.log(`Searching for ${term} in ${location} and sorting by ${sortBy}.`);
    Yelp.search(term, location, sortBy).then((business) => {
      this.setState({ businesses: business });
    });
  }

  render() {
    const { businesses } = this.state;
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
