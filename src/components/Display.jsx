// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { FormData } from '../flowTypes/formDataType';

function Display({ formData }: FormData) {
  return (
    <div>
      <h1>Result</h1>
      <h3>First Name: {formData.firstName}</h3>
      <h3>Last Name: {formData.lastName}</h3>
      <h3>Email: {formData.email}</h3>
    </div>
  );
}

export default connect(state => ({
  formData: state.form,
}))(Display);
