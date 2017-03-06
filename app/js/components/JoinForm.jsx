import React from 'react';
import Checkbox from './Checkbox';
import { ButtonInput, Alert } from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import createTalent from '../utils/create-talent';
import FormBase from './FormBase';

export default class JoinForm extends FormBase {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      isSaving: false,
      error: false
    };
    this.inputs = [
      { type: 'text', name: 'firstName', placeholder: "First name", validate: "required" },
      { type: 'text', name: 'lastName', placeholder: "Last name", validate: "required" },
      { type: 'email', name: 'email', placeholder: "Email", validate: "required,isEmail" },
      { type: 'password', name: 'password', placeholder: "Password", validate: "required,isLength:8" },
      { type: 'password', name: 'repeatPassword', placeholder: "Repeat password", validate: (val, context) => val && val === context.password  },
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
      this._showError('There has been a problem. Please try again later.');
    });
  }

  _onInvalidSubmit() {
    this._showError('Please fill in all required fields!');
  }

  render() {
    const inputClass = `c-talent-landing__input`;
    return (
      <Form
        className="c-talent-landing__form"
        onValidSubmit={this._onValidSubmit.bind(this)}
        onInvalidSubmit={this._onInvalidSubmit.bind(this)}
      >
        <h3 className="text-center c-talent-landing__form-header">Just one profile, no job applications</h3>
        <p className="text-center c-talent-landing__form-tagline">Sign up, it only takes 5 minutes!</p>
        <div className="form-actions row">
          <div className="col-xs-6 c-talent-landing__oauth-wrapper">
            <a className="btn btn-default c-talent-landing__oauth-btn c-talent-landing__oauth-btn--linkedin" href={`${$PROCESS_ENV_APP_HOST}/users/auth/linkedin?intent=login`}>
              <i className="fa fa-linkedin"></i>LinkedIn
            </a>
          </div>
          <div className="col-xs-6 c-talent-landing__oauth-wrapper">
            <a className="btn btn-default c-talent-landing__oauth-btn c-talent-landing__oauth-btn--github" href={`${$PROCESS_ENV_APP_HOST}/users/auth/github?intent=login`}>
              <i className="fa fa-github"></i>GitHub
            </a>
          </div>
        </div>
        <div className="c-talent-landing__oauth-divider">or</div>
        <div>
          {(() => {
            if (this.state.error) {
              return <Alert bsStyle="danger">{this.state.error}</Alert>;
            }
          })()}
        </div>
        {this._buildValidatedInputs(inputClass)}
        <div className="text-center">
          <small className="text-muted">
            By signing up you agree to the <a href="/pages/terms_of_service#talents" target="_blank">Terms of Service</a> and the <a href="/pages/legal_notice#privacy_policy" target="_blank">Privacy Policy</a>
          </small>
        </div>
        <ButtonInput
          type="submit"
          className="btn btn-primary c-talent-landing__btn"
          disabled={this.state.isSaving}
        >
          {this.state.isSaving ? 'Saving ... ' : 'Join Honeypot'}
        </ButtonInput>

      </Form>
    );
  }
}
