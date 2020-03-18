import React from 'react';
import {useSelector} from 'react-redux';

const AddedFeature = props => {
  const car = useSelector((state) => state.car);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        props.removeFeature(props.feature)
      }}>X</button>
      {car.feature.name}
    </li>
  );
};

export default AddedFeature;
