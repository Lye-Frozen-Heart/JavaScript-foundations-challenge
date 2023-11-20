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
  /**Split the sentence with spaces ignoring special chars and
   * numbers. .filter returns the array of those specified words then
   * we return the length of those words so it outputs the count
   */
  //This code is too hard to read
  let words = sentence.split(/[^\p{L}]+/u);
  let filteredWords = words.filter((word) => word.length > 0);
  return filteredWords.length;
}
export default getTotalWordsFromString;
