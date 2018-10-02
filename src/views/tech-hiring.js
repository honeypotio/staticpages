import React from 'react';
import { I18n } from 'react-i18next';
import Layout from '../components/layout';
import TextImageWrapper from '../components/text-image-wrapper';
import TextBox from '../components/text-box';
import Testimonial from '../components/testimonial';
import access from '../../static/access.png';
import hire from '../../static/hire.png';
import visa from '../../static/visa.png';
import skills from '../../static/skills.svg';
import employer from '../../static/employer.svg';
import PaymentOptions from '../components/tech-hiring/payment-options';
import PositionOverview from '../components/tech-hiring/position-overview';
import '../styles/main.scss';

export default () => (
  <Layout>
    <TextImageWrapper
      left
      page="tech-hiring"
      topic="access"
      img={ access } />

    <TextImageWrapper
      page="tech-hiring"
      topic="hire"
      rightImage
      img={ hire } />

    <TextImageWrapper
      page="tech-hiring"
      topic="visa"
      img={ visa } />

    <Testimonial right={['flip-h']} page="tech-hiring" index="1" />

    <TextImageWrapper
      page="tech-hiring"
      topic="skills"
      sign
      rightImage
      img={ skills } />

    <PaymentOptions />

    <TextImageWrapper
      page="tech-hiring"
      img={ employer }>
      <TextBox small page="tech-hiring" topic="employer.1" />
      <TextBox small page="tech-hiring" topic="employer.2" />
      <TextBox small page="tech-hiring" topic="employer.3" />
    </TextImageWrapper>

    <PositionOverview />

    <Testimonial left={['flip-v']} right={['flip-h']} page="tech-hiring" index="2" />
  </Layout>
)
