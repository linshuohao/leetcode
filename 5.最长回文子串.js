/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.94%)
 * Likes:    893
 * Dislikes: 0
 * Total Accepted:    61.5K
 * Total Submissions: 243.9K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */
// /**
//  * 暴力破解(超时)
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   /**
//    * 判断是否是回文字符串
//    * @param {string} s
//    * @return {boolean}
//    */
//   function isPalindromic(s) {
//     const len = s.length;
//     for (let i = 0; i < len / 2; i++) {
//       if (s.charAt(i) !== s.charAt(len - i - 1)) {
//         return false;
//       }
//     }
//     return true;
//   }
//   let ans = "";
//   let max = 0;
//   let len = s.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j <= len; j++) {
//       const test = s.substring(i, j);
//       if (isPalindromic(test) && test.length > max) {
//         ans = test;
//         max = ans.length;
//       }
//     }
//   }
//   return ans;
// };
// /**
//  * 最长公共子串
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// function lcs(s1, s2) {
//   const len1 = s1.length;
//   const len2 = s2.length;
//   let maxlen = 0;
//   let index = 0;
//   const dp = [];
//   for (let i = 0; i < len1; i++) {
//     dp[i] = [];
//     for (let j = 0; j < len2; j++) {
//       if (s1[i] === s2[j]) {
//         if (i === 0 || j === 0) {
//           dp[i][j] = 1;
//         } else {
//           dp[i][j] = dp[i - 1][j - 1] + 1;
//         }
//       } else {
//         dp[i][j] = 0;
//       }
//       if (dp[i][j] > maxlen) {
//         maxlen = dp[i][j];
//         index = i;
//       }
//     }
//   }
//   return s1.substring(index, index + maxlen + 1);
// }

// /**
//  * 最长公共子串
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   const length = s.length;
//   const reverse = s
//     .split("")
//     .reverse()
//     .join("");
//   let maxLen = 0;
//   let index = 0;
//   const arr = [];
//   for (let i = 0; i < length; i++) {
//     for (let j = length - 1; j >= 0; j--) {
//       if (s[i] === reverse[j]) {
//         if (i === 0 || j === 0) {
//           arr[j] = 1;
//         } else {
//           arr[j] = arr[j - 1] + 1;
//         }
//       } else {
//         arr[j] = 0;
//       }
//       if (arr[j] > maxLen) {
//         let beforeRev = length - 1 - j;
//         if (beforeRev + arr[j] - 1 === i) {
//           maxLen = arr[j];
//           index = i;
//         }
//       }
//     }
//   }
//   return s.substring(index - maxLen + 1, index + 1);
// };
// /**
//  * 动态规划
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   let length = s.length;
//   let p = [];
//   for (let i = 0; i < length; i++) {
//     p[i] = [];
//   }
//   let ans = "";
//   for (let len = 1; len <= length; len++) {
//     for (let start = 0; start <= length - len; start++) {
//       const end = start + len - 1;
//       if (len === 1 || len === 2) {
//         p[start][end] = s[start] === s[end];
//       } else {
//         p[start][end] = p[start + 1][end - 1] && s[start] === s[end];
//       }
//       if (p[start][end] && len > 0) {
//         ans = s.substring(start, end + 1);
//       }
//     }
//   }
//   return ans;
// };
// /**
//  * 中心扩展算法
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   let expandAroundCenter = (s, left, right) => {
//     const length = s.length;
//     let l = left;
//     let r = right;
//     while (l >= 0 && r < length && s[l] === s[r]) {
//       l--;
//       r++;
//     }
//     return r - l - 1;
//   };
//   let length = s.length;
//   let start = 0;
//   let end = 0;
//   for (let i = 0; i < length; i++) {
//     const len1 = expandAroundCenter(s, i, i);
//     const len2 = expandAroundCenter(s, i, i + 1);
//     const len = Math.max(len1, len2);
//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2);
//       end = i + len / 2
//     }
//   }
//   return s.substring(start, end + 1)
// };

/**
 * Manacher 算法
 * https://blog.crimx.com/2017/07/06/manachers-algorithm/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 预处理
  let arr = [NaN, "#", ...s.split('').join("#").split(''), "#", NaN];
  // 长度数组
  let lens = [];
  // 最大中心位置
  let iCenterMax = 1;
  // 最右中心对应的中心
  let iCenter = 0;
  // 最右中心
  let iRight = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr.length - 1 - i <= lens[iCenterMax]) {
      break;
    }

    lens[i] = 0;

    // i小于最右中心，寻找镜像中心
    if (i < iRight) {
      const iMiiror = 2 * iCenter - i;
      // 左越界iRight - i，否则取镜像中心长度
      lens[i] = Math.min(iRight - i, lens[iMiiror]);
    }

    // 右贴界，中心扩散
    while (arr[i + lens[i] + 1] === arr[i - lens[i] - 1]) {
      lens[i] += 1;
    }

    // 如果当前点的最大回文右边界，将最右中心换为当前右边界，最右中心对应的中心为当前中心
    if (i + lens[i] > iRight) {
      iCenter = i;
      iRight = i + lens[i];
    }

    if (lens[i] > lens[iCenterMax]) {
      iCenterMax = i;
    }
  }
  return arr
    .slice(iCenterMax - lens[iCenterMax], iCenterMax + lens[iCenterMax] + 1)
    .filter(item => item !== "#")
    .join("");
};
