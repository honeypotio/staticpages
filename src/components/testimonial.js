import React from 'react';
import { I18n } from 'react-i18next';

export default ({ index, page }) =>
  <I18n ns={ page }>
    { t =>
    <div className="wrapper">
      <div className="testimonial">
        <div className="testimonial__text">
          "{t(`testimonial.${index}.text`)}"
        </div>
        <div className="testimonial__person">
          <img
            className="testimonial__avatar"
            src={ t(`testimonial.${index}.image`) } />
          <div className="testimonial__description">
            <div className="testimonial__name">
              <p>{t(`testimonial.${index}.name`)}</p>
            </div>
            <div className="testimonial__position">
              <p
                dangerouslySetInnerHTML={
                  {__html: t(`testimonial.${index}.position`).replace(/\n/g, '<br />')}
                }></p>
            </div>
          </div>
        </div>
      </div>
    </div> }
  </I18n>
