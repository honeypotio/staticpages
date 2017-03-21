import React from 'react';
import { ValidatedInput } from 'react-bootstrap-validation';
import errorMessages from '../utils/error-messages';

export default class FormBase extends React.Component {

  constructor(props) {
    super(props);
    this.locale = 'en';
  }

  _buildValidatedInputs(inputClass) {
    return this.inputs.map((data) => {
      return (
        <ValidatedInput
          type={data.type}
          placeholder={data.placeholder}
          value={data.value}
          name={data.name}
          validate={data.validate}
          className={inputClass}
          key={data.name}
          disabled={this.state.isSaving}
          errorHelp={errorMessages[this.locale]}
          validationEvent="onBlur"
        />
      );
    });
  }

  _showError(errorMessage) {
    this.setState({ error: errorMessage });
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    setTimeout(() => {
      this.setState({ error: false });
    }, 5000);
  }
}
