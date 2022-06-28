// 1) First Factorial
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer


function factorial(num) {
    let total = num
    while(num > 1) {
        num--
        total *= num
        
    }
    return total
}


// 2) Letter Capitalize

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

function LetterCapitalize(str) {
    let capStr = ''
    for(let i=0; i< str.length; i++) {
        if(i <= 0 || str[i-1] === ' ') {
            capStr = capStr.concat(str[i].toUpperCase())
        } else {
            capStr = capStr.concat(str[i])
        }
    }
    return capStr
}

// 3) Alphabet Soup
// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

//bubble sort
// function alphabetSoup(str) {
//     letterArray = str.split("")

//     for(let i = 0; i < letterArray.length; i++){
//         for(let j = 0; j < ( letterArray.length - i -1 ); j++){
//             if(letterArray[j] > letterArray[j+1]){
//                 let temp = letterArray[j]
//                 letterArray[j] = letterArray[j + 1]
//                 letterArray[j+1] = temp
//             }
//         }
//     }
//     return letterArray.join("")
// }


function alphabetSoup(str) {
    letterArray = str.split("")

    letterArray.sort()
    return letterArray.join("")
}



// 4) Given an array of integers, find the sum of its elements.

// For example, if the array [1,2,3,4] output would be 10

function findSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }

    return sum
}

function findSum(arr) {
    let sum = 0;

    arr.forEach(num => {
        sum += num
    })

    return sum
}


//5) Array Addition I
//Have a function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up in the largest number in the array, otherwise return the string false. For example: if arr contains  the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
// console.log(arrayAddition([4, 6, 23, 10, 1, 3]))

function arrayAddition(arr) {
    //The Math.max() function returns the largest of the numbers given as input parameters.
    //.apply accepts an array and it applies the array as parameters to the actual function 
    // (.max Maths doesn't accept an array as input).

    //arrMax-> largest number
    const arrMax = Math.max.apply(Math, arr)
    let found = false


    function recArrAdd(sub, arr) {
        if (found) return true
        if (arr.length > 0) {
            //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
            // The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
            // console.log(arr[0])
            let arrSum = sub.concat(arr[0]).reduce((prev, curr) => { return prev + curr;})
            if (arrSum === arrMax){
                if (arr[0] != arrMax){
                    found = true
                    return found
                }
            };
            recArrAdd(sub.concat(arr[0]), arr.slice(1))
            recArrAdd(sub, arr.slice(1))
        }
        return found
    }

    return recArrAdd([], arr)
}


// Given an array on numbers that can be +ve -ve or 0, print out the decimal value of each fraction to 6 DP

// Example [1,1,0,-1,-1] would print out 
// 0.4
// 0.4
// 0.2

// 5 elements. 2 +ve 2-ve and 1 zero. 

// 2/5 = 0.400000
// 2/5 = 0.400000
// 1/5 = 0.200000

// function getFractions(arr) {
//     let negative = 0
//     let positive = 0
//     let zero = 0
//     arr.forEach(num => {
//         if (num < 0) {
//             negative++
//         } else if (num > 0) {
//             positive++
//         } else {
//             zero++
//         }
//     })
//     const fractions = arr.length

//     console.log(1 / fractions * negative)
//     console.log(1 / fractions * positive)
//     if (zero != 0) {
//         console.log(1 / fractions * zero)
//     }
// }

function getFractions(arr) {
    const positives = arr.filter(num => num > 0).length
    const negatives = arr.filter(num => num < 0).length
    const zeros = arr.filter(num => num === 0).length

    console.log((positives / arr.length).toFixed(6))
    console.log((negatives / arr.length).toFixed(6))
    console.log((zeros / arr.length).toFixed(6))
}



let personArray = [2, 4, 8, 14, 16, 18];

// sort the array and print the sum of three largest numbers
// [12,6,4,2,8,10]
function getThreeLargest(arr) {
    const sortedArray = arr.sort()
    console.log(sortedArray[0] + sortedArray[1] + sortedArray[2])
}

// getThreeLargest([12,6,4,2,8,10])


//Given an array of numbers, return how many times the largest number appears in the array. 
// Example 
// const arr = [3, 4, 2, 1, 2, 2, 3, 4, 3, 4, 2, 4, 1, 4, 3]
// Should return 5 as 4 appears 5 times

