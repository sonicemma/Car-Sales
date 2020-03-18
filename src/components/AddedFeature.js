import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        props.removeFeature(props.car.feature)
      }}>X</button>
      {props.car.feature.name}
    </li>
  );
};

export default AddedFeature;
