/*Merge Sort
    -
*/

//Que : GIven two soretd array and we have to merge them
// function arrayMerge(arr1, arr2) {
//     let result = [...arr1, ...arr2]
//     for (let i = 0; i < result.length; i++) {
//         for (let j = 0; j < result.length - i - 1; j++) {
//             if (result[j] > result[j + 1]) {
//                 [result[j], result[j + 1]] = [result[j + 1], result[j]]
//             }
//         }
//     }
//     console.log({ result })
// }
// let arr1 = [1, 3, 4, 7, 10];
// let arr2 = [2, 9, 12, 14, 20]
// arrayMerge(arr1, arr2);


// function mergeSortedArrays(arr1, arr2) {
//     let n = arr1.length;
//     let m = arr2.length;
//     let i = 0; //Pointer of current element of arr1
//     let j = 0; //Pointer of current element of arr2
//     let k = 0;
//     let ans = new Array[n + m];
//     while (i < n && j < m) {
//         if (arr1[i] < arr2[j]) {
//             ans[k] = arr1[i];
//             i++;
//         } else {
//             ans[k] = arr2[j];
//             j++;
//         }
//         k++;
//     }
//     while (i < n) {
//         ans[k] = arr1[i];
//         i++;
//         k++;
//     }
//     while (j < m) {
//         ans[k] = arr2[j];
//         j++;
//         k++;
//     }
//     return ans;
// }
// console.log(mergeSortedArrays(arr1, arr2));


//Vaibhav Sir Approach
// function mergeSortedArrays(arr1, arr2) {
//     let n = arr1.length;
//     let m = arr2.length;
//     let i = 0; //Pointer of current element of arr1
//     let j = 0; //Pointer of current element of arr2
//     let ans = [];
//     while (i < n && j < m) {
//         if (arr1[i] < arr2[j]) {
//             ans.push(arr1[i]);
//             i++;
//         } else {
//             ans.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < n) {
//         ans.push(arr1[i]);
//         i++;
//     }
//     while (j < m) {
//         ans.push(arr2[j]);
//         j++;
//     }
//     return ans;
// }
// console.log(mergeSortedArrays(arr1, arr2));


//Best Example for recursion (Merge Sort)
// function mergeSort(arr, low, high) {
//     if (low == high) {
//         return [arr[low]]
//     };    //Base case

//     let mid = Math.floor((low + high) / 2);

//     //Recursive call
//     let leftPart = mergeSort(arr, low, mid);
//     let rightpart = mergeSort(arr, mid + 1, high);

//     //merging of Returned Array
//     let mergedArray = mergeSortedArrays(leftPart, rightpart)   //MergeSotedArrays is previously returned function and we are using it

//     return mergedArray;
// }

// let arr = [3, 7, 1, 5, 8, 2, 4]
// console.log(mergeSort(arr, 0, arr.length - 1))


//Insertion of element
let arr = [1, 2, 7, 9]
let element = 6;
function insertElement(arr, element) {
    let i = arr.length - 1;
    while (i >= 0 && arr[i] > element) {
        arr[i + 1] = arr[i];
        i--;
    }
    arr[i + 1] = element;
    return arr;
}
console.log(insertElement(arr, element));






//I have to try this one  (HW)
// function mergeSortedArrays(arr1, arr2) {
//     let n = arr1.length;
//     let m = arr2.length;
    
//     let ans = [];
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (arr1[i] < arr2[j]) {
//                 ans.push(arr1[i]);
//             }
//             else {
//                 ans.push(arr2[i]);
//             }
//         }
//     }
//     return ans;
// }
// let arr1 = [1, 3, 4, 7, 10];
// let arr2 = [2, 9, 12, 14, 20]
// console.log(mergeSortedArrays(arr1, arr2));