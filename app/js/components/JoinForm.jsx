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
      { type: 'password', name: 'repeatPassword', placeholder: locales[locale].inputs.repeatPw, validate: (val, context) => val && val === context.password  },
    ];
  }

  _onValidSubmit(values) {
    this.setState({ formSubmitted: true });
    this.setState({
      isSaving: true
    });
    createTalent.perform(values).then(() => {
      window.location.href = `${$PROCESS_ENV_APP_HOST}/profile/signed-up`;
    }).catch((err) => {
      this.setState({ isSaving: false });
      this._showError(locales[locale].serverError);
    });
  }

  _onInvalidSubmit() {
    this._showError(locales[locale].submitWarning);
  }

  render() {
    const inputClass = `c-talent-landing__input`;
    return (
      <Form
        className="c-talent-landing__form"
        onValidSubmit={this._onValidSubmit.bind(this)}
        onInvalidSubmit={this._onInvalidSubmit.bind(this)}
      >
        <h3 className="text-center c-talent-landing__form-header">{locales[locale].header}</h3>
        <p className="text-center c-talent-landing__form-tagline">{locales[locale].tagline}</p>
        <div className="form-actions row">
          <div className="col-xs-6 c-talent-landing__oauth-wrapper">
            <a className="btn btn-default c-talent-landing__oauth-btn c-talent-landing__oauth-btn--linkedin" href={`${$PROCESS_ENV_APP_HOST}/users/auth/linkedin?intent=sign_up`}>
              <i className="fa fa-linkedin"></i>LinkedIn
            </a>
          </div>
          <div className="col-xs-6 c-talent-landing__oauth-wrapper">
            <a className="btn btn-default c-talent-landing__oauth-btn c-talent-landing__oauth-btn--github" href={`${$PROCESS_ENV_APP_HOST}/users/auth/github?intent=sign_up`}>
              <i className="fa fa-github"></i>GitHub
            </a>
          </div>
        </div>
        <div className="c-talent-landing__oauth-divider">oder</div>
        <div>
          {(() => {
            if (this.state.error) {
              return <Alert bsStyle="danger">{this.state.error}</Alert>;
            }
          })()}
        </div>
        {this._buildValidatedInputs(inputClass)}
        <div className="text-center">
          <small className="text-muted" dangerouslySetInnerHTML={{__html: locales[locale].disclaimer}}>
          </small>
        </div>
        <ButtonInput
          type="submit"
          className="btn btn-primary c-talent-landing__btn"
          disabled={this.state.isSaving}
        >
          {this.state.isSaving ? 'Saving ... ' : 'Jetzt registrieren'}
        </ButtonInput>

      </Form>
    );
  }
}
