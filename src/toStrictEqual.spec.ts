import { a, bbf, objf } from "./toStrictEqual";

test("오브젝트간의 테스트를 진행한다", () => {
  expect(a).toStrictEqual({ a: "1" });
  expect(a).not.toBe({ a: "1" });
});

test("함수가 몇번 실행했는지를 확인한다.", () => {
  const sumspy = jest.fn(bbf);
  sumspy(10);
  expect(sumspy).toHaveBeenCalledTimes(1);
});

/**
 * jest.spyOn을 통해서 함수내에 스파이함수심기
 */
test("오브젝트 안에 있는 함수가 몇번 실행했는지를 확인한다.", () => {
  jest.spyOn(objf, "minus");
  const result = objf.minus(10);
  expect(objf.minus).toHaveBeenCalledTimes(1);
  console.log(objf.minus);
  expect(objf.minus(10)).toBe(result);
});

/**
 * 스파이는 심었지만 실행은 안될 수 있게
 * 위에 함수랑 같이 실행돼서 같은 함수로 테스트 한게 되어버림..
 */
test("스파이는 심고, 리턴값을 바꾸자", () => {
  jest.spyOn(objf, "minus").mockImplementation((a) => a + 10);

  const result = objf.minus(10);
  console.log(result);

  expect(objf.minus).toHaveBeenCalledTimes(3);
  expect(result).toBe(20); // objf.minus(10)의 결과값과 비교
});

/**
 * implementonce를 통해서 각각 다른 함수를 테스트 해볼 수 있음.
 */
test("스파이는 심고, 각각 다른 함수에 대해 테스트 해보자", () => {
  jest
    .spyOn(objf, "plus")
    .mockImplementationOnce((a, b) => a + b + 10)
    .mockImplementationOnce((a, b) => a + b - 10)
    .mockImplementation((a, b) => a + b);

  const result = objf.plus(10, 20);
  const result1 = objf.plus(10, 30);
  const result2 = objf.plus(10, 40);
  console.log(result);

  expect(objf.plus).toHaveBeenCalledTimes(3);
  expect(result).toBe(40);
  expect(result1).toBe(30);
  expect(result2).toBe(50);
});

/**
 * 리턴값이 다르게 나올 수 있게.
 */
test("각자 다른 리턴값이 나올 수 있게 테스트한다.", () => {
  jest
    .spyOn(objf, "plus")
    .mockReturnValueOnce(10)
    .mockReturnValueOnce(5)
    .mockReturnValue(4);

  const result = objf.plus(5, 5);
  const result1 = objf.plus(3, 2);
  const result2 = objf.plus(1, 3);
  console.log(result);

  expect(objf.plus).toHaveBeenCalledTimes(6);
  expect(result).toBe(10);
  expect(result1).toBe(5);
  expect(result2).toBe(4);
});
