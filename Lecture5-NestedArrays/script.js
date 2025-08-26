/*
Previous Lectures
-Scopes and Arrays
*/

// const value = 4 + ("34" * " ") / 17  //" " this will consider as 0 and will convert into number by using any operator rather than + operator
// console.log({ value }) //outpuut : 4

// const space = " ";
// console.log(space * 1); //output : 0

//Given a N*N grid , find primary diagonal sum
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]];

// let diagonalsum = 0;
// for (let i = 0; i < arr.length; i++) {
//      diagonalsum = diagonalsum + arr[i][j];
// }
// console.log({ diagonalsum });
//Time Complexity of this code : O(N)

// let secondaryDiagonal = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//     secondaryDiagonal = secondaryDiagonal + arr[i][arr.length - 1 - i];
// }
// console.log({ secondaryDiagonal });

//2nd method
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (i + j == arr.length - 1) {
//             secondaryDiagonal += arr[i][j];
//         }
//     }
// }
// console.log({ secondaryDiagonal });

//3rd method
// for (let i = 0; i < arr.length; i++) {
//     secondaryDiagonal = secondaryDiagonal + arr[i][arr.length - 1 - i];
// }


//Write a function to calculate the odd numbered column sum of matrix 
// function columnSum(arr) {
// let totalsum = 0;
// for (let i = 0; i < arr.length; i++) { // this is constant
//     let sum = 0;
//     for (let j = 0; j < arr[0].length; j++) { //this is variable(changing)
//         if (i % 2 !== 0)
//             sum = sum + arr[j][i]
//         //console.log({ sum })
//     }
//     totalsum = totalsum + sum;
// }
// return totalsum;

//Second Method

//     let rows = arr.length;
//     let columns = arr[0].length;
//     for (let j = 0; j < columns; j++) {
//         let ans = "" //Jo constant hai vo bahar rakh diya hain
//         if (j % 2 == 0) continue;
//         for (let i = 0; i < rows; i++) { //Jo change ho raha hain vo andar rakh diya hain
//             ans += arr[i][j] + " ";
//         }
//     }
// }
// const arr = [
//     [1, 2, 3, 4],    //(0,1) (0,3)
//     [5, 6, 7, 8],    //(1,1) (1,3)
//     [9, 10, 11, 12], //(2,1) (2,3)
//     [13, 14, 15, 16] //(3,1) (3,3)
// ];
// console.log(columnSum(arr));

// //Ques: Given a 2d matrix, reverse each odd columns and print it
// Input =====>
// [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ]

let arr = [
    [1, 2, 3, 4, 5, 6],
    [2, 6, 12, 43, 3, 5],
    [8, 10, 34, 23, 12, 8],
    // [9, 1, 7, 33, 0, 2],
    // [3, 14, 8, 19, 11, 4]
];

function reverseOdd(arr) {
    for (let j = 0; j < arr[0].length; j++) {
        if (j % 2 == 0) continue;
        let i = 0;
        let k = arr.length - 1;
        while (i < k) {
            let temp = arr[i][j];
            arr[i][j] = arr[k][j];
            arr[k][j] = temp;
            i++;
            k--;
        }
    }
    return arr;
}

console.log(reverseOdd(arr));