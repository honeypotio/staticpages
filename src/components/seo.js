import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { I18n } from 'react-i18next';
import getCurrentPage from '../utils/page';

export default class Seo extends Component {
  render() {
    const page = getCurrentPage();
    return (<I18n ns={ "seo" }>
      {
        t =>
        <Helmet>
          <title>{ t(`${page}.title`) }</title>
          <meta name="description" content={t(`${page}.description`)}></meta>
        </Helmet>
      }
    </I18n>)
  }
}
