import { first, second, third } from "./order";

test("first->second->third", () => {
  const spy1 = jest.fn(first);
  const spy2 = jest.fn(second);
  const spy3 = jest.fn(third);
  (spy1 as any)(1, 2, 3);
  spy2();
  (spy1 as any)("hello");
  spy3();
  spy1();
  /**
   * mocks 객체 안에 있는 프로퍼티들
   * calls: 모든 호출의 인자들을 배열로 저장
   * [ [1, 2, 3], ['hello'], [] ] - spy1이 세 번 호출되었고:
   * 첫 번째 호출: (1, 2, 3) 인자로 전달
   * 두 번째 호출: 'hello' 인자로 전달
   * 세 번째 호출: 인자 없음
   * contexts: 각 호출에서의 this 컨텍스트 모두 undefined인 것은 일반 함수로 호출되었다는 의미
   * instances: new 키워드로 생성된 인스턴스들 생성자로 사용되었다면 생성된 객체가 저장됨
   * invocationCallOrder: 호출 순서를 나타내는 번호
   * [1, 3, 5] - spy1이 첫 번째, 세 번째, 다섯 번째로 호출되었음을 의미 전체 테스트에서 모든 스파이의 호출 순서를 추적
   * results: 각 호출의 반환 값과 타입 : { type: 'return', value: undefined } - 모든 호출이 undefined를 반환
   * 다른 가능한 타입들: 'throw'(예외 발생), 'return'(값 반환)
   *
   * toHaveBeenCalledWith 와 같은 메소드들은 mocks 객체 안에 있는 프로퍼티의 값을 나타낸다.
   **/

  console.log(spy1.mock);
  expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(
    spy2.mock.invocationCallOrder[0]
  );
  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(
    spy2.mock.invocationCallOrder[0]
  );
});

test("first->second->third 2", () => {
  const spy1 = jest.fn(first);
  const spy2 = jest.fn(second);
  const spy3 = jest.fn(third);
  (spy1 as any)(1, 2, 3);
  spy2();
  (spy1 as any)("hello");
  spy3();
  spy1();
  // spy1이 spy2보다 먼저 호출되었는지 확인

  expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(
    spy2.mock.invocationCallOrder[0]
  );

  // spy3가 spy2보다 나중에 호출되었는지 확인
  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(
    spy2.mock.invocationCallOrder[0]
  );
  expect(spy1).toHaveBeenCalledBefore(spy2);
  expect(spy3).toHaveBeenCalledAfter(spy2);
});

test("인수의 일부 테스트", () => {
  const fn = jest.fn();
  fn({
    a: {
      b: {
        c: "hello",
      },
      d: "bye",
    },
    e: ["f"],
  });
  expect(fn.mock.calls[0][0].a.b.c).toBe("hello");
});