function countLargest(arr) {
    let counter = 0
    const largest = Math.max.apply(Math, arr)
    arr.forEach(num => {
        if (num === largest) {
            counter++
        }
    })
    return counter
}

// console.log(countLargest([3, 4, 2, 1, 2, 2, 3, 4, 3, 4, 2, 4, 1, 4, 3]))


// Given an number n, create a staircase of '#' symbols. The base and height are both equal to n. 

// Write a program that prints out the stair case to the console. 

// Example if n = 4 

//      #
//     ##
//   ###
// ####

function makeStaircase(n) {
    for(let i = 1; i <= n; i++) {
        let stair = ' '.repeat(n - i) + '#'.repeat(i)
        console.log(stair)
    }
}

// makeStaircase(10)


// 2 people Alice and Bob  get scores for 3 areas. 
// Take 2 arrays containing 3 numbers. Representing their scores. 
// For each element in the array. Compare with the same element in the other array. If the value in first array is higher give Alice 1 points, if higher in second array give Bob 1 point. If they are the same. Then no points. 
// Return an array containing the two scores Alice first then Bob. 

// Example. 

// Arr1 = [4,2,3] 
// Arr2 = [3,2,1] 

// Should return [1, 1]

function compareScores(arr1, arr2) {
    let alice = 0
    let bob = 0
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            alice++
        } else if (arr1[i] < arr2[i]) {
            bob++
        }
    }
    return [alice, bob]
}

// console.log(compareScores([4,2,3], [3,2,1]))

// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// arr=[1,2,3,4,3,2,1]
// The unique element is 4
// Returns

// int: the element that occurs only once



// function findUniqueElement(arr) {

//     for(let i = 0; i < arr.length; i++) {
//         let j
//         for(j = 0; j < arr.length; j++)
//             if(i != j && arr[i] === arr[j])
//                 break  
//             if (j == arr.length)
//                 return arr[i]
//     }
// }
function findUniqueElement(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        let j
        for(j = 0; j < arr.length; j++) {
            if(i != j && arr[i] === arr[j])
                break  
        } 
        if (j == arr.length){
            return arr[i]
        }      
    }
    return "No unique elements"
}

// console.log(findUniqueElement([1,3,3,4,2,2,1]))

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9. The right to left diagonal = 3+5+9. Their absolute difference is 15-17 =2.
// Return
// int: the absolute diagonal difference


const matrix = [
    [1, 2, 0, 3],
    [4, 5, 0, 6],
    [9, 8, 0, 9],
    [0, 0, 0, 0]
]

function diagDifference(arr) {
    const side = arr.length
    let leftRight = 0
    let rightLeft = 0
    
    for(let i = 0; i < side; i++) {
        leftRight += arr[i][i]
        rightLeft += arr[i][side -1 -i]
    }
    //Math.abs() returns absolute value of a number
   return Math.abs(leftRight - rightLeft)
}

// console.log(diagDifference(matrix))


// Taking a String input, shift the characters in the string by the number of places defined by n. If the shift takes you past the end of the alphabet, then revert back to a. If the character is not a letter. keep it the same as it is. Capitalisation should be kept the same. 

// example String "Always-Look-on-the-Bright-Side-of-Life" and n = 5 should return "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"


function shiftLetters(str, n) {
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const capitalLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const alphabet = letters.length
    const arr = str.split('')
    let shiftedStr = ""

    arr.forEach(character => {
        if (letters.includes(character)) {
            if (letters.indexOf(character) + n < alphabet) {
                shiftedStr += letters[letters.indexOf(character) + n]
            } else {
                shiftedStr += letters[letters.indexOf(character) + n - alphabet]
            }
            
        } else if (capitalLetters.includes(character)) {
            if (capitalLetters.indexOf(character) + n < alphabet) {
                shiftedStr += capitalLetters[capitalLetters.indexOf(character) + n]
            } else {
                shiftedStr += capitalLetters[capitalLetters.indexOf(character) + n - alphabet]
            }
        } else {
            shiftedStr += character
        }
    })   
    return shiftedStr 
}

console.log(shiftLetters("Always-Look-on-the-Bright-Side-of-Life", 5))


function CaesarCipher(str, num) {
    // you can comment this line
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}
console.log(CaesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5));