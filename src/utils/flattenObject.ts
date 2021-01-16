export default function flattenObject(obj: any) {
  const result: string[] = [];

  function rec(obj: Record<string, any>) {
    return Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object') {
        result.push(`[${key}]`);
        rec(obj[key]);
      } else {
        result.push(`[${key}]=${obj[key]}`);
      }
    });
  }

  rec(obj);
  return result.join('');
};
