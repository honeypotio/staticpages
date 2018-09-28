import React from 'react';
import SideBackground from '../side-bg';
import { I18n } from 'react-i18next';
import PaymentOption from './payment-option';


export default () =>
  <I18n ns={ 'tech-hiring' }>
    {
      t =>
      <div className="payment-options">
        <SideBackground settings={ ['left', 'tech-hiring'] } />
        <SideBackground settings={ ['right', 'rotate', 'tech-hiring'] } />
        <h2 className="payment-options__headline">
          { t('payment-options.headline') }
        </h2>
        <div className="payment-options__wrapper">
          <PaymentOption option="basic" modifier="yellow" />
          <PaymentOption option="member" modifier="blue" />
        </div>
      </div>
    }
  </I18n>
