import React, { Component } from 'react';
import getCurrentPage from '../../utils/page';
import { I18n } from 'react-i18next';
import '../../styles/page-intro.scss';

export default class PageIntro extends Component {
  render() {
    const page = getCurrentPage();
    return (
      <I18n ns={ page }>
        {t =>
          <div className="page-intro">
            <div className="page-intro__note">Note</div>
            <h1 className="page-intro__headline">
              Choose a<br /><b>Job You love</b>
            </h1>
            <p className="page-intro__tagline">{t('tagline')}</p>
            <span className="page-intro__button-bar">
              <button type="button" className="btn btn-default">Find me a job</button>
              <button type="button" className="btn btn-info">I am Hiring</button>
            </span>
          </div>
        }
      </I18n>
    )
  }
}
