const substringCalculator = require("../src");

test("First example, input:  'kincenvizh' - should return 53", (done) => {
  const result = substringCalculator("kincenvizh");
  expect(result).toEqual(53);
  done();
});

test("second example, input:  'abcde' - should return 15", (done) => {
  const result = substringCalculator("abcde");
  expect(result).toEqual(15);
  done();
});

test("My name as an input:  'alexandre' - should return 43 ", (done) => {
  const result = substringCalculator("alexandre");
  expect(result).toEqual(43);
  done();
});

test("Random example, input:  'altbank' - should return 27 ", (done) => {
  const result = substringCalculator("altbank");
  console.log(result);
  expect(result).toEqual(27);
  done();
});
