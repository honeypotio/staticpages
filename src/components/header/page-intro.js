import React, { Component } from 'react';
import getCurrentPage from '../../utils/page';
import { I18n } from 'react-i18next';

const component = 'page-intro';

export default class PageIntro extends Component {
  render() {
    const page = getCurrentPage();
    return (
      <I18n ns={ `${page}` }>
        {t =>
          <div className="page-intro">
            {/* <div className="page-intro__note">Note</div> */}
            <h1 className="page-intro__headline">
              {t(`${component}.headline1`)}<br />
              <b>{t(`${component}.headline2`)}</b>
            </h1>
            <p className="page-intro__tagline">{t(`${component}.tagline`)}</p>
            <span className="page-intro__button-bar">
              <button type="button" className="button button--yellow">{t(`${component}.button1`)}</button>
              <button type="button" className="button button--link">{t(`${component}.button2`)}</button>
            </span>
          </div>
        }
      </I18n>
    )
  }
}
