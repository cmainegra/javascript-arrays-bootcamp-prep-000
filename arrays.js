var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(myArray, element) {
  var newArray = [element, ...myArray]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(myArray, element) {
  myArray.unshift(element);
  return myArray
}
function addElementToEndOfArray(myArray, element) {
  var newArray = [...myArray, element]
  return newArray
}
function destructivelyAddElementToEndOfArray(myArray, element) {
 myArray.push(element)
 return myArray
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
  return array
}