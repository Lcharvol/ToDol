import React, { PropTypes } from 'react';

import './buttonadd.css';

const Buttonadd = ({ affaddbox }) => {
  Buttonadd.propTypes = {
    affaddbox: PropTypes.func.isRequired,
  };

  return (
    <div className="TodolistBox" onClick={affaddbox}>
      <i className="fa fa-plus fa-3x plus" aria-hidden="true" />
    </div>
  );
};

export default Buttonadd;
