// @flow

import { STORE_FORM_DATA } from '../actions/actionTypes';
import type { FormData } from '../flowTypes/formDataType';

export default function formReducer(state: FormData = {}, action: { type: string, payload: any }) {
  switch (action.type) {
    case STORE_FORM_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
