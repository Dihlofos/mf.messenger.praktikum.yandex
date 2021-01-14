import { StringIndexed } from '../interface';
import { flattenObject } from './flattenObject';

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
