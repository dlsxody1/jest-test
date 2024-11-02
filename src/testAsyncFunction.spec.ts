/**
 * namespace 사용방법
 */
import * as fns from "./testAsyncFunction";

/**
 * promise를 test 할 때는 꼭 return 을 해줄것!
 * then을 붙여도 마찬가지!
 */
test("ok Promise 테스트 ", () => {
  const okSpy = jest.fn(fns.okPromise);
  return expect(okSpy()).resolves.toBe("ok");
});

test("no Promise 테스트 ", () => {
  const noSpy = jest.fn(fns.noPromise);
  return expect(noSpy()).rejects.toBe("no");
});

/**
 * async 붙이면 return 안해줘도 됨!
 */
test("ok Promise 테스트2 ", async () => {
  const okSpy = jest.fn(fns.okPromise);
  const result = await okSpy();
  expect(okSpy()).resolves.toBe("ok");
});

test("ok Promise 테스트 ", () => {
  //같은 문법임!

  //    jest.spyOn(fns,'okPromise').mockReturnValue(Promise.resolve('ok'))
  jest.spyOn(fns, "okPromise").mockResolvedValue("ok");
});
