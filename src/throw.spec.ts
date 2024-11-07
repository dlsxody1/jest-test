import { customError, error, CustomError } from "./throw";

/**
 * throw를 test 할 때는 함수로 감싸줘야함.
 */
test("에러가 잘난다", () => {
  expect(() => error()).toThrow(Error);
  expect(() => customError()).toThrow(CustomError);
});

/**
 * catch의 매개변수의 err 과 new Error()의 비교이기 떄문에
 * 객체비교임!
 */
test("try catch test", () => {
  try {
    error();
  } catch (err) {
    // 더이상 에러가 아니라 객체기 때문에 toStrictEqual
    expect(err).toStrictEqual(new Error("에러"));
  }
});
