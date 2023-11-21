/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */
/**
 * Checks whether a number is greater than a given threshold.
 *
 * @param {number} value - The number to be checked.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} - True if the value is greater than the threshold, false otherwise.
 */
const isGreaterThan = function (number, threshold) {
  return number > threshold;
};
export default isGreaterThan;
