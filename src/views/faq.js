import React from 'react';
import Layout from '../components/layout';
import TextBox from '../components/text-box';
import { I18n } from 'react-i18next';
import i18n, { getLang } from '../utils/i18n';
import '../styles/main.scss';

const currentLanguage = getLang();
const talentTopics =  Object.keys(i18n.getResource(currentLanguage, 'faq', 'talents')).filter(topic => topic !== 'type');
const employerTopics = Object.keys(i18n.getResource(currentLanguage, 'faq', 'employers')).filter(topic => topic !== 'type');

export default () => (
  <Layout smallerHeader>
    <I18n ns={ "faq" }>
      {
        t => (
          <div className={ "c-info" }>
            <div className={ "container c-info__container c-info__legal" }>
              <h2 className={ "c-info__heading" }>{ t('title') }</h2>

              <p className={ "text-center" }>
                <a href={ `#talents` }>{ t('talents.type') }</a>
                &nbsp;&amp;&nbsp;
                <a href={ `#employers` }>{ t('employers.type') }</a>
              </p>

              <h2 id={ "talents" }>{ t('talents.type') }</h2>
              {
                talentTopics.map(topic => <div key={ `talent-${topic}` }>
                  <h3>{ t(`talents.${topic}.title`) }</h3>
                  <ul>
                    {
                      i18n.getResource(currentLanguage, 'faq', `talents.${topic}.text`).map((faqQn, index) => <li key={ index }>
                        <strong>{ t(`talents.${topic}.text.${index}.qn`) }</strong>
                        <p>{ t(`talents.${topic}.text.${index}.ans`) }</p>
                      </li>)
                    }
                  </ul>
                </div>)
              }

              <h2 id={ "employers" }>{ t('employers.type') }</h2>
              {
                employerTopics.map(topic => <div key={ `employer-${topic}` }>
                  <h3>{ t(`employers.${topic}.title`) }</h3>
                  <ul>
                    {
                      i18n.getResource(currentLanguage, 'faq', `employers.${topic}.text`).map((faqQn, index) => <li key={ index }>
                        <strong>{ t(`employers.${topic}.text.${index}.qn`) }</strong>
                        <p>{ t(`employers.${topic}.text.${index}.ans`) }</p>
                      </li>)
                    }
                  </ul>
                </div>)
              }
            </div>
          </div>
        )
      }
    </I18n>
  </Layout>
)
