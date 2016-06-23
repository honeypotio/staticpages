import React from 'react';
import { ButtonInput } from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import FormWrapper from './FormWrapper';
import Checkbox from './Checkbox';
import errorMessages from '../utils/error-messages';

const { Component } = React;

export default class InviteRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false
    };
    this.inputs = [
      { name: 'companyName', placeholder: "Company name", validate: "required" },
      { name: 'hiringLocation', placeholder: "Hiring location", validate: "required" },
      { name: 'numberOfEmployees', placeholder: "Number of employees", validate: "required" },
      { name: 'contactPerson', placeholder: "Contact person", validate: "required" },
      { name: 'contactEmail', placeholder: "Contact email", validate: "required,isEmail" },
      { name: 'phoneNumber', placeholder: "Phone number (optional)", validate: null },
    ];
  }

  _handleValidSubmit(values) {
    this.setState({ isSaving: true });
  }

  render() {
    const cssNamespace = 'm-auth';
    const inputClass = `${cssNamespace}__form__input ${cssNamespace}__form__input--signup`;
    const btnText = (
          <span>
            <i className="fa fa-spin fa-circle-notch-o"></i>Saving ...
          </span>
    );
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
