import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Hightest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }

  // Returns CSS class for the current sorting option.
  getSortByClass(sortByOption) {
    const { sortBy } = this.state;
    return sortBy === sortByOption ? 'active' : '';
  }

  // Setting state for sorting.
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }

  // Handles state of term field.
  handleTermChange(event) {
    console.log(`Term changed to: ${event.target.value}`);
    this.setState({
      term: event.target.value,
    });
  }

  // Handles state of location field.
  handleLocationChange(event) {
    console.log(`Location changed to: ${event.target.value}`);
    this.setState({
      location: event.target.value,
    });
  }

  // Handles test search functionality.
  handleSearch(event) {
    const { searchYelp } = this.props;
    const { term, location, sortBy } = this.state;

    searchYelp(term, location, sortBy);

    event.preventDefault();
  }

  // Renders the sorting options above the search field.
  renderSortByOptions() {
    console.log(process.env.REACT_APP_API_KEY);
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      const sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)} // Return value of the method.
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          onKeyDown={this.handleSortByChange.bind(this, sortByOptionValue)}
          key={sortByOptionValue}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {/* Use .renderSortByOptions() to sort the businesses by their options */}
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <button type="button" onClick={this.handleSearch}>Lets Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
