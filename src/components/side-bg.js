import React from 'react';

const name = 'side-bg';
export default ({ settings }) => {
  const c = settings.reduce((pre, cur) => `${pre} ${name}--${cur}`, '');
  return <div className={ `${name} ${c}` }></div>
}
