import React from 'react';
import { languages, getLang } from '../utils/i18n';
import getCurrentPage from '../utils/page';
import Link from 'gatsby-link';

const lang = getLang();
const page = getCurrentPage();

const createLanguageSwitch = (langItem) => { 
  const active = langItem === lang;
  const style = 'lang-switch__lang-item ' + (active
    ? 'lang-switch__lang-item--active'
    : '');
  let content = langItem.toUpperCase();

  if(!active) {
    content = (<Link className="" to={ '/'+langItem+'/'+page }>
      {content}
    </Link>);
  }

  return (<li key={ langItem } className={ style }>{ content }</li>);
}

export default () =>
  <ul className="lang-switch">
    { languages.map(i => createLanguageSwitch(i)) }
  </ul>
