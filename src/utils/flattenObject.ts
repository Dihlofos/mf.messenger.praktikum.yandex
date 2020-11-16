export const flattenObject = function (obj: any) {
  let result: string[] = [];
  rec(obj);

  function rec(obj: Record<string, any>) {
    return Object.keys(obj).map((key) => {
      if (typeof obj[key] === 'object') {
        result.push(`[${key}]`);
        rec(obj[key]);
      } else {
        result.push(`[${key}]=${obj[key]}`);
      }
    });
  }
  return result.join('');
};
