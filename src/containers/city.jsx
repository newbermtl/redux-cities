import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

const City = (props) => {
  const city = props.city;
  const clickHandler = () => {
    props.setActiveCity(city);
  };

  return (
    <div
      className="list-group-item"
      onClick={clickHandler}
    >
      <p>{city.name}</p>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

// function mapStateToProps(state) {
//   return {
//     activeCity: state.activeCity
//   };
// }

export default connect(null, mapDispatchToProps)(City);
