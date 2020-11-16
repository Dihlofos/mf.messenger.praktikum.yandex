import { StringIndexed } from '../interface.js';
import { flattenObject } from './flattenObject.js';

export const arrayToString = function (key: string, obj: StringIndexed[]) {
  const arr: string[] = [];
  obj.map((item, index) => {
    if (typeof item !== 'object') {
      arr.push(`${key}[${index}]=${item}`);
    } else {
      arr.push(`${key}[${index}]${flattenObject(item)}`);
    }
  });
  return arr.join('&');
};
