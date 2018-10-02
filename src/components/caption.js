import React from 'react';
import { I18n } from 'react-i18next';

export default ({page, topic}) =>
  <I18n ns={ page }> {
    t =>
    <div className="c-caption">
      <h1 className="c-caption__headline">
        { t(`${topic}.headline`) }
      </h1>
      <p className="c-caption__tagline">
        { t(`${topic}.tagline`) }
      </p>
    </div> }
  </I18n>
