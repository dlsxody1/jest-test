import { firstTest, secondTest } from "./lifecycle";

describe("테스트 그룹", () => {
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, "log");
    console.log("1. 모든 테스트 시작 전 한번만 실행");
  });

  beforeEach(() => {
    consoleSpy.mockClear();
    console.log("2. 각각의 테스트 시작 전마다 실행");
  });

  test("첫번째 테스트", () => {
    firstTest();
    expect(consoleSpy).toHaveBeenCalledWith("1");
  });

  test("두번째 테스트", () => {
    secondTest();
    expect(consoleSpy).toHaveBeenCalledWith("2");
  });

  afterEach(() => {
    console.log("4. 각각의 테스트 완료 후마다 실행");
  });

  afterAll(() => {
    console.log("5. 모든 테스트 완료 후 한번만 실행");
    consoleSpy.mockRestore();
  });
});
