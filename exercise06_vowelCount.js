//Vowel Count

//Description
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//SOLUTION 01

function getCount(str) {
  let sum = 0;
  for (const char of str) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      sum++;
    }
  }
  return sum;
}


//SOLUTION 02

function getCount(str) {
  return str.match(/[a,e,i,o,u]/g) ? str.match(/[a,e,i,o,u]/g).length : 0;
}


//BEST VOTED SOLUTION

function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}

//g: global, all matches
//i: insensitive
