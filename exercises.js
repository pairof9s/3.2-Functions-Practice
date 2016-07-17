/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

// function max(num1, num2){
//     "use strict";
//
//   if ('num1' >= 'num2') {
//     return state(num1 + ' is larger than ' + num2);
//   } else {
//     return state(num2 + ' is larger than ' + num1);
//     }
//
//     var state = max(5, 8);
//
//   document.getElementById('larger').innerHTML = state;
//
// }; DAVID'S ATTEMPT

function max(number1, number2){
  'use strict';
  var maxNum;
  if(number1 > number2) {
    maxNum = number1;
  }else {
    maxNum = number2;
  }
  return maxNum;
}

console.assert (max(10, 5) == 10);
console.assert (max(1, -2) == 1);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

// function maxOfThree(){
//     "use strict";
//     var num1;
//     var num2;
//     var num3;
//
//     if ('num1' >= 'num2' >= 'num3') {
//       return (num1 + ' is larger than ' + num2 + ' and ' + num3);
//     } else if ('num2' >= 'num1' >= 'num3') {
//       return (num2 + ' is larger than ' + num1 + ' and ' + num3);
//     } else {
//       return (num3 + ' is larger than ' + num2 + ' and ' + num1);
//     }
//
//     var state = maxOfThree(5, 2, 8);
//     document.getElementById('largest').innerHTML = state;
//
// };  DAVID'S ATTEMPT

function maxOfThree() {
    'use strict';
    var number1;
    var number2;
    var number3;

    if(number1 >= number2 >= number3){
      return (number1 + ' is larger than ' + number2 + ' and ' + number3);
    }else if(number2 >= number1 >= number3){
      return (number2 + ' is larger than ' + number1 + ' and ' + number3);
    }else {
      return (number3 + ' is larger than ' + number1 + ' and ' + number2);
    }
    var state = maxOfThree(5, 2, 8);
    document.getElementById('largest').innerHTML = state;
  };

  console.assert('#largest');


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

// function isVowel(char){
//     "use strict";
//     var letters = ['a', 'b'];
//     var vowels = ['a', 'e', 'i', 'o', 'u']
//
//     if (letters == vowels) {
//       return (true);
//     } else {
//       return (false);
//     }
// }  DAVID'S ATTEMPT

function isVowel(char){
     "use strict";
     if (char.length == 1)
     {
       var vowels = "aeiou";
       var isVowel = vowels.indexOf(char) >= 0 ? true : false;

       return isVowel;
     }
};

console.assert(isVowel('a') == true);
console.assert(isVowel('b') == false);

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var translation = '';

    for(var i=0; i<phrase.length; i++){
      var char = phrase[i];

      if(isVowel(char) || char === ' '){
        translation += char;
      }else{
        translation += char + 'o' + char
      }
    }

    return translation;
}

console.assert(rovarspraket('this is fun') == 'tothohisos isos fofunon');
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

// function sum(numbersToAdd){
//     "use strict";
//
//   var total = 0;
//
//   for(var counter=0; counter<numbersToAdd.length; counter++){
//     total = total + numbersToAdd[counter];
//   }
//
//   return total;
// }
//
// console.log(10);
// console.log(sum([2, 3, 10]));
// console.log(sum([4, 12, 15]));
// }
//
// function multiply(){
//     "use strict";
//     //...
//
// }  DAVID'S ATTEMPT

function sum(numbersToAdd){
    "use strict";
    var total = 0;

    for(var i=0; i<numbersToAdd.length; i++){
      total += numbersToAdd[i];
    }

    return total;
}

console.assert(sum([1,2,3,4]) == 10);

function multiply(numbersToMultiply){
  "use strict";
  var total = 1;

  for(var i=0; i<numbersToMultiply.length; i++){
    total = total * numbersToMultiply[i];
  }

  return total;
}

console.assert(multiply([1,2,3,4]) == 24);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    "use strict";

    return phrase.split('').reverse().join('');
}

console.assert(reverse('jag testar') == "ratset gaj")

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";

    var elements = words.length;
    var count = 0;
    for (var i=0; i<elements; i++) {
      if (words[i].length > count)
        count = words[i].length;
    }
    return count;
}

console.assert(findLongestWord(['it', 'the', 'long']) == 4);
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, int){
    "use strict";

    var length = words.length;
    var longestWords = [];

    for (var i=0; i<length; i++) {
      if (words[i].length > int) {
        longestWords[longestWords.length] = words[i];
      }
    }
    return longestWords;
  }

console.assert(filterLongWords(['it', 'the', 'long'], 4) == ['it', 'the']);
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var frequency = {};

    for (var i = 0, len = string.length; i < len; i++) {
      var currChar = string.charAt(i);
      if (currChar in frequency) {
        frequency[currChar] += 1;
      } else {
        frequency[currChar] = 1;
      }
    }
    return frequency;
  }

console.log(charFreq("adddfaefefevvfewsfeeasfefefsfe"));
