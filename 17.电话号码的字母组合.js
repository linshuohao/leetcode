/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  let result = [];
  if (digits.length === 0) {
    return result;
  }
  const arr = digits.split("");
  result = [...map[arr[0]]]
  for (let i = 1; i < arr.length; i++) {
    const digit = arr[i];
    let next_result = [];
    const letterArr = map[digit];
    while (result.length > 0) {
      const resultItem = result.shift()
      for (let j = 0; j < letterArr.length; j++) {
        const letter = letterArr[j];
        next_result.push(resultItem + letter)
      }
    }
    result = next_result;
  }
  return result;
};
// @lc code=end
