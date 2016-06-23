import React from 'react';
import PanelSwitcher from './PanelSwitcher';
import Checkbox from './Checkbox';
import { FormGroup, ButtonInput, FormControl } from 'react-bootstrap'
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import errorMessages from '../utils/error-messages';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tosAgreed: false,
      formSubmitted: false,
      isSaving: false
    };
  }

  _handleValidSubmit(values) {
    this.setState({ formSubmitted: true });
    if (this.state.tosAgreed) {
      this.setState({ isSaving: true });
      console.log('submitting', values);
    }
  }

  _handleCheckboxChecked(e) {
    this.setState({ tosAgreed: e.target.checked});
  }

  render() {
    const cssNamespace = 'm-auth';
    const inputClass = `${cssNamespace}__form__input ${cssNamespace}__form__input--signup`;
    const tosRequiredInfo = <div className="alert alert-danger">You must accept terms of service!</div>;
    return (
      <Form
        onValidSubmit={this._handleValidSubmit.bind(this)}
      >
        <div className="m-auth__form">
          <div className="m-auth__heading">Join Honeypot</div>
          <PanelSwitcher activePane="talent" />
          <div className="panel panel-default o-page-island m-auth__panel m-auth__panel--switcher">
            <div className="panel-body m-auth__panel__body">
              <div className="form-inputs">
                <ValidatedInput
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  validate="required"
                  errorHelp={errorMessages}
                  className={inputClass}
                  disabled={this.state.isSaving}
                />
                <ValidatedInput
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  validate="required"
                  errorHelp={errorMessages}
                  className={inputClass}
                  disabled={this.state.isSaving}
                />
                <ValidatedInput
                  type="text"
                  placeholder="Email"
                  name="email"
                  validate="required,isEmail"
                  errorHelp={errorMessages}
                  className={inputClass}
                  disabled={this.state.isSaving}
                />
                <ValidatedInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  validate="required,isLength:8"
                  errorHelp={errorMessages}
                  className={inputClass}
                  disabled={this.state.isSaving}
                />
                <ValidatedInput
                  type="password"
                  placeholder="Repeat Password"
                  name="repeatPassword"
                  validate={(val, context) => val && val === context.password }
                  errorHelp="Passwords do not match"
                  className={inputClass}
                  disabled={this.state.isSaving}
                />
                <Checkbox
                  label="agree"
                  onCheck={this._handleCheckboxChecked.bind(this)}
                  hasError={this.state.formSubmitted && !this.state.tosAgreed}
                >
                  I agree to the <a href="#" target="_blank" className="m-auth__checkbox-link">Terms of Service</a>
                  &nbsp;and the <a href="#" target="_blank" className="m-auth__checkbox-link">Privacy Policy</a>
                </Checkbox>
              </div>
            </div>
            <div className="panel-footer c-sign-up-form__footer">
              <ButtonInput
                type="submit"
                className="btn btn-primary btn-blue btn-block c-sign-up-form__submit-btn"
                disabled={this.state.isSaving}
              >
                {this.state.isSaving ? 'Saving ... ' : 'Sign up'}
              </ButtonInput>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}
