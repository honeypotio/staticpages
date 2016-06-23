import React from 'react';
import Checkbox from './Checkbox';
import FormWrapper from './FormWrapper';
import { ButtonInput } from 'react-bootstrap';
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
    this.inputs = [
      { name: 'firstName', placeholder: "First name", validate: "required" },
      { name: 'lastName', placeholder: "Last name", validate: "required" },
      { name: 'email', placeholder: "Email", validate: "required,isEmail" },
      { name: 'password', placeholder: "Password", validate: "required,isLength:8" },
      { name: 'repeatPassword', placeholder: "Repeat Password", validate: (val, context) => val && val === context.password  },
    ];
  }

  _onValidSubmit(values) {
    this.setState({ formSubmitted: true });
    if (this.state.tosAgreed) {
      this.setState({ isSaving: true });
      console.log('submitting', values);
    }
  }

  _onTosCheck(e) {
    this.setState({ tosAgreed: e.target.checked});
  }

  render() {
    const cssNamespace = 'm-auth';
    const inputClass = `${cssNamespace}__form__input ${cssNamespace}__form__input--signup`;
    const tosRequiredInfo = <div className="alert alert-danger">You must accept terms of service!</div>;
    return (
      <Form
        onValidSubmit={this._onValidSubmit.bind(this)}
      >
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
              I agree to the <a href="#" target="_blank" className="m-auth__checkbox-link">Terms of Service</a>
              &nbsp;and the <a href="#" target="_blank" className="m-auth__checkbox-link">Privacy Policy</a>
            </Checkbox>
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

  _buildValidatedInputs(inputClass) {
    return this.inputs.map((data) => {
      return (
        <ValidatedInput
          type="text"
          placeholder={data.placeholder}
          name={data.name}
          validate={data.validate}
          className={inputClass}
          key={data.name}
          disabled={this.state.isSaving}
          errorHelp={errorMessages}
        />
      );
    });
  }
}
