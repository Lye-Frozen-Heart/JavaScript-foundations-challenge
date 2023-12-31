/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
/**
 * Generates a rounded random number within the specified range.
 * @param {number} limit - The upper limit for the random number.
 * @returns {number} - A rounded random number within the range [0, limit).
 */
function generateRandomNumberInRange(limit) {
  // return Math.round(Math.random()*limit)
  let randomNumber = Math.round(Math.random() * limit);
  return randomNumber;
}
export default generateRandomNumberInRange;
