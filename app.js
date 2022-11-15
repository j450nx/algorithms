function isPalidrome (str) {
    let length = Math.floor(str.length / 2);
    
    for (let i = 0; i < length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }        
    }
    return true;
}
console.log(isPalidrome('1234444=5321'));


function binaryGap(num) {
    if (num === parseInt(num, 10) && num >=1 && num <= 2147483647){
        var binStr = num.toString(2),
            currentMax,
            finalMax = 0;
            
        console.log(binStr);
    
        for (let i = 0; i < binStr.length; i++) {
            currentMax = 0;
            while (binStr[i] === '0') {
                ++currentMax && i++;
            }
            finalMax = Math.max(currentMax, finalMax);
        }
        return finalMax;
    }
    return 0;
}

console.log(`Largest binary gap: ${binaryGap(529)}`);
console.log(`Largest binary gap: ${binaryGap(2147483647)}`);

function smallestPositiveInteger(array) {
    let resultArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            resultArray[array[i]] = true;
        }
    }
    
    for (let i = 1; i <= resultArray.length; i++) {
        if (resultArray[i] === undefined) {
            return i;
        }
    }
    return 1;
}

console.log(smallestPositiveInteger([1, -3, 6, 4, 1, 2]));

function reverseWords(str) {
  let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

function reverse(str){  
  let reversed = "";      
   for (var i = str.length - 1; i >= 0; i--){         
     reversed += str[i];  
   }     
  return reversed;
}

console.log(reverse('The quick brown fox jumps over the lazy dog.'));


//Example to show an array has an O(n) while a hashmap has O(1)
let array = [
    ['black', '#000000'],
    ['pink', '#ff69b4'],
    ['cyan', '00ffff']
    ];

let hashMap = {
    black: '#000000',
    pink: '#ff69b4',
    cyan: '#00ffff'
}

const searchArray = (arr, color) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i][0] === color) {
            return arr[i][1];
        }
    }
    return `The color: ${color} is not stored in this array`;
}

console.log(searchArray(array, 'cyan'));
console.log(searchArray(array, 'blue'));

console.log(hashMap['cyan']);
console.log(hashMap['blue']);

const twoSum = (array, sum) => {
    const hashtable = {};
    
    for (let i = 0; i < array.length; i++) {
        hashtable[array[i]] = i;   
    }
    
    for (let i= 0; i < array.length; i++) {
        let target = sum - array[i];
        return [i, hashtable[target]];
    }
     
    return null;
}

console.log(twoSum([5, 5, 6, 7], 10));


const twoSum2 = (array, sum) => {
    const hashtable = {};
    
    for (let i = 0; i < array.length; i++) {
        let target = sum - array[i];
       
        if (hashtable.hasOwnProperty(target)){
            return [hashtable[target], i];
        }
        
        hashtable[array[i]] = i;   
    }
     
    return null;
}

