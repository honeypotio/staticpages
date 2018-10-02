import React from 'react';

export default ({image, name, position}) =>
  <div className="c-employee-card">
    <img className="c-employee-card__avatar" src={ image } />
    <h4 className="c-employee-card__name">{ name }</h4>
    <p className="c-employee-card__position">{ position }</p>
  </div>
