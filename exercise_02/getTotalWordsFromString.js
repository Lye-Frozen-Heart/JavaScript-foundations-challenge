/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
/**
 * Gets the total number of words in a string.
 * @param {string} sentence - The input string.
 * @returns {number} - The total number of words in the input string.
 */
function getTotalWordsFromString(sentence) {
  return sentence.split("").length;
}
export default getTotalWordsFromString;
