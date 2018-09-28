import React from 'react';
import { I18n } from 'react-i18next';

export default ({image, index}) =>
  <I18n ns={ 'tech-hiring' }>
    {
      t =>
      <div className="position-card center">
        <img src={ image } />
        <h4 className="position-card__headline">
          { t(`position.${index}.headline`) }
        </h4>
        <p className="position-card__text">
          { t(`position.${index}.text`) }
        </p>
      </div>
    }
  </I18n>
