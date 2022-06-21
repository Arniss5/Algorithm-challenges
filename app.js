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



