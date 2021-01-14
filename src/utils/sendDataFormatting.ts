import { SimpleObject } from '../interface';
import { METHODS } from '../modules/Api';
import { queryStringify } from './queryStringify';

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
