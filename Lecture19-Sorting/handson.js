// function sortWithNegatives(arr) {
//     let minVal = Math.min(...arr);    //Min Value in the array
//     let maxVal = Math.max(...arr);    //Max value in the array
//     let neg = new Array(Math.abs(minVal) + 1).fill(0);   //Array for negative values
//     let pos = new Array(maxVal + 1).fill(0);    //Array for positive values
//     for (let num of arr) {
//         if (num < 0) {
//             neg[Math.abs(num)] = (neg[Math.abs(num)] || 0) + 1;
//         } else {
//             pos[num] = (pos[num] || 0) + 1;
//         }
//     }
//     let result = [];
//     for (let i = neg.length - 1; i > 0; i--) {
//         while (neg[i] > 0) {
//             result.push(-i);
//             neg[i]--;
//         }
//     }
//     for (let i = 0; i < pos.length; i++) {
//         while (pos[i] > 0) {
//             result.push(i);
//             pos[i]--;
//         }
//     }
//     return result;
// }
// let arr = [-1, -5, -2, 2, 0, 4];
// console.log(sortWithNegatives(arr));

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



//Apna College

//Ascending bubble sort algorithm
// function bubblesort1(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// let arr = [4, 1, 2, 3, 5];
// console.log(`Answer of Bubble sort ${bubblesort1(arr)}`)
//Time complexity : O(N*N)


//Ascending bubble sort algorithm
// function bubblesort1(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let isSwap = false;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                 isSwap = true;       //This is used to check is the array is already sorted --> Slightly optimized
//             }
//             if (!isSwap) {
//                 console.log(`Array is already sorted`)
//                 return arr;
//             }
//         }
//     }
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(`Answer of Bubble sort ${bubblesort1(arr)}`)

//Descendinng Bubblesort array
// function bubblesort1(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let isSwap = false;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] < arr[j + 1]) {     //A small change here and we got descending sorted array
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                 isSwap = true;       //This is used to check is the array is already sorted --> Slightly optimized
//             }
//         }
//         if (!isSwap) {
//             console.log(`Array is already sorted`)
//             return arr;
//         }
//     }
//     return arr;   //If the above condition fails then we should return the array after completing the descending sorting
// }
// let arr = [4, 1, 2, 3, 5];
// console.log(`Answer of Bubble sort ${bubblesort1(arr)}`)


//Ascending selection sort algorithm
// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let smallest = i;   //Assume that the current index is smallest
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[smallest]) {
//                 smallest = arr[j];
//             }
//         }
//         [arr[i], arr[smallest]] = [arr[smallest], arr[i]]    //Swaping of smallest element
//     }
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(`Answer of Selection sort ${selectionSort(arr)}`)
//Time complexity : O(N*N)

//Descending order
// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let smallest = i;   //Assume that the current index is smallest
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] > arr[smallest]) {    //A small change here and we are using at descending selection sort algorithm
//                 smallest = arr[j];
//             }
//         }
//         [arr[i], arr[smallest]] = [arr[smallest], arr[i]]    //Swaping of smallest element
//     }
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(`Answer of Selection sort ${selectionSort(arr)}`)
//Time complexity : O(N*N)

// function insertionSort(arr) {
//     let n = arr.length;
//     for (let i = 1; i < n; i++) {  //intentionally running loop from i = 1 because we are assuming that arr[0] is a sorted part of the array
//         current = arr[i];     //Using the first unsorted element as unsorted element and try to insert it in the sorted part of array
//         prev = i - 1;       //Assigning previous as last element from the sorted array
//         while (prev >= 0 && arr[prev] > current) {  //Iterating tilll prev >=0 and comparing current with the last element of sorted part of array
//             arr[prev + 1] = arr[prev];   //shifting the position of last element of sorted array to the pos+1 place
//             prev--; //decrementing
//         }
//         arr[prev + 1] = current;    //as we are checking for prev > current and if this condition fails then the current element should be inserted at prev + 1 position
// //Placing current element at its correct position
//     }
//     return arr;
// }
// let arr = [4, 1, 2, 3, 5, 6, 9, 8, 7];
// console.log(`Answer of Insertion Sort is ${insertionSort(arr)}`);
//Time complexity : O(N*N)


//Descending order of insertion sort algorithm
// function insertionSort(arr) {
//     let n = arr.length;
//     for (let i = 1; i < n; i++) {  //intentionally running loop from i = 1 because we are assuming that arr[0] is a sorted part of the array
//         current = arr[i];     //Using the first unsorted element as unsorted element and try to insert it in the sorted part of array
//         prev = i - 1;       //Assigning previous as last element from the sorted array
//         while (prev >= 0 && arr[prev] < current) {  //Iterating tilll prev >=0 and comparing current with the last element of sorted part of array
//             arr[prev + 1] = arr[prev];   //shifting the position of last element of sorted array to the pos+1 place
//             prev--; //decrementing
//         }
//         arr[prev + 1] = current;    //as we are checking for prev > current and if this condition fails then the current element should be inserted at prev + 1 position
//         //Placing current element at its correct position
//     }
//     return arr;
// }
// let arr = [4, 1, 2, 3, 5, 6, 9, 8, 7];
// console.log(`Answer of Insertion Sort is ${insertionSort(arr)}`);