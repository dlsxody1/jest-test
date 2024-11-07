export function timer(callback) {
  setTimeout(() => {
    callback("success");
  }, 1000);
}
