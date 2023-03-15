//Count characters in your string

//Description

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/


//SOLUTION 01

function count(string) {
  if (string.length !== 0) {
    return string.split('').reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0
      }
      obj[item]++;
      return obj;
    }, {})
  } else {
    return {};
  }
}


//VOTED BEST SOLUTION

function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}