import getTotalWordsFromString from "./getTotalWordsFromString.js";

console.log(`Your total words are: ${getTotalWordsFromString("Hello World!")}`);

console.log(`Your total words are: ${getTotalWordsFromString("Are you mad?")}`);

console.log(`Your total words are: ${getTotalWordsFromString("0000000")}`);

console.log(`Your total words are: ${getTotalWordsFromString("!,..34@?")}`);

console.log(
  `Your total words are: ${getTotalWordsFromString(
    "This is a sample sentence, where it does not apply to letters and numbers for example: 1",
  )}`,
);
