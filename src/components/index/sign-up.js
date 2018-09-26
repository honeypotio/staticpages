import React from 'react';
import { I18n } from 'react-i18next';
import arrow from '../../assets/arrow-grey.svg';

export default () =>
  <I18n ns={ 'index' }>
    { t =>
      <div className="sign-up">
        <h2>{t('process.headline')}</h2>
        {
          [1, 2, 3, 4].map(s =>
            <div key={ s.toString() } className="sign-up__step">
              <div className="sign-up__step-position">
                <div className="sign-up__position-nr">{`0${s}`}</div>
                { s < 4 && <img src={ arrow } className="sign-up__arrow" /> }
              </div>
              <div className="sign-up__step-content">
                <h3 className="sign-up__step-headline">
                  {t(`process.step${s}.headline`)}
                </h3>
                <p className="sign-up__step-text">
                  {t(`process.step${s}.text`)}
                </p>
              </div>
            </div>
          )
        }
      </div>
    }
  </I18n>
