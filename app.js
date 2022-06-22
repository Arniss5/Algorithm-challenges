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


