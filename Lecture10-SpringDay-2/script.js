//Strings question 
//Given a variable name, seperated by space ---> write two functions, 1)Convert variable into camel case  2) convert variable name to snake case

//let str = "student first name"
// function camelCaseString(str) {
//     let camelCaseString = "";
//     for (let i = 0; i < str.length; i++) {      //for Camel Case
//         let space = false;
//         if (str[i] == " ") {
//             space = true;
//             i++;
//             str[i].toUpperCase();
//             camelCaseString += str[i].toUpperCase()
//         } else {
//             camelCaseString += str[i]
//         }
//     }
//     console.log(`The final Camelcase String is : ${camelCaseString}`)
// }
// camelCaseString(str);
//tc = o(n), sc = O(1)


// function snakeCaseString(str) {
//     let snakeCaseString = "";
//     for (let i = 0; i < str.length; i++) {
//         let space = false;

//         if (str[i] == " ") {
//             space = true;
//             snakeCaseString += str[i].replace(" ", "_")
//         }
//         else {
//             snakeCaseString += str[i]
//         }
//     }
//     console.log(`The final Snakecase String is :{ snakeCaseString }`)
// }
// snakeCaseString(str);


// //Alternate method to reduce space and time complexity 
// function snakeCaseString(str) {
//     let snakeCaseString = "";
//     snakeCaseString += str.replaceAll(" ", "_")
//     console.log(`The final Snakecase String is : ${snakeCaseString}`)
// }
// // snakeCaseString(str);
// //tc = O(n) ;  sc = O(1)



// //Vaibhav Sir aprroach 
// const obj = {
//     camelCaseString: function camelCaseString(str) {
//         str.trim();
//         let ccase = "";
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === " ") {
//                 ccase += str[i + 1].toUpperCase();
//                 i++;
//             } else {
//                 ccase += str[i];
//             }
//         }
//         console.log({ ccase });
//     },
//     snakeCaseString: function snakeCaseString(str) {
//         let snakeCaseString = "";
//         snakeCaseString += str.replaceAll(" ", "_")
//         console.log(`The final Snakecase String is : ${snakeCaseString}`)
//     }
// }

// console.log({ obj["camelCaseString"] }, { obj["snakeCaseString"])


// let str = "nayan"

//reverse a string
// function reverseString(str) {
//     let reversed = "";
//     for (let i = 0; i < str.length; i++) {
//         reversed += str[str.length - i - 1];
//     }
//     console.log(`The reverse of ${str} is ${reversed}`)
// }
// reverseString(str)

//check if string is palindrome
// function palindromeString(str) {
//     let palindrome = "";
//     for (let i = 0; i < str.length; i++) {
//         palindrome += str[str.length - i - 1];
//     }
//     if (palindrome === str)
//         console.log(`${str} is a Palindrome String`)
//     else
//         console.log(`${str} is not a Palindrome string `)
// }
// palindromeString(str)

//function to count words in a string
// function countWordsInString(str) {
//     let count = str.split(" ").length;
//     console.log(`Number of words in Strings are ${count}`)
// }
// countWordsInString(str)

//function to find Longest Word in String
// function findLongestWordInString(str) {
//     let splitString = str.split(" ");
//     let longestWord = splitString[0];
//     for (let i = 0; i < splitString.length; i++) {
//         if (splitString[i].length > longestWord.length) {
//             longestWord = splitString[i]
//         }
//     }
//     console.log({ longestWord })
// }
// findLongestWordInString(str)

//function to find first non repeating character
// function firstNonRepeatingCharacter(str) {
//     let split = str.split("");
//     for (let i = 0; i < split.length; i++) {
//         let isUnique = true;
//         for (let j = 0; j < split.length; j++) {
//             if (i !== j && split[i] === split[j]) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             console.log(`${split[i]} is a non repeating character`);
//             return split[i];
//         }
//     }
// }
// firstNonRepeatingCharacter(str);


let str = "nayan"
//Vaibhav Sir Approach
function reverseString(str) {
    let reverse = "";
    // for (let i = 0; i < str.length; i++) {      //From Start
    //     reverse += str[str.length - i - 1];
    // }
    // return reverse;
    for (let i = str.length - 1; i >= 0; i--) {         //From End
        reverse += str[i]
    }
    return reverse;
}


function isPalindrome(str) {
    // const reverse = reverseString(str);     //calling the function declared previously
    // return reverseString === str; 
    let n = str.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (str[i] != str[n - i - 1]) {
            return false;
        }
    }
    return true;
}

function countWords(str) {
    return str.trim().split(" ").length;
}

function longestWord(str) {
    str = str.trim().split(" ");
    let longest = str[0];

    for (let word of str) {
        if (word.length > longest.length) {
            longest = word
        }
    }
}

function firstNonRepeatingCharacter(str) {
    str = str.trim();
    let n = str.length
    for (let character of str) {
        if (str.indexOf(character) === str.lastIndexOf(character)) {
            return character
        }
    }
    return "No repeating character"
}


//HW :  Reverse each word of string    for ex : I am Mayuresh    -->   hseruyam am i