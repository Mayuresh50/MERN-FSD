//Reverse the matrix by rows
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let i = 0; i < arr.length; i++) {
//     let row = arr[i];
//     let left = 0, right = row.length - 1;
//     while (left < right) {
//         let temp = row[left];
//         row[left] = row[right];
//         row[right] = temp;
//         left++;
//         right--;
//     }
// }
// console.log(arr);

//print sum of each row in matrix
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
//     console.log({ sum });
// }

//print sum of each column in matrix
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let j = 0; j < arr[0].length; j++) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i][j];
//     }
//     console.log({ sum });
// }

//replace diagonal elements with 0
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let i = 0; i < arr.length; i++) {
//     arr[i][i] = 0;
// }
// console.log(arr);

//Given two arrays and want to push into resultant array and dont repeat the elements
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];
// let result = [];
// for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
// }
// for (let i = 0; i < arr2.length; i++) {
//     if (result.includes(arr2[i])) {
//         continue;
//     }
//     else
//         result.push(arr2[i]);
// }
// console.log(result);

//pop all the elements from an array
// let cart = ["Product A", "Product B", "Product C"];
// console.log({ cart });
// while (cart.length > 0) {
//     cart.pop();
// }
// console.log({ cart });

//replace interactions[0] with 100
// let interactions = [10, 20, 30, 40];
// interactions.splice(0, 1, 100);
// console.log({ interactions });


// const userData = {
//     name: "John Doe",
//     age: 25,
//     posts: 50
// };
// function rename(obj, oldkey, newkey) {
//     if (oldkey in obj) {
//         obj[newkey] = obj[oldkey];
//         delete obj[oldkey];
//     }
//     return obj;
// }
// console.log(rename(userData, "posts", "totalposts"));


//find subarray whose sum is equal to k
// let arr = [1, 2, 3, 4, 5];
// function findsubarray(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         let subarray = [];
//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j];
//             subarray.push(arr[j]);

//             if (sum === k) {
//                 console.log(subarray);
//             }
//         }
//     }
// }
// let k = 6;
// findsubarray(arr, k);
