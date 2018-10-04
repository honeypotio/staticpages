import React from 'react';
import { I18n } from 'react-i18next';

export default ({page}) =>
  <I18n ns={ page }>{
    t =>
    <div className="c-double-text-box">
      <div className="c-double-text-box__left">
        <h3>
          { t('story.left.headline') }
        </h3>
        <p>
          { t('story.left.text') }
        </p>
      </div>
      <div className="c-double-text-box__right">
        <h3>
          { t('story.right.headline') }
        </h3>
        <p>
          { t('story.right.text') }
        </p>
      </div>
    </div>
  }
  </I18n>
