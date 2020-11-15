import { SimpleObject } from '../interface.js';
import { METHODS } from '../modules/Api.js';
import { queryStringify } from './queryStringify.js';

export function sendDataFormatting(
  method: string,
  data?: FormData | SimpleObject
) {
  if (method === METHODS.GET && !(data instanceof FormData)) {
    if (data) {
      return queryStringify(data);
    } else {
      return null;
    }
  } else {
    if (data instanceof FormData) {
      return data;
    } else {
      return JSON.stringify(data);
    }
  }
}
