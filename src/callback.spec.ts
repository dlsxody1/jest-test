import { timer } from "./callback";

/**
 * done 매개변수 추가를 통해서 비동기함수를 테스트한다.
 * 함수를 종료시킨다.
 */

test("타이머 체크", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
});
