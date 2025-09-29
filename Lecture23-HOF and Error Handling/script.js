/*
4. Reduce():
    Initial accumulator value =0;
    Returns Value

*/

// let arr = [2, 11, 5, 4, 7];
// let sum = arr.reduce((accumulator, val, ind, arr) => {
//     accumulator += val;
//     return accumulator;
// }, initialAccumulatorValue = 0);

// console.log(sum);

//find count of even numbers in array
// let count = arr.reduce((accumulator, val) => {
//     accumulator += (val % 2 == 0);
//     return accumulator;
// }, 0);
// console.log(count);

//Find the frequency of each element in array
let fruits = ['Apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
// let freq = fruits.reduce((accumulator, val) => {
//     accumulator[val.toLowerCase()] = (accumulator[val.toLowerCase()] || 0) + 1;  // no need of any loop if you are using reduce function coz its already processing in a loop
//     return accumulator;
// }, {});
// console.log(freq);


/*
5. find():
    -Returns Value
    -Kind of Filter
    -return the first element that matches the condition
*/

// let findApple = fruits.find((value, index, array) => value.toLowerCase() == 'apple');
// console.log(findApple);

//given an array of objects, containing details of users, print the name of first user aged above 30
let users = [
    { name: "Mayuresh", age: 22, isActive: true },
    { name: "Bhavesh", age: 21, isActive: false },
    { name: "Hitesh", age: 30, isActive: false },
    { name: "Jayesh", age: 38, isActive: true }
];

// let findAbovethirty = users.find((value, index, array) => value.age > 30);
// console.log(findAbovethirty.name);

//to print all the names and ages of users
// users.forEach((value) => {
//     console.log(value.name, value.age);
// });


// let answer = users.map((value, index, array) => {
//     return value.name;
// });
// console.log(answer);     //Use Map to return an array of names of users



//function to display all the active users from above users array
// let activeUsers = users.filter((value, index, array) => {
//     if (value.isActive == true) {
//         return value;
//     }
// })
// console.log(activeUsers);  //Use Filter to return an array of active users


//function to find sum of age of all users below 30
// let sum = users.reduce((acc, value, index, array) => {
//     if (value.age < 30) {
//         acc += value.age;
//     }
//     return acc;
// }, 0);
// console.log(sum);


//function to print the name of all active users
// let activeUsernames = users.filter((value) => {
//     if (value.isActive == true)
//         return value.name;
// });
// console.log(activeUsernames.map((value) => value.name));


//Callback function : Passing a function as an argument to another function and returning a function from another function

// function calculator(a, b, operation) {
//     return operation(a, b);
// }
// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function substract(a, b) {
//     return a - b;
// }
// let sum34 = calculator(3, 4, add);
// let product34 = calculator(3, 4, multiply);
// console.log({ sum34, product34 })

//===============================Error handling===========================
try {
    console.log(firstname);
    let firstname = "Mayuresh";
    console.log(firstname);
}
catch (err) {
    console.log(err.message)
    console.log(err.name);
}
finally {
    console.log("This is Finally Block");
}
console.log("After try Catch Block");

//Once --> Restrict a function to be called more than once
//Memoization --> 