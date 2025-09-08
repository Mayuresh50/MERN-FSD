//=============================================================================================================================
/*
Binary Search :
1. When to apply :- When the searching space is sorted
2. How to apply :- Answer will always come at middle, otherwise look for ans in left/ right

que: find sqyare root of N in O(log N) Time complexity :   Binary Search


If right range getting eliminated ---> then high will become (mid-1)
otherwise, if left range is getting eliminated   --> then low will become (mid+1)s
*/
//=============================================================================================================================
//Code for Binary search :
//Question : Find square root of a number in O(log N) time

// let N = 5;
// function squareRoot(N) {
//     let low = 0;
//     let high = N;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);
//         if (mid * mid == N) {
//             return mid;
//         }
//         else if (mid * mid > N) {
//             high = mid - 1
//         }
//         else {       //mid * mid < N
//             low = mid + 1
//         }
//     }
//     return -1;
// }
// let sqrtValue = squareRoot(N)
// if (sqrtValue != -1) {
//     console.log(`Square root of ${N} is: ${sqrtValue}`)
// }
// else {
//     console.log(`${N} is not a Perfect Square`)
// }

// let arr = [1, 2, 3, 6, 7, 9, 11, 15];
// let target = 11;
// function findTargetElement(target, arr) {
//     let low = 0;
//     let high = arr.length - 1
//     //let index = 0;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2)
//         if (arr[mid] == target) {
//             return mid;
//         }
//         else if (arr[mid] > target) {
//             high = mid - 1;
//         }
//         else {      arr[mid]<target
//             low = mid + 1;
//         }
//     }
//     return -1;

// }
// let index = findTargetElement(target, arr);
// if (index != -1) {
//     console.log(`${target} is found at position : ${index}`)
// }
// else {
//     console.log(`${target} not found in array`)
// }


//First occurence of target element

// let arr = [1, 2, 6, 6, 11, 11, 11, 15]
// let target = 6;
// function findFirstOccurenceOfElement(target, arr) {
//     let low = 0;
//     let high = arr.length - 1
//     let index = -1;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2)
//         if (arr[mid] == target) {
//             index = mid;
//             high = mid - 1;
//         }
//         else if (arr[mid] > target) {
//             high = mid - 1;
//         }
//         else {    arr[mid]<target
//             low = mid + 1;
//         }
//     }
//     return index;
// }
// let elementFound = findFirstOccurenceOfElement(target, arr)
// if (elementFound != -1) {
//     console.log(`First ${target} found at position ${elementFound}`);
// }
// else {
//     console.log(`${N} element not found`)
// }

//=============================================================================================================================
//Lower Bound   --> First index of target element greater than or equal to target element
//Upper Bound   --> First index of element that is just greater than the target element
//Hw : Find Upperbound from an array
//=============================================================================================================================


//LowerBound
// function lowerBound(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let index = arr.length;
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2)
//         if (arr[mid] == target) {
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
// console.log(`Lowerbound = ${lowerBound(arr, target)}`)

//==============================================================================================================================
/*
Set :- Only unique data is present
[1,2,2,1,0]   --> [0,1,2]

Map :- Contains key - value pairs , Key must be different across pairs,  key can be anything

*/

//Set in JS

// let set = new Set([1, 2, 4, 4, 4, 5, 5])
// console.log(set)

// //method to add elements
// set.add(200);
// set.add(2);
// set.add(3)
// console.log(set)

// //method to check if a number is in set or not
// console.log(`Checking if 200 is in set ? , ${set.has(200)}`)
// console.log(`Checking if 30 is in set ? , ${set.has(30)}`)

// console.log(`Size of set : ${set.size}`);    //Prints the size of set

// console.log(set.delete(41), set)  //Check if number is exist and if exist return true and delete it and if not exist then return false and return the set

// let arr = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10]
// let set = new Set();
// //let set1 = new Set(arr);
// //let set1 = new Set([...arr]);
//let arr11= Array.from(set1)
// let set2 = new Set([...array]);
// let arr2 = [...set2];


// for (let i = 0; i < arr.length; i++) {
//     set = set.add(arr[i])
// }
// console.log(set)
//console.log({array, set1,set11,arr11})


/*
MAP
*/
// let map1 = new Map([
//     ["name1", "Mayuresh"],
//     ["name2", "Tinku"]
// ]);

// let map = new Map();
// map.set("name1", "Mayuresh");
// map.set("name2", "Tinku")

// const mapArr = [...map];
// console.log({ mapArr })

// //You can use for of loop in map and set


// console.log("value of name2 keys: ", map.get("name2"));

// console.log("Delete value of Name2 key: ", map.delete("name2"))

// for (let i of map) {
//     console.log(`key: ${i[0]}, Value: ${i[1]}`)
// }

// //printing keys
// for (let i of map.keys()) {
//     console.log(i)
// }

// const mapArr1 = [...map];
// console.log({ mapArr1 }) 




//Union and Intersection

let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [2, 5, 6, 3, 1, 3]

const UnionArr = new Set([...arr1, ...arr2]);
console.log(UnionArr);


