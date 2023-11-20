/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */
/**
 * Gets the distance between two numbers
 * @param {number} number
 * @param {number} threshold
 * @returns number || string
 */
const getDistanceFromThreshold = function (number, threshold) {
  if (number > threshold) return Math.abs(number - threshold);
  if (number < threshold) return "First number must be greater than threshold";
};

export default getDistanceFromThreshold;
