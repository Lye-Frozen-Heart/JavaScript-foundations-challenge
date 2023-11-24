import transformCollectionToString from "./transformCollectionToString.js";

let collectionNotEmpty = transformCollectionToString([
  "apple",
  "grapes",
  "strawberries",
]);
console.log(collectionNotEmpty);

let collectionEmpty = transformCollectionToString([]);
console.log(collectionEmpty);
