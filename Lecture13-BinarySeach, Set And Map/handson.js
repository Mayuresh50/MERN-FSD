//Last Occurence of an element in an array
// function findLastOccurence(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let index = -1;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);
//         if (arr[mid] == target) {
//             index = mid;
//             low = mid + 1;
//         }
//         else if (arr[mid] > target) {
//             high = mid - 1;
//         }
//         else {
//             low = mid + 1
//         }
//     }
//     return index;
// }
// let arr = [1, 2, 6, 6, 11, 11, 11, 15];
// let target = 11;
// let lastElementFound = findLastOccurence(arr, target)
// if (lastElementFound !== -1) {
//     console.log(`The last position of ${target} found at ${lastElementFound}`);
// } else {
//     console.log(`Element is not in array`);
// }


//UpperBound of element
// function UpperBound(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let index = arr.length;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2)
//         if (arr[mid] > target) {
//             index = mid;
//             high = mid - 1;
//         }
//         else {
//             low = mid + 1;
//         }
//     }
//     return index;
// }
// let arr = [1, 2, 6, 6, 11, 11, 11, 15]
// let target = 11;
// console.log(`Upperbound = ${UpperBound(arr, target)}`)


//count occurence of targeted element in an array
// function countOccurence(arr, target) {
//     //first occurence binary search
//     let low = 0;
//     let high = arr.length - 1;
//     let first = -1;
//     let last = -1;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2)
//         if (arr[mid] === target) {
//             first = mid;
//             high = mid - 1;
//         }
//         else if (arr[mid] > target) {
//             high = mid - 1;
//         }
//         else {
//             low = mid + 1;
//         }
//     }
//     if (first == -1) {
//         return 0;
//     }
//     //last occurence binary search
//     low = 0;
//     high = arr.length - 1;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2)
//         if (arr[mid] === target) {
//             last = mid;
//             low = mid + 1;
//         }
//         else if (arr[mid] > target) {
//             high = mid - 1;
//         }
//         else {
//             low = mid + 1;
//         }
//     }
//     return last - first + 1;
// }
// let arr = [1, 2, 6, 6, 11, 11, 11, 15]
// let target = 11;
// let count = countOccurence(arr, target)
// console.log(`The element ${target} occured ${count} times`);


//============================================================================================================

//What is MAP ? :- 


//find duplicate using set
// let arr = [1, 2, 3, 4, 5, 6, 1, 2, 4, 5, 6, 7, 5, 8, 2, 9, 2, 8, 2, 4, 8]
// let seen = new Set();
// let duplicates = new Set();
// for (let i of arr) {
//     if (seen.has(i)) {
//         duplicates.add(i);
//     } else {
//         seen.add(i);
//     }
// }
// console.log({ duplicates, seen })

// //union of three arrays
// let arr1 = [1, 2, 3, 4, 5, 6]
// let arr2 = [2, 5, 6, 3, 1, 3]
// let arr3 = [4, 5, 6, 8, 9, 0]

// const UnionArr = new Set([...arr1, ...arr2, ...arr3]);
// console.log({ UnionArr });


// let set1 = new Set([...arr1, ...arr2]);
// let intersection = new Set();

// for (let value of set1) {
//     if (arr3.includes(value)) {
//         intersection.add(value)
//     }
// }
// console.log({ intersection });