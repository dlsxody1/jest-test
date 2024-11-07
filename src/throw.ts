export function error() {
  throw new Error("에러");
}

export class CustomError extends Error {}

export function customError() {
  throw new CustomError("커스텀에러");
}
