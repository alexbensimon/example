// @flow

import { STORE_FORM_DATA } from './actionTypes';
import type { FormData } from '../flowTypes/formDataType';

// eslint-disable-next-line import/prefer-default-export
export function storeFormData(data: FormData) {
  return {
    type: STORE_FORM_DATA,
    payload: data,
  };
}
