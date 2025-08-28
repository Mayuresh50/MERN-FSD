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
// let k = 6
// console.log(rotateArrayClockwise(arr, k));
//TC : O(n*n)
//SC : O(1);


let arr = [1, 2, 3, 4, 5]
let copy = arr[0];
let copy1 = arr[1];
let k = 3;
for (let i = 0; i < arr.length - k; i++) {
    arr[i] = arr[i + k];
}

arr[arr.length - 2] = copy;
arr[arr.length - 1] = copy1;

console.log({ arr });


//rotate by k element anticlockwise
// function rotateArrayAntiClockwise(arr, k) {
//     k = k % arr.length;
//     for (let j = 0; j < k; j++) {
//         let copy = arr[0];
//         for (let i = 0; i < arr.length - 1; i++) {
//             arr[i] = arr[i + 1];
//         }
//         arr[arr.length - 1] = copy;
//     }
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// let k = 8
// console.log(rotateArrayAntiClockwise(arr, k));

//TC : O(n*n)
//SC : O(1);