import React from 'react';
import { I18n } from 'react-i18next';
import Link from 'gatsby-link';
import arrow from '../assets/arrow_blue.svg';

export default ({ page, topic, sign, small }) => {
  const headline = `text-box__headline text-box__headline--${small?'small':''}`;
  return <I18n ns={ page }>
    {
      t =>
      <div className="text-box">
        <h2 className={ headline }>
          { t(`${topic}.headline`) }
        </h2>
        <p className="text-box__text">{t(`${topic}.text`)}</p>
        { sign && 
            <Link className="text-box__link" to={'sign_up'}>
              {t('sign-up')}
              <img className="text-box__arrow" src={ arrow } />
            </Link>
        }
      </div>
    }
  </I18n>}
