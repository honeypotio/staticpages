import React from 'react';

export default (props) => {
  const errorClass = props.hasError ? 'c-checkbox__replacement-label--error' : '';
  const elemClass = `c-checkbox__replacement-label ${errorClass}`;
  return (
    <div className='control-label c-checkbox' data-checkbox={props.label}>
      <input type="checkbox" id={props.label} className="c-checkbox__replace" onClick={props.onCheck} />
      <label className="c-checkbox__label"></label>
      <label htmlFor={props.label} className={elemClass}>
        {props.children ? props.children : props.label}
      </label>
    </div>
  );
};
