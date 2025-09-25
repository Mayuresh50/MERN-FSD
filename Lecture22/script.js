//Write a code to check if a number is divisible by 3 or not
// const arrow = (a) => {
//     if (a % 3 === 0) return true;
//     else return false;
//}
// console.log(arrow(46));

//Using Ternary Operator
// const isDivisible = (a) => (a % 3 == 0) ? true : false;
// console.log(isDivisible(6));

//Vaibhav Sir Approach
// const isDivisible = (a) => (a % 3 == 0)
// console.log(isDivisible(6));

//Note : arrow function do not have their own 'this' keyword, thye uses parents this keyword
// const student = {
//     fullName: "Mayuresh Patil",
//     age: 22,
//     result1: function (resultstatus) {
//         //this.fullName gives Mayuresh Patil because as parents this have fullName property
//         console.log(`${this.fullName} has ${resultstatus} the exam`);
//         console.log(this);  //shows the object properties
//     },
//     result2: (resultstatus) => {
//         //this.fullName gives undefined because as parents this doesnt have fullName property
//         console.log(`${this.fullName} has ${resultstatus} the exam`);
//         console.log(this);  //doesn't shows the object properties, instead shows window object
//     }
// }
// let resultstatus = "passed";
// student.result1(resultstatus);
// student.result2(resultstatus);


//Anonymous Function
//It is a function with no name


//High Order Function
//These functions are either function that takes function as an argument or returns a function as result

// let arr = [2, 1, 6, 3, 9];
// console.log(arr.forEach((value, index, array) => {
//     value *= 2;
//     array[index] = value;
//     console.log(value, index, array);
// })
// );
// console.log(arr);

// let users = [
//     { name: "Mayuresh", age: 22 },
//     { name: "Bhavesh", age: 21 },
//     { name: "Pratik", age: 23 }
// ];

// users.forEach((value) => {
//     console.log(value.name, value.age);
// });


/*
1. Map()
    - Transforms array
    - Returns an array
    - Does not change the original array
*/

// let arr = [2, 11, 5, 4, 7];
// let squaredarr = arr.map((value, index, array) => {
//     return value * value;
// });
// console.log(squaredarr);



// let users = [
//     { name: "Mayuresh", age: 22 },
//     { name: "Bhavesh", age: 21 },
//     { name: "Pratik", age: 23 }
// ];
// let names = users.map((value) => {
//     return { name: value.name.toUpperCase(), age: value.age };   //returns object with uppercase names
// });
// console.log(names);


/*
2. filter()
    -Keeps the elements that passes the condition
    -returns and array
    -Does not change the original array
*/

// let nums = [2, 12, 13, 7, 6, 5, 8];
// const even = nums.filter((value, index, array) => value % 2 == 0);
// const odd = nums.filter((value, index, array) => value % 2 != 0);
// console.log({ even });
// console.log({ odd });


// let names = ["Pranjal", "Bhavesh", "Mayuresh", "Uday", "Raj"];
// const result = names.filter((value) => value.length > 5);
// console.log({ result });  