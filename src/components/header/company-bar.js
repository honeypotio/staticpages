import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import travis from '../../../app/assets/images/travis_logo.svg';
import zalando from '../../../app/assets/images/zalando_logo.svg';
import helpling from '../../../app/assets/images/helpling_logo.svg';
import zenmate from '../../../app/assets/images/zenmate_logo.png';

const component = 'company-bar';
const companies = [zalando, travis, helpling];
export default class CompanyBar extends Component {
  render() {
    return <I18n ns={ 'index' }>
      {
        t =>
        <div className="company-bar">
          <span className="company-bar__tagline">{t(`${component}.tagline`)}</span>
          {
            companies.map((c, i) =>
              <img key={ i.toString() }
                src={ c }
                className="company-bar__logo"/>
            )
          }
        </div>
      }
      </I18n>;
  }
}
