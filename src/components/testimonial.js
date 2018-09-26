import React from 'react';
import Wrapper from './wrapper';
import { I18n } from 'react-i18next';

export default ({name, company, position, index}) =>
  <I18n ns={ 'index' }>
    { t =>
    <div className="wrapper">
      <div className="testimonial">
        <div className="testimonial__text">
          "{t(`testimonial.${index}`)}"
        </div>
        <div className="testimonial__person">
          <div className="testimonial__avatar"></div>
          <div className="testimonial__description">
            <div className="testimonial__name">
              <p>{name}</p>
            </div>
            <div className="testimonial__position">
              { position }<br/>{ company }
            </div>
          </div>
        </div>
      </div>
    </div> }
  </I18n>
