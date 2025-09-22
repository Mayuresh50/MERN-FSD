/*
Sorting :
-Data is arranged in a specific manner such that we can know and take decisions about Data

*/

// function sorting(arr) {
//     let start = arr[0];
//     let key = arr[arr.length - 1];
//     let j = -1;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < key) {
//             j = j + 1;
//             i = i + 1;
//             if (arr[i] < arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;

//             }
//         } else {
//             let swap = arr[j + 1];
//             arr[j + 1] = key;
//             arr[arr.length - 1] = swap;
//         }
//     }
//     console.log({ arr })
// }
//let arr = [4, 1, 3, 7, 5]
// sorting(arr);



//BubbleSort Algorithm
// function bubbleSort(arr) {
//     let j = 0;
//     while (j < arr.length) {
//         for (let i = 0; i < arr.length - 1 - j; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp
//             }
//         }
//         j++;
//     }
//     console.log(arr)
// }
// bubbleSort(arr)


/*

*/

// function optiBubbleSort(arr) {
//     let n = arr.length;
//     let swaps = false;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j + 1 < n - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swaps = true;
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// let arr = [4, 2, 5, 1, 3]
// console.log(optiBubbleSort(arr))

/* Summary of Bubble sort : 
- In one Pass : Swap adjacent element if current > next element
- After first pass, the greatest element will be at the last position
- After Each Pass, One element will be placed at its correct sorted position
- Refer Optimization for not checking elements.  --> already placed at their correct position
- TC :Best --> O(N);
     :Average --> H.W
     :Worst --> O(N*N)
- SC : O(1)  --> Constant
*/

/*
Selection Sort : 
- In one pass : select minimum element from unsorted array and swap with first element of sorted array
- After first pass, the smallest element will be at the first position
- After Each Pass, One element will be placed at its correct sorted position (from the front side)
- No Optimization because we have to compare all elements even if array is sorted
- TC : Best → O(N*N) 
     : Average → O(N*N)
     : Worst → O(N*N)
- SC : O(1) --> Constant
*/
