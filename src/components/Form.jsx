// @flow

import React from 'react';
import { connect } from 'react-redux';

import { storeFormData } from '../actions/formActions';
import type { FormData } from '../flowTypes/formDataType';

type Props = {
  storeFormData: Function,
};

class Form extends React.Component<Props, FormData> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  InputWithChangeHandler = props => <input {...props} onChange={this.handleInputChange} />;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.storeFormData(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="fistName">
          First name
          <this.InputWithChangeHandler type="text" name="firstName" value={this.state.firstName} />
        </label>
        <label htmlFor="lastName">
          Last name
          <this.InputWithChangeHandler type="text" name="lastName" value={this.state.lastName} />
        </label>
        <label htmlFor="email">
          Email
          <this.InputWithChangeHandler type="email" name="email" value={this.state.email} />
        </label>
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <button type="submit">Submit data 📦</button>
      </form>
    );
  }
}

export default connect(null, { storeFormData })(Form);
