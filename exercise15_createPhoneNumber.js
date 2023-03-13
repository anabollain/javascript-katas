//Create Phone Number

//Description

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/


//SOLUTION 01

function createPhoneNumber(numbers) {
  if (numbers.length === 10) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  }
}


//VOTED BEST SOLUTION 01

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}


//VOTED BEST SOLUTION 02

function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
    + numbers.substring(3, 6)
    + '-'
    + numbers.substring(6);
}


//VOTED BEST SOLUTION 03

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

