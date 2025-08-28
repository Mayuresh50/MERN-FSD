//Subarray Related Questions
//Sum of all subarrays
// let arr = [1, 2, 3, 4, 5];
// function sumOfSubArrays(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         let max = arr[0];
//         for (let j = i; j < arr.length; j++) {
//             sum = sum + arr[j];
//             if(max < sum ){
//                 max = sum
//             }
//         }
//     }
// }


//find maximum sum of sub array
// function findMaxSumArray(arr) {
//     let maxSum = arr[0]
//     let start = 0;
//     let end = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         let subarraysum = 0;
//         for (let j = i; j < arr.length; j++) {
//             subarraysum += arr[j];
//             if (subarraysum > maxSum) {
//                 maxSum = subarraysum;
//                 start = i;
//                 end = j
//             }
//         }
//     }
//     // return maxSum
//     // console.log(`Sum of Subarray from index ${start} to ${end} is ${maxSum}`)
//     console.log(`Sum of Subarray from ${arr.slice(i, j)} is ${maxSum}`)
// }

// let arr = [-1, 5, -3, 2, -1, 3];
//findMaxSumArray(arr)

//find the subarrays whose sum is equal to K
// function findSumEqualtoK(arr, k) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         let subarray = [];
//         for (let j = i; j < arr.length; j++) {
//             sum = sum + arr[j];
//             subarray.push(arr[j]);
//             if (sum === k) {
//                 console.log({ subarray });
//                 count++
//             }
//         }
//     }
//     console.log({ count })
// }
// let arr = [1, 2 ,- 3, 0, 1, -1, 1];
// let k = 0
// findSumEqualtoK(arr, k)


//find the subarrays whose sum is equal to K and whose array length is maximum
// function findMaximumLengthArrayofK(arr, k) {
//     let maxlength = 0
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         let subarray = [];
//         for (let j = i; j < arr.length; j++) {
//             sum = sum + arr[j];
//             subarray.push(arr[j]);
//             if (sum == k) {
//                 console.log({ subarray });
//                 if (maxlength < j) {
//                     maxlength = j - i + 1;
//                 }
//             }
//         }
//     }
//     console.log({ maxlength })
// }
// let arr = [1, 2, - 3, 0, 1, -1, 1];
// let k = 0
// findMaximumLengthArrayofK(arr, k);
//Tc : O(n*n)


//vaibhav sir approach
// function findlargesSubArrayofK(arr, k) {
//     let maxlength = 0
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         let subarray = [];
//         for (let j = i; j < arr.length; j++) {
//             sum = sum + arr[j];
//             if (sum === k) {
//                 maxlength = Math.max(maxlength, j - i + 1)
//             }

//         }
//     }
//     console.log({ maxlength })
// }
// let arr = [1, 2, - 3, 0, 1, -1, 1];
// let k = 0
// findlargesSubArrayofK(arr, k);

