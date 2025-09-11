//Intersection of array using set
// let arr1 = [1, 2, 3, 4, 5, 6]   // Order of insertion may be different because It is based on insertion order onn Set/Map
// let arr2 = [2, 5, 6, 3, 1, 3]


// let intersection = [];
// let arr4Set = new Set(arr1);

// for (let i = 0; i < arr2.length; i++) {
//     if (arr4Set.has(arr2[i])) {
//         intersection.push(arr2[i]);
//     }
// }

// intersection = [...new Set(intersection)];
// console.log(intersection)


//Find The frequency of each element in the arr
let arr = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
//Method 1:
// function countFrequency(arr) {
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(arr[i])) {
//             map.set(arr[i], map.get(arr[i]) + 1);
//         }
//         else {
//             map.set(arr[i], i);
//         }
//     }
//     for (let key of map.keys()) {
//         console.log(key, map.get(key));
//     }
//     for (let keyValue of map) {
//         console.log(keyValue);
//     }
// }
// countFrequency(arr)

//About Rest operator and Destructuring
//const [a, ...b] = [1,2,3,4];
//console.log(a,b)


//method 2 :
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//         map.set(arr[i], map.get(arr[i]) + 1);
//     }
//     else {
//         map.set(arr[i], i);
//     }
// }
// let obj = {}
// for (let key of map.keys()) {
//     obj[`${key}`] = map.get(key);
// }
// console.log(obj)


//Remove duplicates from an array
// console.log([...new Set(arr)]);


//Find the Frequency of all words in a paragraph (only Spaces, A-Z & a-z letters will be there)
// const paragraph = "Hello how are you How was your day did you eat hoW did you find that";
// function countWordFrequency(paragraph) {
//     let split = paragraph.toLowerCase().split(" ");
//     let map = new Map();
//     for (let word of split) {
//         if (map.has(word)) {
//             map.set(word, map.get(word) + 1);
//         } else {
//             map.set(word, 1)
//         }
//     }
//     for (let word of map.keys()) {
//         console.log(word, map.get(word));
//     }
//console.log("The frequency of "target" is ", map.get(target.toLowerCase()) || 0);
// }
//const target = "how";
// countWordFrequency(paragraph)



//Anagrams
//listen  --> silent
//mad --> dam

// function anagram(str1, str2) {
//     let split1 = str1.split("");
//     let split2 = str2.split("");
//     if (split1.length === split2.length) {
//         let map = new Map();

//         for (let ch of split1) {
//             map.set(ch, (map.get(ch) || 0) + 1);
//         }

//         for (let ch in split2) {
//             if (map.has(ch)) {
//                 map.set(ch, map.get(ch) - 1);
//                 if (map.get(ch) == 0) {
//                     map.delete(ch);
//                 }
//             }
//             else {
//                 return false;
//             }
//         }
//         if (map.size == 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     return false;
// }

// let str1 = "listen";
// let str2 = "silent"
// anagram(str1, str2);


// let a = "silent", b = "listen";

// function anagram(a, b) {
//     if (a.length != b.length)
//         return false;

//     let freqObj = {};

//     for (let i = 0; i < a.length; i++) {
//         freqObj[a[i]] = (freqObj[a[i]] || 0) + 1;
//     }

//     for (let i = 0; i < b.length; i++) {
//         if (!freqObj[b[i]]) return false;
//         freqObj[b[i]] = freqObj[b[i]] - 1;
//     }

//     for (let value of Object.values(freqObj)) {
//         if (value)
//             return false;
//     }
//     return true;
// }
// console.log(anagram(a, b))
//TC : O(m+n);
//SC : O(26)

//===============================================================================================================
//Recursion Starts here

// function factorial(N) {
//     if (N < 0) return -1;

//     if (N == 0) {
//         return 1;
//     }
//     let fact = N * factorial(N - 1);
//     return fact;
// }
// console.log(factorial(5))
// console.log(factorial(0))


//Print numbers till N
// function printNumbersTillN(N) {
//     if (N == 0) return 0;

//     printNumbersTillN(N - 1);
//     console.log(N);
// }
// printNumbersTillN(5)

//multiplication
// function recursiveMultiplication(n, m) {
//     if (n == 0) return 0;

//     return m + recursiveMultiplication(n - 1, m)
// }
// console.log(recursiveMultiplication(5, 2))