//Find the odd int

//Description

/*
Digital root is the recursive sum of all the digits in a number.

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/


//SOLUTION 01

function findOdd(A) {
    const obj = A.reduce((obj, item) => {
    if(!obj[item]){
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
    } ,{});
    return parseInt(Object.keys(obj).filter(key => obj[key] % 2 !== 0)[0]);
}

//SOLUTION 02

function findOdd(A) {
  const obj =  A.reduce((obj,item) => {
      if(!obj[item]){
        obj[item] = 1;
      }else{
        obj[item]++;
      }
      return obj;
    }, {});
  for(const key in obj){
    if(obj[key] % 2 !== 0){
      return parseInt(key);
    }
  }
}


//VOTED BEST SOLUTION

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}


//USEFUL INFORMATION
//Duplicate elements
const array = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = array => array.filter((item, index) => array.indexOf(item) !== index);
toFindDuplicates(array);