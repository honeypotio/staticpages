import React from 'react';
import { I18n } from 'react-i18next';
import Layout from '../components/layout';
import Wrapper from '../components/wrapper';
import idealRole from '../assets/illustration-idealrole.png';
import illustrationProcess from '../assets/illustration-process.svg';
import techStack from '../assets/illustration-stack.svg';
import location from '../assets/illustration-location.svg';
import support from '../assets/worth-pic.svg';
import worth from '../assets/illustration-worth.svg';
import TextBox from '../components/text-box';
import TextImageWrapper from '../components/text-image-wrapper';
import signUp from '../assets/illustration-sign-up.svg';
import SignUp from '../components/index/sign-up';
import Testimonial from '../components/testimonial';
import Newsletter from '../components/newsletter';
import TestimonialGroup from '../components/testimonial-group';

import '../styles/main.scss';

export default () => (
  <Layout>
    <TextImageWrapper
      page="index"
      topic="join"
      img={ idealRole }
      sign />

    <TextImageWrapper img={ signUp } rightImage >
      <SignUp /> 
    </TextImageWrapper>

    <TextImageWrapper
      page="index"
      topic="stack"
      img={ techStack }
      sign />

    <Testimonial left page="index" index="1" />

    <TextImageWrapper
      page="index"
      topic="location"
      img={ location }
      sign
      rightImage />

    <TestimonialGroup page="index" indexes={ [2, 3, 4] } />

    <TextImageWrapper
      page="index"
      topic="support"
      img={ support }
      sign />

    <Testimonial left right={['rotate']} page="index" index="5" />

    <TextImageWrapper
      page="index"
      topic="worth"
      img={ worth }
      sign
      rightImage />

    <Newsletter />
  </Layout>
)
