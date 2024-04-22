export default function appendToEachArrayValue(array, appendString) {
  const returnArray = [];
  for (const value of array) {
    returnArray.push(appendString + value);
  }

  return returnArray;
}
