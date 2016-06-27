import React from 'react';
import { ButtonInput } from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import FormWrapper from './FormWrapper';
import Checkbox from './Checkbox';
import errorMessages from '../utils/error-messages';
import createInvite from '../utils/create-invite';
import FormBase from './FormBase';
import FlashMessages from '../utils/flash-messages';

export default class InviteRequestForm extends FormBase {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      error: false
    };
    this.inputs = [
      { type: 'text', name: 'companyName', placeholder: "Company name", validate: "required" },
      { type: 'text', name: 'hiringLocation', placeholder: "Hiring location", validate: "required" },
      { type: 'text', name: 'numberOfEmployees', placeholder: "Number of employees", validate: "required" },
      { type: 'text', name: 'contactPerson', placeholder: "Contact person", validate: "required" },
      { type: 'email', name: 'contactEmail', placeholder: "Contact email", validate: "required,isEmail" },
      { type: 'text', name: 'phoneNumber', placeholder: "Phone number (optional)", validate: null },
    ];
  }

  _handleValidSubmit(values) {
    this.setState({ isSaving: true });
    createInvite.perform(values).then(() => {
      FlashMessages.setMessage('You have been added to the waiting list.');
      window.location.href = '/';
    }).catch((err) => {
      this.setState({ isSaving: false });
      this._showError('There has been a problem. Please try again');
    });
  }

  render() {
    const cssNamespace = 'm-auth';
    const inputClass = `${cssNamespace}__form__input ${cssNamespace}__form__input--signup`;
    return (
      <Form
        onValidSubmit={this._handleValidSubmit.bind(this)}
      >
        <FormWrapper activePane="employer">
          <div className="panel-body m-auth__panel__body">
            <div className="form-inputs">
              {this._buildValidatedInputs(inputClass)}
            </div>
          </div>
          <div className="panel-footer c-sign-up-form__footer">
            <div className="m-auth__secondary-text">
              By requesting an invite you agree to the <a href="/pages/terms_of_service#companies" target="_blank" className="m-auth__checkbox-link">Terms of Service</a>
              and the <a href="/pages/legal_notice#privacy_policy" target="_blank" className="m-auth__checkbox-link">Privacy Policy</a>
            </div>
            <ButtonInput
              type="submit"
              className="btn btn-primary btn-blue btn-block c-sign-up-form__submit-btn"
              disabled={this.state.isSaving}
            >
              {this.state.isSaving ? 'Saving ...' : 'Request Invite'}
            </ButtonInput>
          </div>
        </FormWrapper>
      </Form>
    );
  }
}
