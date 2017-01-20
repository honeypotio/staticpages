import React from 'react';
import Checkbox from './Checkbox';
import { ButtonInput, Alert } from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import createTalent from '../utils/create-talent';
import FormBase from './FormBase';

const url = window.location.href;

export default class JoinForm extends FormBase {
  constructor(props) {
    super(props);
    this.state = {
      tosAgreed: false,
      formSubmitted: false,
      isSaving: false,
      error: false,
      tosError: false
    };
    this.inputs = [
      { type: 'text', name: 'firstName', placeholder: "First name", validate: "required" },
      { type: 'text', name: 'lastName', placeholder: "Last name", validate: "required" },
      { type: 'email', name: 'email', placeholder: "Email", validate: "required,isEmail" },
      { type: 'password', name: 'password', placeholder: "Password", validate: "required,isLength:8" },
      { type: 'password', name: 'repeatPassword', placeholder: "Repeat Password", validate: (val, context) => val && val === context.password  },
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
    this._showError('Please fill in all required fields!');
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
        <h3 className="text-center c-talent-landing__form-header">Just one profile, no job applications</h3>
        <p className="text-center c-talent-landing__form-tagline">Sign up, it only takes 5 minutes!</p>
        <div>
          {(() => {
            if (this.state.error) {
              return <Alert bsStyle="danger">{this.state.error}</Alert>;
            }
          })()}
        </div>
        {this._buildValidatedInputs(inputClass)}
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
