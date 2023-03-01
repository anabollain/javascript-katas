//Smart Sum

//Description

/*Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
*/


//SOLUTION 01

function smartSum(){
  let sum = 0;
  for(let i=0; i<arguments.length; i++){
    if(typeof arguments[i] === 'object'){
        sum += smartSum(...arguments[i]);
    }else{
        sum += arguments[i];
    }
  }
  return sum;
}


//SOLUTION 02

function smartSum() {
  let totalSum = 0;
  for(num of arguments){
    if(typeof num === 'number'){
        totalSum += num;
    }else{
        totalSum += smartSum(...num);
        //if totalSum += smartSum(num); => then arguments = [[4,5]], infinite loop
    }
  }
  return totalSum;
}

smartSum(1,2,3,[4,5],6);

//Spread operator examples
//smartSum(...[4,5]); => smartSum(4,5);

//arr = [4,5]
//arr2 = [...arr, 3] => arr2 = [...[4,5], 3] => arr2 = [4, 5, 3]


//SOLUTION 03

function smartSum() {
  return [...arguments].reduce((a, b) => a + (typeof(b) === 'number' ? b : smartSum(...b)), 0);
}


//VOTED BEST SOLUTION

const smartSum = (...a) => a.reduce((s, e) => s + (typeof e === "number" ? e : smartSum(...e)), 0);



