import React from 'react';
import { I18n } from 'react-i18next';

const injectHTML = (t, index) => (
  // Because we need to be able to set a newline (\n) in the translation file
  // we postprocess the output and replace the newline with a break element
  // (<br />).
  {__html: t(`testimonial.${index}.position`).replace(/\n/g, '<br />')}
)

export default ({ index, page, left, right }) => {
  const classes = `side-background side-background--${page}`;
  return <I18n ns={ page }>
    { t =>
    <div className="testimonial-wrapper">
      { left && <div className={ `${classes} side-background--left` }></div>}
      { right && <div className={ `${classes} side-background--right` }></div>}
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
              <p dangerouslySetInnerHTML={ injectHTML(t, index) }></p>
            </div>
          </div>
        </div>
      </div>
    </div> }
  </I18n>}
