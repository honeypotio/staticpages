import React from 'react';

export default (props) => {
  const cssNamespace = 'c-panel-switcher';
  const activeClass = `${cssNamespace}__item ${cssNamespace}__item--active`;
  const inactiveClass = `${cssNamespace}__item ${cssNamespace}__item--last`;
  if(props.activePane === 'talent') {
    return (
      <div className="clearfix">
        <div className={activeClass}>I'm a Talent</div>
        <a href="/invite_requests/new" className={inactiveClass}>I'm an Employer</a>
      </div>
    );
  }

  return (
    <div className="clearfix">
      <a href="/users/sign_up" className={inactiveClass}>I'm a Talent</a>
      <div className={activeClass}>I'm an Employer</div>
    </div>
  );
}
