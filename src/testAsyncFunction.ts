export function noPromise() {
  return Promise.reject("no");
}

export function okPromise() {
  return Promise.resolve("ok");
}

export async function noAsync() {
  return "no";
}

export async function okAsync() {
  return "ok";
}
