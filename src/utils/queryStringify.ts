import { StringIndexed } from '../interface';
import { arrayToString } from './arrayToString';
import { flattenObject } from './flattenObject';

export function queryStringify(data: StringIndexed): string | never {
  if (Object.keys(data).length === 0) {
    return '';
  }

  if (typeof data !== 'object') throw new Error('Это не объект!');
  let result = Object.entries(data).map(([key, value]) => {
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
