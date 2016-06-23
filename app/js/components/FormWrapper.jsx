import PanelSwitcher from './PanelSwitcher';
import React from 'react';

export default (props) => {
  return (
    <div className="m-auth__form">
      <div className="m-auth__heading">Join Honeypot</div>
      <PanelSwitcher activePane={props.activePane} />
      <div className="panel panel-default o-page-island m-auth__panel m-auth__panel--switcher">
        {props.children}
      </div>
    </div>
  );
};
