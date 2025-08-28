/*
Subarrays : Contigious part of an array

A = [1,2,3,4]
[1,2],[2,3][3,4]

*/

// let arr = [1, 4, 3, 7, 9]
//1st method to pop last array elements
// arr.pop();

// let arr2 = arr.slice(3, 5)

// slice method : It will store the portion of the array in arr2,
// which will start from index as 3 and will run upto 5 exclude the last index ie 5
//You have to store it in another variable because slice didn't return the value of arr (Doesn't change the original array)


//Syntax of splice :  .splice(index ie start, delectcount ie how many elements want to remove)
//arr.splice(start, deletioncount)
// arr.splice(-1);
// console.log({ arr2 })


//second method to pop last array elements
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[arr.length - 1])
//         arr.pop();
// }
// console.log({ arr })


// let arr = [1, 2, 3, 4, 5]
// //Shift is used to delete an element from the start
// arr.shift(); //It doesn't take any argument, if argument is given then argument is ignored itself
// console.log({ arr })


// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
// }
// arr.length -= 1;  // If we didn't write this line then it will print UNDEFINED at last postion of arrray
// console.log({ arr })
// console.log(arr.length)

//add an element at starting of the array without using unshift operation
// let arr = [10, 20, 30, 40, 50];
// for (let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1]
// }
// arr[0] = 7;
// console.log(arr)

//Rotatation of array from left to right (Anti - Clockwise Rotation) -----> [10,20,30,40,50]  --> [50,10,20,30,40]
//using reverse for loop
// let arr = [10, 20, 30, 40, 50];
// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1]
// }
// arr[0] = 50;
// console.log({ arr })

//Rotation of array from right to left (Clockwise Rotation) ------> [10,20,30,40,50]  --> [20,30,40,50,10]
// let copy = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log({ arr })


//Rotatation of array from left to right (Anti - Clockwise Rotation) -----> [10,20,30,40,50]  --> [50,10,20,30,40]
//without using reverse for loop 
// let arr = [10, 20, 30, 40, 50];
// let copy = arr[arr.length - 1]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1]
// }
// arr[0] = copy;
// console.log({ arr })

//never change a future element , that were going to use in future

//HW: shift, unshift or push, pop  ---> for rotations in array






//rotate array by k element clockwise
// console.log(arr[0], arr[1])
// function rotateArrayClockwise(arr, k) {
//     k = k % arr.length;
//     for (let j = 0; j < k; j++) {
//         let copy = arr[arr.length - 1];
//         for (let i = arr.length - 1; i > 0; i--) {
//             arr[i] = arr[i - 1];
//         }
//         arr[0] = copy;
//     }
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// let k = 8
// console.log(rotateArrayClockwise(arr, k));

//TC : O(n*n)
//SC : O(1);


//rotate by k element anticlockwise

function rotateArrayAntiClockwise(arr, k) {
    k = k % arr.length;
    for (let j = 0; j < k; j++) {
        let copy = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = copy;
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5];
let k = 8
console.log(rotateArrayAntiClockwise(arr, k));

//TC : O(n*n)
//SC : O(1);