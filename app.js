// First Factorial
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer


function factorial(num) {
    let total = num
    while(num > 1) {
        num--
        total *= num
        
    }
    return total
}


//Letter Capitalize

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

// Alphabet Soup
// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.