console.log(twoSum2([34, 23, 35, 24, 2, 7, 11], 47));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
/*
Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let length = contacts.length;
    for (let i = 0; i < length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return(contacts[i][prop]);
            } else {
                return('No such property');
            }
        } 
    }
    return(`No such contact`);
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));

//random range between myMin and myMax inclusive
function randomRange(myMin, myMax) {
  // Only change code below this line
  return (Math.floor(Math.random() * (myMax - myMin + 1)) + myMin);
  // Only change code above this line
}

console.log(randomRange(1, 10));
console.log(randomRange(5, 10));
console.log(randomRange(9, 10));

//Check object values with Object.values() and Array.prototype.join()
const initialPayload = {
    media: {
        id: 1,
        season: 1,
        name: 'Show One'
    }    
}

const expectedPayload = {
    media: {
        id: 1,
        season: '1',
        showName: 'Show One'
    }
}

function checkValues(payload) {
    const initialJoin = Object.values(payload['media']).join();
    const expectedJoin = Object.values(expectedPayload['media']).join();
    
    if (initialJoin == expectedJoin) {
        return true;
    }
    return false;   
}

console.log(checkValues(initialPayload));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
/*
Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/
function factorialize(num) {
    let sum = 1;
    if (num === 0) {
        return 1;
    } else {
        for (let i = 1; i <= num; i++) {
            sum = sum * i;
        }
    }
    return sum;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(0));

//using recursion
function factorializeWithRecursion(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

console.log(factorializeWithRecursion(5));
console.log(factorializeWithRecursion(10));
console.log(factorializeWithRecursion(0));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWordLength(str) {
    const strArr = str.split(' ');
    let max = 0, currentMax;
    for (let word in strArr) {
        currentMax = strArr[word].length;
        max = Math.max(max, currentMax);
    }
    return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
/*
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
    const result = [];
    let max, currentMax;
    for (let i = 0; i < arr.length; i++) {
        //assign max to first integer of the subarray
        max = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            currentMax = arr[i][j];
            max = Math.max(max, currentMax);
        }
        result.push(max);
    }
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
/*Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
    return(str.substring(str.length - target.length, str.length) === target);
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/
function repeatStringNumTimes(str, num) {
    let result = '';
    if (num === 0) {
        return result;
    } else {
        for (let i = 0; i < num; i++) {
            result += str;
        }
    }
    return result;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes('*', 8));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
    if (str.length > num) {
        return str.substring(0, num) + '...';
    }
    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/
function booWho(bool) {
    return typeof bool === 'boolean';
}
  
console.log(booWho(null));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
function titleCase(str) {
    const strArr = str.toLowerCase().split(' ');
    const resultArr = [];
    for (let word in strArr) {
        resultArr[word] = strArr[word].charAt(0).toUpperCase() + strArr[word].slice(1);
    }
    return (resultArr.join(' '));
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice
/*
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) {
    const result = arr2.slice(0);
    for (let i in arr1) {
        result.splice(n, 0, arr1[i]);
        n++;
    }
    return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
/*
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

//Another solution with Array.filter()
function bouncer(arr) {
    return arr.filter(Boolean);
}

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
/*
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
    //sort array, including integers
    const sortedArr = arr.sort(function(a, b) {
        return a - b;
    });
    for (let i = 0; i < sortedArr.length; i++) {
        if (num <= sortedArr[i]) {
            return i;
            //if num is larger than the largest number in array
        } else if (num > sortedArr[sortedArr.length-1]) {
            return sortedArr.length;
        }
    }
    //default return is 0, or for an empty array
    return 0;
}

console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
function mutation(arr) {
    const firstString = arr[0].toLowerCase();
    const secondString = arr[1].toLowerCase();
    for (let i = 0; i < secondString.length; i++) {
        if (firstString.indexOf(secondString[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i+=size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

// Array.prototype.forEach
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // solution with for loop
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }

    // solution with forEach
    this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);

const t = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    // Only change code below this line
    const newArray = [];
    // solution with a for loop
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArray.push(this[i]);
        }
    }

    // solution with forEach
    this.forEach(a => callback(a) === true ? newArray.push(a) : '');
    // Only change code above this line
    return newArray;
  };
  
  const new_t = t.myFilter(function(item) {
    return item % 2 === 1;
  });

  console.log(new_t);

// Array.prototype.filter, Array.prototype.filter and destructuring to find the title and rating for all movies with at least 8.0 imdb rating
const filteredList = watchList.filter(movie => movie.imdbRating >= 8.0).map(({ Title: title, imdbRating: rating }) => ({ title, rating }));

// use filter and reduce to find the average imdbRating for movies directed by 'Christopher Nolan'
function getRating(watchList) {
    let totalMovies, ratings, averageRating;
    totalMovies = watchList.filter(movie => movie.Director === 'Christopher Nolan');
    // use .map to convert strings into numbers
    ratings = totalMovies.map(movie => Number(movie.imdbRating))
    averageRating = ratings.reduce((sum, rating) => (sum + rating)) / totalMovies.length;
    return averageRating;
  }

// use reduce and destruturing to do the same thing
function getRating(watchList) {
    const movies = watchList
        .reduce((movie, { Director: director, imdbRating: rating }) => {
            if (director === 'Christopher Nolan') {
                movie.count++;
                movie.sum += Number(rating);
            }
            return movie;
        }, { sum: 0, count: 0 });
    const averageRating = movies.sum / movies.count;
    return averageRating;
}

// return squares of only possive integers
const squareList = arr => {
    return (arr.filter(num => num > 0)
        .filter(num => Number.isInteger(num))
        .map(num => num * num));
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// use sort
function alphabeticalOrder(arr) {
    return arr.sort(function(a, b) {
    // arrow function: return arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
      return a === b ? 0 : a < b ? -1 : 1;
    });
  } 
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// use sort without mutating original arr
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  const result = arr.slice();
  return result.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
}
console.log(nonMutatingSort(globalArray));

// use of /\W/ : /[^A-Za-z0-9_]/
function splitify(str) {
    return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));

// use of /\s+/ : replaces any whitespaces with ''
function urlSlug(title) {
    return title.trim().toLowerCase().split(/\s+/).join('-');
}
console.log(urlSlug(" Winter Is     Coming  "));

// user .every method to check if all values are positive
function checkPositive(arr) {
    return arr.every((value) => value > 0 ? true : false);
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
/* 
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);
    let result = 0;
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
        result += i;
    }
    return result;
}
console.log(sumAll([10, 5]));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/
function destroyer(arr, ...valsToRemove) {
    return arr.filter(value => !valsToRemove.includes(value));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
    return collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
}
  
console.log(whatIsInAName(
    [
        { "apple": 1, "bat": 2 }, 
        { "apple": 1 }, 
        { "apple": 1, "bat": 2, "cookie": 2 }
    ], 
    { "apple": 1, "cookie": 2 }));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/
function translatePigLatin(str) {
    
    if (str.match(/^[aeiou]/)) return str + "way";
    
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }
  
console.log(translatePigLatin("cconsonant"));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
    const index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
}
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}
console.log(pairElement("AATGCG"));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing;
    
    str.split("")
    .forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
            currCharCode++;
        } else {
            missing = String.fromCharCode(currCharCode);
        }
    });
    return missing;
}

console.log(fearNotLetter("acde"));
console.log(fearNotLetter("stvwx"));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/
// rest parameter
function uniteUnique(...arr) {
    const result = [];
    // use of arguments object
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (result.indexOf(arguments[i][j]) < 0) {
                result.push(arguments[i][j]);
            }
        }
    }
    // with forEach
    arr.forEach(subArr => subArr.forEach(a => {
        if(result.indexOf(a) < 0) {
            result.push(a);
        }
    }));
    return result; // sorted: return result.sort((a, b) => a - b);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
    const pairs = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '\"' : '&quot;',
        '\'' : '&apos;'
    }
    // split str into an array use .map and || to value if key is available?
    return str.split('').map(a => pairs[a] || a).join('');
    // replace the found regex with the key-value pairs
    // return str.replace(/([&<>\"'])/g, a => pairs[a]);
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
function sumFibs(num) {
    let n1 = 0, n2 = 1, nextTerm, arr = [];
    for (let i = 1; i <= num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        if (n1 % 2 === 1 && n1 <= num) {
            arr.push(n1);
        }
    } 
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumFibs(10));
console.log(sumFibs(75025));

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/
function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
}
  
console.log(sumPrimes(4));
console.log(sumPrimes(10));
console.log(sumPrimes(977));

// https://www.samanthaming.com/tidbits/97-string-padstart-padend/
/*
string.padStart(<maxLength>, <padString>)

string.padEnd(<maxLength>, <padString>)
*/
const string97 = 'hi';
string97.padStart(3, 'c'); // chi
string97.padEnd(4, 'l'); // hill

