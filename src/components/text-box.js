import React from 'react';
import { I18n } from 'react-i18next';
import Link from 'gatsby-link';

//{/*<button type="button" className="btn btn-link">{t('sign-up')}</button>*/}
export default ({ page, topic, sign }) => 
  <I18n ns={ page }>
    {
      t =>
      <div className="text-box">
        <h2 className="text-box__headline">{t(`${topic}.headline`)}</h2>
        <p className="text-box__text">{t(`${topic}.text`)}</p>
        { sign && 
            <Link to={'sign_up'}>{t('sign-up')}</Link>
        }
      </div>
    }
  </I18n>
