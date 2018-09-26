import React from 'react';
import { I18n } from 'react-i18next';

export default ({ index, page }) =>
  <I18n ns={ page }>
    { t =>
    <div className="small-testimonial">
      <img
        className="small-testimonial__avatar"
        src={ t(`testimonial.${index}.image`) } />
      <h4 className="small-testimonial__name">
        { t(`testimonial.${index}.name`) }
      </h4>
      <p className="small-testimonila__position">
        { t(`testimonial.${index}.position`) }
      </p>
      <p className="small-testimonial__text">
        "{ t(`testimonial.${index}.text`) }"
      </p>
    </div>
    }
  </I18n>
