import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { setActiveCity } from '../actions';

const ActiveCity = (props) => {
  const activeCity = props.activeCity;
  if (activeCity) {
    const imgURL = `https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`;
    return (
      <div className="active-city">
        <h3> {activeCity.name} </h3>
        <p> {activeCity.address} </p>
        <img src={imgURL} alt={activeCity.slug} />
      </div>
    );
  }
  return null;
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps, null)(ActiveCity);
