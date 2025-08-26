//Binary To Decimal

// let s = [1, 1, 0, 1, 0, 1];
// let count = 0;
// let num = 0;
// for (let i = s.length - 1; i >= 0; i--) {
//     num += s[i] * (2 ** count);
//     count++;
// }
// console.log(num);


/*
Prvious Lecture
-frequent Array
-prefix Sum
-all pairs with difference = k
-time and space complexity
-plus minus
*/

//================================Scopes=======================================
//global scope  :- Variable that is declared globally and can be accessed anywhere in the code

// x = 10 //global variable
// let y = 5;
// const z = 12;
// var s = 15;

// {
//     //let y = 6
//     console.log(y)
// }

// function sayHi() {
//     for (let i = 0; i < x; i++) {
//         console.log("Hi", i);
//     }
// }
// sayHi();

// function nestedScopes() {
//     let value = 145;
//     for (let i = 0; i < 5; i++) {
//         if (i % 2 == 0) {
//             let value2 = 35;
//             console.log(value, value2);
//         }
//     }
// }
// nestedScopes();


//===========================================Arrays===========================================
// Nested Arrays
// let arr = [1, [2, 3], 4, 5, [6, 95, 71]];
// console.log(arr[4][2]);

//print nested arrays
//let arr = [[2, 3], [3, 4], [4, 5]];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//we know that the array will contain only numbers and arrays
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length === undefined) {
//         console.log(arr[i]);
//     } else {
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//     }
// }


//Method - 2 Using typeOf Keyword
// for(let i =0;i<arr.length; i++){
//     if(typeof arr[i] === 'number'){
//         console.log(arr[i]);
//     }else{
//         for(let j =0; j<arr[i].length; j++){
//             console.log(arr[i][j]);
//         }
//     }
// }

//Method 3 - using isArray() method
//isArray(arr) -> returns boolean value determining if variable "arr" is an array or not
// for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//         console.log(arr[i]);
//     } else {
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//     }
// }

//Write a function that takes nested arrays as an argument and tells if this nested array is a matrix or not
// function isMatrix(arr) {
//     if (!Array.isArray(arr)) return false;
//     if (!Array.isArray(arr[0])) return false;
//     let rowLength = arr[0].length;
//     for (let array of arr) {
//         if (array.length !== rowLength) {
//             return false;
//         }
//     }
//     return true;
// }
// let arr = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];
// console.log(isMatrix(arr));

// const arr = [" "];
// console.log(arr[0]); //Give Answer as Zero

//Write a function to calculate product of sum of each rows
// function productSum(arr) {
//     let product = 1;
//     for (let array of arr) {
//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             sum = sum + array[i];
//         }
//         product = product * sum;
//     }
//     return product;
// }
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(productSum(arr));

//Write a function to calculate the sum of nested array
// function productSum(arr) {
//     let sum = 0;
//     for (let array of arr) {
//         for (let i = 0; i < array.length; i++) {
//             sum = sum + array[i];
//         }
//     }
//     return sum;
// }
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(productSum(arr));

//Subarrays
//Definition : Continuous segment of an array

/*arr = [1, 2, 3, 4, 5];
subarrays = [[1], [2], [3], [4], [5]];
          =[1, 2], [2, 3], [3, 4], [4, 5];
          =[1, 2, 3], [2, 3, 4], [3, 4, 5];
          =[1, 2, 3, 4], [2, 3, 4, 5];
          =[1, 2, 3, 4, 5];
*/

//Print all subarrays
// let subarrays = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         subarrays.push(arr.slice(i, j + 1));
//     }
// }
// console.log(subarrays);

//Print sum of all subarrays
// let arr = [1, 2, 3, 4, 5];
// let totalsum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//         sum = sum + arr[j];
//         totalsum = totalsum + sum;
//     }
// }
// console.log(totalsum);