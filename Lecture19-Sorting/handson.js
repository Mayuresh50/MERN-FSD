// // function sortWithNegatives(arr) {
// //     let minVal = Math.min(...arr);    //Min Value in the array
// //     let maxVal = Math.max(...arr);    //Max value in the array

// //     let neg = new Array(Math.abs(minVal) + 1).fill(0);   //Array for negative values
// //     let pos = new Array(maxVal + 1).fill(0);    //Array for positive values

// //     for (let num of arr) {
// //         if (num < 0) {
// //             neg[Math.abs(num)] = (neg[Math.abs(num)] || 0) + 1;
// //         } else {
// //             pos[num] = (pos[num] || 0) + 1;
// //         }
// //     }
// //     let result = [];
// //     for (let i = neg.length - 1; i > 0; i--) {
// //         while (neg[i] > 0) {
// //             result.push(-i);
// //             neg[i]--;
// //         }
// //     }
// //     for (let i = 0; i < pos.length; i++) {
// //         while (pos[i] > 0) {
// //             result.push(i);
// //             pos[i]--;
// //         }
// //     }
// //     return result;
// // }
// // let arr = [-1, -5, -2, 2, 0, 4];
// // console.log(sortWithNegatives(arr));

//Bubble Sort
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr1 = [4, 5, 1, 3, 2];
// console.log("Bubble Sort:", bubbleSort(arr1));

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// }
// let arr = [1, 4, 3, 2, 7]
// console.log(selectionSort(arr))

//Contest Question
/* Write a recursive function to check wheather given number is a fibonacci number or not*/
// function isFibonacciNumber(N, a = 0, b = 1) {
//     if (N == a || N == b) return true;
//     if (a > N) return false;
//     return isFibonacciNumber(N, b, a + b);
// }
// let N = 13;
// if (isFibonacciNumber = 'true') {
//     console.log(`${N} is a Fibonacci Number`);
// }
// else {
//     console.log(`${N} is not a Fibonacci Number`);
// }

//Code for Recursive function to find all substrings for given input string and returns them as list
// function findSubstring(str) {
//     let result = [];
//     function helper(start, end) {
//         if (start == str.length) return;

//         if (end > str.length) {
//             helper(start + 1, start + 1)
//             return;
//         }
//         let substrings = str.substring(start, end);   //Using built-in function substring to generate substrings
//         result.push(substrings);

//         helper(start, end + 1);
//     }
//     helper(0, 1)
//     return result;
// }
// let str = "banana";
// console.log(findSubstring(str));



