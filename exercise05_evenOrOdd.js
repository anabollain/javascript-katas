//Even or Odd

//Description

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


//SOLUTION 01

function evenOrOdd(number) {
  let result;
  if (number % 2 === 0) {
    result = 'Even';
  } else {
    result = 'Odd';
  }
  return result;
}


//SOLUTION 02

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}


//BEST VOTED SOLUTION 01

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}


//BEST VOTED SOLUTION 02

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

