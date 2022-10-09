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
    var binStr = num.toString(2),
        currentMax,
        finalMax = 0;
    
    for (let i = 0; i < binStr.length; i++) {
        currentMax = 0;
        while (binStr[i] === '0') {
            ++currentMax && ++i;
        }
        finalMax = Math.max(currentMax, finalMax);
    }
    return finalMax;
}

console.log(`Largest binary gap: ${binaryGap(10141)}`);

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
