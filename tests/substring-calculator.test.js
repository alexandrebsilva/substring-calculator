const substringCalculator = require("../src");

test("First example, input:  'kincenvizh' - should return 53", (done) => {
  const result = substringCalculator("kincenvizh");
  expect(result).toEqual(53);
  done();
});
