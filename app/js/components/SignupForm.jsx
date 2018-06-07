import React from 'react';
import Checkbox from './Checkbox';
import FormWrapper from './FormWrapper';
import { ButtonInput, Alert } from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import createTalent from '../utils/create-talent';
import FormBase from './FormBase';

const url = window.location.href;
const queryParams = url.indexOf('?') !== -1 ? decodeURIComponent(url.split('?')[1].replace('email=', '')) : null;

export default class SignupForm extends FormBase {
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
      { type: 'email', name: 'email', value: queryParams, placeholder: "Email", validate: "required,isEmail" },
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
    const cssNamespace = 'm-auth';
    const inputClass = `${cssNamespace}__form__input ${cssNamespace}__form__input--signup`;
    const tosRequiredInfo = <div className="alert alert-danger">You must accept terms of service!</div>;
    return (
      <Form
        onValidSubmit={this._onValidSubmit.bind(this)}
        onInvalidSubmit={this._onInvalidSubmit.bind(this)}
      >
        <div className="c-sign-up-form__alert">
          {(() => {
            if (this.state.error) {
              return <Alert bsStyle="danger">{this.state.error}</Alert>;
            }
          })()}
        </div>
        <FormWrapper activePane="talent">
          <div className="panel-body m-auth__panel__body">
            <div className="form-inputs">
              {this._buildValidatedInputs(inputClass)}
            </div>
          </div>
          <div className="panel-footer c-sign-up-form__footer">
            <Checkbox
              label="agree"
              onCheck={this._onTosCheck.bind(this)}
              hasError={this.state.formSubmitted && !this.state.tosAgreed}
            >
              I agree to the <a href="/pages/terms_of_service#talents" target="_blank" className="m-auth__checkbox-link">Terms of Service</a>
              &nbsp;and the <a href="/pages/privacy" target="_blank" className="m-auth__checkbox-link">Privacy Policy</a>
            </Checkbox>
            {(() => {
              if (this.state.tosError) {
                return <p className="text-danger">This field is required.</p>
              }
            })()}
            <ButtonInput
              type="submit"
              className="btn btn-primary btn-blue btn-block c-sign-up-form__submit-btn"
              disabled={this.state.isSaving}
            >
              {this.state.isSaving ? 'Saving ... ' : 'Sign up'}
            </ButtonInput>
          </div>
        </FormWrapper>
      </Form>
    );
  }
}