'hi'.padStart(5);
// Same as
'hi'.padStart(5, ' ');

'SAM'.padStart(10, undefined); // '       SAM'
'hi'.padStart(7, 'SAMANTHA'); // SAMANhi
'hi'.padEnd(7, 'SAMANTHA'); // hiSAMAN

console.log('JavaScript'.padStart(15)); 
console.log('HTML'.padStart(15));
console.log('CSS'.padStart(15));
console.log('Vue'.padStart(15));

// outputs
/*
     JavaScript
           HTML
            CSS
            Vue
*/

// Receipt formatting
const purchase = [
    ['Masks', '9.99'],
    ['Shirt', '20.00'],
    ['Jacket', '200.00'],
    ['Gloves', '10.00'],
];
  
purchase.forEach(([item, price]) => {
    console.log(item + price.padStart(20 - item.length));
});

// outputs
/*
Masks           9.99
Shirt          20.00
Jacket        200.00
Gloves         10.00
*/

// Masking numbers
const bankNumber = '2222 2222 2222 2222';
const last4Digits = bankNumber.slice(-4);

last4Digits.padStart(bankNumber.length, '*'); // ***************2222

// https://www.samanthaming.com/tidbits/85-string-trim
const string85 = "   hi   ";

string85.trimStart(); // "hi   "
string85.trimEnd();   // "   hi"
string85.trim();      // "hi"
string85;             // "   hi   "

'hi \n'.trim(); // "hi"

'hi \t'.trim(); // "hi"

'hi \r'.trim(); // "hi"

const multiLine = `
hi


`;

multiLine.trim(); // "hi"

'  hi there  '.trim(); // "hi there"

const multiLine85 = `
hi

there


`;

/* Returns

"hi

there"
*/

const string85_2 = "   hi   ";
string85_2.trimStart(); // "hi   "

const string85_3 = "   hi   ";
string85_3.trimEnd();   // "   hi"

const uglySentence = "One  Two   Three Four   ";

const prettySentence = uglySentence
    .split(' ') // ["One", "", "Two", "", "", "Three", "Four", "", "", ""]
    .filter(word => word) // ["One", "Two", "Three", "Four"]
    .join(' '); // "One Two Three Four"

console.log(prettySentence); // "One Two Three Four"