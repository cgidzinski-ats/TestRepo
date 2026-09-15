const { startService } = require("./service.js");

test("startService logs without throwing", () => {
  expect(() => startService()).not.toThrow();
});
