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
  // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    
    this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);

//Array.prototype.filter, Array.prototype.filter and destructuring to find the title and rating for all movies with at least 8.0 imdb rating
const filteredList = watchList.filter(movie => movie.imdbRating >= 8.0).map(({ Title: title, imdbRating: rating }) => ({ title, rating }));
