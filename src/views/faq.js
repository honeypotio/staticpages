import React from 'react';
import Layout from '../components/layout';
import TextBox from '../components/text-box';
import faqList from '../locales/faq.json';
import { I18n } from 'react-i18next';

import '../styles/main.scss';

const talentTopics = Object.keys(faqList.en.talents).filter(topic => topic !== 'type');
const employerTopics = Object.keys(faqList.en.employers).filter(topic => topic !== 'type');

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
                      faqList.en.talents[topic].text.map((faqQn, index) => <li key={ index }>
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
                      faqList.en.employers[topic].text.map((faqQn, index) => <li key={ index }>
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
