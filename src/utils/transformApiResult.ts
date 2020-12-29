export function transformApiResult(res: string){
  let result;
  try {
    result = JSON.parse(res);
  } catch(e) {
    result = res;
  }
  return result;
}
