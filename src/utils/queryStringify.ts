import { StringIndexed } from '../interface';
import { arrayToString, flattenObject } from './index';

export default function queryStringify(data: StringIndexed): string | never {
  if (Object.keys(data).length === 0) {
    return '';
  }

  if (typeof data !== 'object') throw new Error('Это не объект!');
  const result = Object.entries(data).map(([key, value]) => {
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        return arrayToString(key, value);
      }
      return `${key}${flattenObject(value)}`;
    }
    return `${key}=${value}`;
  });

  return result.join('&');
}
