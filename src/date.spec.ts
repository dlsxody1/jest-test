import { after3days } from "./date";

test("3일 후를 리턴한다", () => {
  /**
   * 이거는 안됨 왜냐면 마이크로 세컨즈 단위로 시간이 달리지기 떄문에
   * getDate랑 after3Day가 각각 다른 시간이 할당됨.
   * 자바스크립트도 '실행시간'이 있기 때문임.
   */
  // const date = new Date();
  // date.setDate(date.getDate() + 3);
  // expect(after3days()).toBe(date)
  jest.useFakeTimers().setSystemTime(new Date(2024, 3, 9));
  console.log(new Date());
  expect(after3days()).toStrictEqual(new Date(2024, 3, 12));
});

test("0.1+0.2는 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

/**
 * useFakeTimers로 시간이 정해지기 때문에
 * useRealTimers로 초기화 해줘야한다.
 */

afterEach(() => {
  jest.useRealTimers();
});
