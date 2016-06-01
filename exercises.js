/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(){
    "use strict";

  var num1 = x;
  var num2 = y;

  if ('num1' >= 'num2') {
    return(num1 + ' is larger than ' + num2);
  } else {
    return(num2 + ' is larger than ' + num1);
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(){
    "use strict";
    var num1 = x;
    var num2 = y;
    var num3 = z;

    if ('num1' >= 'num2') {
      return(num1 + ' is larger than ' + num2);
    } else if{
      return(num2 + ' is larger than ' + num1);
    } else {
      return(num2 + ' is larger than ' + num1 + ' and ' + num3);
    }
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var letters = ['a', 'b'];
    var vowels = ['a', 'e', 'i', 'o', 'u']

    if letters == vowels {
      return
    } else {
      return
    }
}

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbersToAdd){
    "use strict";

  var total = 0;

  for(var counter=0; counter<numbersToAdd.length; counter++){
    total = total + numbersToAdd[counter];
  }

  return total;
}

console.log(10);
console.log(sum([2, 3, 10]));
console.log(sum([4, 12, 15]));
}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
