import React from 'react';

const City = (props) => {
  const city = props.city;
  return (
    <div className="list-group-item">
      <p>{city.name}</p>
    </div>
  );
};

export default City;
