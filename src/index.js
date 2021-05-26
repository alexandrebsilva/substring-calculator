module.exports = function substringCalculator(s) {
  let combinationsWithString = [];

  function getCombinations(string) {
    let maxLength = string.length;

    for (let idx = 0; idx < string.length; idx++) {
      combinationsWithString.push(string.slice(0, maxLength));

      maxLength--;
    }
  }

  for (let idx = 0; idx < s.length; idx++) {
    const string = s.slice(idx, s.length);

    getCombinations(string);
  }

  const result = [...new Set(combinationsWithString)];

  return result.length;
};
