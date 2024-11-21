/**
 * 특정한 값만 모킹
 * 주의할 점은 jest.mock은 호이스팅되기 때문에 주의해야한다.
 * 그렇기 때문에 import문 보다 더 위에 선언하는게 좋다.
 * 호이스팅 동작을 원하지 않으면 spyOn을 쓸 것.
 */
// jest.mock("./module", () => {
//   return {
//     ...jest.requireActual("./module"),
//     obj: {
//       ...jest.requireActual("./module").obj,
//       method3: jest.fn(),
//     },
//   };
// });
jest.mock("./module");
import { obj } from "./module";
jest.mock("axios");
import axios from "axios";

test("모듈을 전부 모킹", () => {
  /**
   * prop을 수정할 때 replaceProperty를 쓰자!
   */
  jest.replaceProperty(obj, "prop", "replaced");
  console.log(obj);
});

test("axios를 전부 모킹", () => {
  //   console.log(axios);
});
