import React from "react";
import './UserForm.css';

class UserForm extends React.Component {
  constructor() {
    super()

    this.state = {
      bankName : '',
      iban : '',
      bankNamePlaceholder : 'Please enter your Bank\'s name',
      bankNameErrorMsg : 'Your Bank Name is incorrect or incomplete',
      ibanErrorMsg : 'Your IBAN is incorrect or incomplete',
      bankErrorClass : 'invisible',
      ibanErrorClass : 'invisible'
    }

    this.handleBankInputChange = this.handleBankInputChange.bind(this);
    this.handleIbanInputChange = this.handleIbanInputChange.bind(this);
    this.handleBankNameValidation = this.handleBankNameValidation.bind(this);
    this.handleIbanValidation = this.handleIbanValidation.bind(this);
  }

  handleBankInputChange(evt) {
      this.setState({
        bankName : evt.target.value
      });
  }

  handleIbanInputChange(evt) {
      this.setState({
        iban : evt.target.value
      });
  }

  handleBankNameValidation() {
      let bankName = this.state.bankName;
      if (bankName === '' ) {
        this.setState({
          bankErrorClass : 'error visible'
        });
      } else {
        this.setState({
          bankErrorClass : 'invisible'
        });
      }
  }

  handleIbanValidation() {
    let iban = this.state.iban;
    // Allow numbers only
    if (!(/^\d+$/.test(iban)) || (iban === '')) {
      this.setState({
        ibanErrorClass : 'error visible'
      });
    } else {
      this.setState({
        ibanErrorClass : 'invisible'
      });
    }

  }

  handleFormSubmission(e) {
    console.log('Handling Form Submission');
    e.preventDefault();
    this.handleBankNameValidation();
    this.handleIbanValidation();
  }

  render() {
    return (
        <form onSubmit={this.handleFormSubmission.bind(this)}>
            <label>
              Bank Name:
              <input
                value={this.state.bankName}
                name="bankName"
                required
                className="bankName"
                type="text"
                placeholder="Please enter your bank's name"
                onChange={this.handleBankInputChange}
                onBlur={this.handleBankNameValidation}
              />
              <span className={this.state.bankErrorClass}>
                {this.state.bankNameErrorMsg}
              </span>
            </label>
            <label>
              IBAN:
              <input
                value={this.state.iban}
                name="iban"
                required
                className="iban"
                type="number"
                placeholder="Please enter your bank's IBAN number"
                onChange={this.handleIbanInputChange}
                onBlur={this.handleIbanValidation}
              />
            </label>
            <span className={this.state.ibanErrorClass}>
              {this.state.ibanErrorMsg}
            </span>
            <button type="submit" >
                Submit
            </button>
        </form>)
  }
}

export default UserForm;
