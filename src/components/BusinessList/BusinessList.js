import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// Maps businesses with the business compoenent.
class BusinessList extends React.Component {
  render() {
    const { businesses } = this.props;
    return (
      <div className="BusinessList">
        {businesses.map((business) => <Business business={business} key={business} />)}
      </div>
    );
  }
}

export default BusinessList;
