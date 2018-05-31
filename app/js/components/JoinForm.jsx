import React from 'react';
import Checkbox from './Checkbox';
import { ButtonInput, Alert } from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import createTalent from '../utils/create-talent';
import FormBase from './FormBase';

const locales = {
  en: {
    header: 'Just one profile, no job applications',
    tagline: 'Sign up, it only takes 5 minutes!',
    disclaimer: `By signing up you agree to the <a href="/pages/terms_of_service#talents" target="_blank">Terms of Service</a> and the <a href="/pages/legal_notice#privacy_policy" target="_blank">Privacy Policy</a>`,
    inputs: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      password: 'Password',
      repeatPw: 'Repeat password'
    },
    or: 'or',
    join: 'Join Honeypot',
    submitWarning: 'Please fill in all required fields!',
    serverError: 'There was a problem, please try again later'
  },
  de: {
    header: 'Nur ein Profil - keine Bewerbung.',
    tagline: 'Melde dich jetzt an. Es dauert nur 5 Minuten!',
    disclaimer: `Durch deine Anmeldung akzeptierst du die <a href="/pages/terms_of_service#talents" target="_blank">AGBs</a> und die <a href="/pages/legal_notice#privacy_policy" target="_blank">Datenschutzerklärung</a>.`,
    inputs: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'Email',
      password: 'Passwort',
      repeatPw: 'Passwort wiederholen'
    },
    or: 'oder',
    join: 'Jetzt registrieren',
    submitWarning: 'Bitte fülle alle Pflichtfelder aus',
    serverError: 'Es ist ein Fehler aufgetreten. Bitter versuche es später erneut.'
  }
};

const locale = window.location.pathname.indexOf('/lp/join-de') > -1 ? 'de' : 'en';

export default class JoinForm extends FormBase {
  constructor(props) {
    super(props);
    this.locale = locale;
    this.state = {
      formSubmitted: false,
      isSaving: false,
      error: false
    };
    this.inputs = [
      { type: 'text', name: 'firstName', placeholder: locales[locale].inputs.firstName, validate: "required" },
      { type: 'text', name: 'lastName', placeholder: locales[locale].inputs.lastName, validate: "required" },
      { type: 'email', name: 'email', placeholder: locales[locale].inputs.email, validate: "required,isEmail" },
      { type: 'password', name: 'password', placeholder: locales[locale].inputs.password, validate: "required,isLength:8" },
      { type: 'password', name: 'repeatPassword', placeholder: locales[locale].inputs.repeatPw, validate: (val, context) => val && val === context.password  }
    ];
  }

  _onValidSubmit(values) {
    this.setState({ formSubmitted: true });
    if (this.state.tosAgreed) {
      this.setState({
        isSaving: true,
        tosError: false
      });
      createTalent.perform(values).then(() => {
        window.location.href = `${$PROCESS_ENV_APP_HOST}/profile/signed-up`;
      }).catch((err) => {
        this.setState({ isSaving: false });
        this._showError('There has been a problem. Please try again later.');
      });
    } else {
      this._showError('Please fill in all required fields!');
      this.setState({ tosError: true });
    }
  }

  _onInvalidSubmit() {
    this._showError(locales[locale].submitWarning);
  }

  _onTosCheck(e) {
    this.setState({ tosAgreed: e.target.checked, tosError: false });
  }

  render() {
    const inputClass = `c-talent-landing__input`;
    const tosRequiredInfo = <div className="alert alert-danger">You must accept terms of service!</div>;
    return (
      <Form
        className="c-talent-landing__form"
        onValidSubmit={this._onValidSubmit.bind(this)}
        onInvalidSubmit={this._onInvalidSubmit.bind(this)}
      >
        <h3 className="text-center c-talent-landing__form-header">{locales[locale].header}</h3>
        <p className="text-center c-talent-landing__form-tagline">{locales[locale].tagline}</p>
        <Checkbox
          label="agree"
          onCheck={this._onTosCheck.bind(this)}
          hasError={this.state.formSubmitted && !this.state.tosAgreed}
        >
          I agree to the <a href="/pages/terms_of_service#talents" target="_blank" className="m-auth__checkbox-link">Terms of Service</a>
          &nbsp;and the <a href="/pages/legal_notice#privacy_policy" target="_blank" className="m-auth__checkbox-link">Privacy Policy</a>
        </Checkbox>
        {(() => {
          if (this.state.tosError) {
            return (<p className="text-danger">This field is required.</p>)
          }
        })()}
        <div className="form-actions row">
          <div className="col-xs-6 c-talent-landing__oauth-wrapper">
            <a className={`btn btn-default c-talent-landing__oauth-btn c-talent-landing__oauth-btn--linkedin ${ (this.state.tosAgreed ? '' : 'disabled') }`} href={`${$PROCESS_ENV_APP_HOST}/users/auth/linkedin?intent=sign_up&terms_of_service=1&commit=Join%20Honeypot`}>
              <i className="fa fa-linkedin"></i>LinkedIn
            </a>
          </div>
          <div className="col-xs-6 c-talent-landing__oauth-wrapper">
            <a className={`btn btn-default c-talent-landing__oauth-btn c-talent-landing__oauth-btn--github ${ (this.state.tosAgreed ? '' : 'disabled') }`} href={`${$PROCESS_ENV_APP_HOST}/users/auth/github?intent=sign_up&terms_of_service=1&commit=Join%20Honeypot`}>
              <i className="fa fa-github"></i>GitHub
            </a>
          </div>
        </div>
        <div className="c-talent-landing__oauth-divider">{locales[locale].or}</div>
        <div>
          {(() => {
            if (this.state.error) {
              return <Alert bsStyle="danger">{this.state.error}</Alert>;
            }
          })()}
        </div>
        {this._buildValidatedInputs(inputClass)}
        <ButtonInput
          type="submit"
          className="btn btn-primary c-talent-landing__btn"
          disabled={this.state.isSaving}
        >
          {this.state.isSaving ? 'Saving ... ' : locales[locale].join}
        </ButtonInput>

      </Form>
    );
  }
}
