import React from 'react';
import { I18n } from 'react-i18next';
import PositionCard from './position-card';
import dev from '../../assets/software-devs.svg';
import expert from '../../assets/data-experts.svg';
import talent from '../../assets/product-talents.svg';
import lead from '../../assets/engineering-lead.svg';

export default () =>
  <I18n ns={ 'tech-hiring' }>
    {
      t =>
      <div className="position-overview">
        <h2 className="position-overview__headline center">
          { t('position.headline') }
        </h2>
        <div className="position-overview__wrapper">
          {
            [dev, talent, lead, expert].map((i, k) =>
              <div key={ k.toString() } className="position-overview__item">
                <PositionCard image={ i } index={ k + 1 } />
              </div>
            )
          }
        </div>
      </div>
    }
  </I18n>
