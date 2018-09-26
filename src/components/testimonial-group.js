import React from 'react';
import { I18n } from 'react-i18next';
import SmallTestimonial from './small-testimonial';

export default ({ page, indexes }) =>
  <I18n ns={ page }>
    { t =>
    <div className="wrapper">
      <div className="testimonial-group">
        <h2 className="testimonial-group__headline">
          { t('testimonial.headline') }
        </h2>
        <p className="testimonial-group__tagline">
          { t('testimonial.tagline') }
        </p>
        <div className="testimonial-group__wrapper">
          { indexes.map(i =>
            <div key={ i.toString() } className="testimonial-group__testimonial">
              <SmallTestimonial page={ page } index={ i } />
            </div>
            ) }
        </div>
      </div>
    </div>
    }
  </I18n>
