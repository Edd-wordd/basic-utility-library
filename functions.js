// Stand in line

function standInLine(arr, num1) {
   var line = [1, 2, 3, 4, 5, 6];
   arr.push(num1);
   var upNext = line.shift();

   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return upNext;
}

// Shopping List
function shoppingList(input1, num1) {
   var myList = [];
   myList.push(input1, num1);
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return myList;
}

// Manipulate Arrays With unshift()/ unshift() adds values to the beginning of the array
function arrayWithUnshift(input1) {
   var array100 = ["apple", "orange", "pear"];
   array100.unshift(input1);
   // Return: a single JavaScript value
   return array100;
}

// Manipulate Arrays With shift()/ shift() removes the first value of an array
function arrayWithShift() {
   var array1 = ["apple", "orange", "pear"];
   var firstGone = array1.shift();
   // Return: a single JavaScript value
   return firstGone;
}

// Manipulate Arrays With pop()/ pop() removes the last value of the array
function arrayWithPop() {
   var array1 = ["apple", "orange", "pear"];
   var lastGone = array1.pop();
   // Return: a single JavaScript value
   return lastGone;
}

// Manipulate Arrays With push()/ push() adds a value to the end of the array
function arrayWithPush(input1) {
   var array1 = ["apple"];
   array1.push(input1);
   // parameter 1: any JavaScript value
   // Return: a single JavaScript value
   return array1;
}

// Use Bracket Notation to Find the Nth-to-Last Character in a String
function secondToLastCharacter(input1) {
   var almostLast = input1[input1.length - 2];
   // parameter 1: any JavaScript value
   // Return: a single JavaScript value
   return almostLast;
}

//  Use Bracket Notation to Find the last Character in a String
function lastCharacter(input1) {
   var thereYouAre = input1[input1.length - 1];
   // parameter 1: any JavaScript value
   // Return: a single JavaScript value
   return thereYouAre;
}

//  Use Bracket Notation to Find the Nth Character in a String
function nthCharacter(input1) {
   var nextCharacter = input1[1];
   // parameter 1: any JavaScript value
   // Return: a single JavaScript value
   return nextCharacter;
}

//  Use Bracket Notation to Find the First Character in a String
function firstCharacter(input1) {
   var foundIt = input1[0];
   // parameter 1: any JavaScript value
   // Return: a single JavaScript value
   return foundIt;
}

//  function to find the length of a string
function stringLength(input1) {
   var length = input1.length;
   // parameter 1: any JavaScript value
   // Return: a single JavaScript value
   return length;
}

// Concatenating strings w/variables function
function ConcatenatingStringVariables(input1, input2) {
   var firstLine = input1 + " ";
   var secondLine = input2;
   var bothLines = firstLine + secondLine;
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return bothLines;
}

// Concatenating strings w/plus equals operator function
function ConcatenatingStrings(input1, input2) {
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return (input1 += input2);
}

// Concatenating strings w/plus operator function
function Concatenating(input1, input2) {
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return input1 + " " + input2;
}

// divide decimal function
function divideDecimal(input1, input2) {
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return input1 / input2;
}

// multiply two decimals function
function decimal(input1, input2) {
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return input1 * input2;
}
// Decrement function
function Decrement(input1) {
   // parameter 1: any JavaScript value
   // Return: a single JavaScript value
   return --input1;
}

// Increment function
function Increment(input1) {
   // parameter 1: any JavaScript value
   // Return: a single JavaScript value
   return ++input1;
}

// divide function
function divide(input1, input2) {
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return input1 / input2;
}

// multiply function
function multiply(input1, input2) {
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return input1 * input2;
}

// subtract function
function subtract(input1, input2) {
   // parameter 1: any JavaScript value
   // parameter 2: any JavaScript value
   // Return: a single JavaScript value
   return input1 - input2;
}
// add function
function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
