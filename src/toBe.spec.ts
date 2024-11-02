import { sum } from "./toBe";

test("두 수를 더한다", () => {
  expect(sum(1, 2)).toBe(3);
});
