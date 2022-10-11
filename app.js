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
