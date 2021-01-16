import { StringIndexed } from '../interface';
import { flattenObject } from './index';

export default function arrayToString(key: string, obj: StringIndexed[]) {
  const arr: string[] = [];
  obj.forEach((item, index) => {
    if (typeof item !== 'object') {
      arr.push(`${key}[${index}]=${item}`);
    } else {
      arr.push(`${key}[${index}]${flattenObject(item)}`);
    }
  });
  return arr.join('&');
};
