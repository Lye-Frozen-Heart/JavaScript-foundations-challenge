import getTotalWordsFromString from "../exercise_02/getTotalWordsFromString.js";
import isGreaterThan from "../exercise_04/isGreaterThan.js";
/**
 * Write JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */
/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */
/**
 * Outputs the given string to Uppercase if its length is greater than 5
 * otherwise it converts the sentence to Lowercase.
 * @param {string} sentence - The input string.
 * @returns {string} - The converted string.
 */
const formatStringByWordsLength = function (sentence) {
  return isGreaterThan(getTotalWordsFromString(sentence), 5)
    ? sentence.toUpperCase()
    : sentence.toLowerCase();
};
export default formatStringByWordsLength;
