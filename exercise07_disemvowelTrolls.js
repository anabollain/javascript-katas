//Disemvowel Trolls

//Description

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/


//SOLUTION 01

function disemvowel(str) {
    let result = str.match(/[^aeiou]/ig);
    return result ? result.join('') : '';
}


//SOLUTION 02

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}


//SOLUTION 03

function disemvowel(str) {
    return str.match(/[^aeiou]/gi).join('');
}


//BEST VOTED SOLUTION

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}


//USEFUL INFORMATION

// find uppercase characters
var m = s.match(/[A-Z]+/g);

// find everything except uppercase characters
var m = s.match(/[^A-Z]+/g);

//g is for global search
//(?i) starts case-insensitive mode
//(?-i) turns off case-insensitive mode