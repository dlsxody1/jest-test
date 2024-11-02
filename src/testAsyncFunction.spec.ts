import { noAsync, noPromise, okAsync, okPromise } from "./testAsyncFunction";

/**
 * promise를 test 할 때는 꼭 return 을 해줄것!
 * then을 붙여도 마찬가지!
 */
test("no Promise 테스트 ", () => {
  const okSpy = jest.fn(okPromise);
  return expect(okSpy()).resolves.toBe("ok");
});
