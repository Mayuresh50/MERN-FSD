//Count vowels and consonants from a string
// let str = "hello world"
// function countVowelsAndConsonants(str) {
//     str = str.toLowerCase().split("");
//     let vowels = "";
//     let consonants = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//             if (!vowels.includes(str[i])) {
//                 vowels += str[i] + ", ";
//             }
//         }
//         else {
//             if (!consonants.includes(str[i])) {
//                 consonants += str[i] + ", "
//             }
//         }
//     }
//     console.log(`Vowels : ${vowels.replaceAll(" ", "")}\n Consonants : ${consonants.replaceAll(" ", "")}`);
// }
// countVowelsAndConsonants(str);   //vowels : e, o ; consonants : h,l,w,r,d

//Remove duplicate letters from string
// function removeDuplicateletter(str) {
//     str = str.toLowerCase().split("");
//     let duplicateRemoved = "";
//     for (let i = 0; i < str.length; i++) {
//         if (!duplicateRemoved.includes(str[i])) {
//             duplicateRemoved += str[i] + " ";
//         }
//     }
//     console.log(`String After removing duplicate Letters : ${duplicateRemoved.trim()}`)
// }
// removeDuplicateletter(str);    //hello world --> helowrd

//Reverse a string by words
// str = "I am Mayuresh"
// function reverseString(str) {
//     let reverse = "";
//     for (let i = 0; i < str.length; i++) {      //From Start
//         reverse += str[str.length - i - 1];
//     }
//     return reverse;
// }
// function reverseByWords(str) {
//     let reversewords = "";
//     str = str.split(" ");
//     for (let i = 0; i < str.length; i++) {
//         reversewords += reverseString(str[i]) + " "        //It will just reverse the each word not the whole string
//         //reversewords += reverseString(str[str.length - i - 1]) + " "         //It will reverse whole string including words also
//     }
//     return reversewords.trim();
// }
// console.log(reverseByWords(str));      I am mayuresh   -->   sheruyam ma I

//Check if string contains only number
// function isStringContainNumbers(str) {
//     str = str.toString().split("");
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9') {
//             count++;
//         }
//     }
//     if (count === str.length) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let str = "12345a"
// console.log(isStringContainNumbers(str));      12345  --> True     12345a  --> False