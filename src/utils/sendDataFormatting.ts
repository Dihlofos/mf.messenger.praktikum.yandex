import { SimpleObject } from '../interface';
import { METHODS } from '../modules/HTTPTransport';
import { queryStringify } from './index';

export default function sendDataFormatting(
  method: string,
  data?: FormData | SimpleObject,
) {
  if (method === METHODS.GET && !(data instanceof FormData)) {
    if (data) {
      return queryStringify(data);
    }
    return null;
  }
  if (data instanceof FormData) {
    return data;
  }
  return JSON.stringify(data);
}
