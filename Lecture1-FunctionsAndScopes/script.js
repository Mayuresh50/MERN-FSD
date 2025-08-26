// console.log("Hello, World!");


//========================================Function Starts here================================
// function greetUser() {
//     console.log("Hello, User!");
// }
// greetUser();


//Declaring a Function
// function greet() {
//     console.log("Hello, World!");
// }
// function end() {
//     console.log("Bye World");
// }

//Calling Function
// greet();
// greet();
// end();
// end();
// greet();
// greet();
// end();
// end();
// greet();
// greet();
// end();
// end();


//Multiple Parameterized Function
// function greetUser(username, place = "App") { //default value passing in "place"
//     console.log("Hello, " + username + ", Welcome to our " + place);
// }

// //inside function call the parameters are known as arguments
// greetUser("Mayuresh", "Website");
// greetUser("Hitesh", "App");
// greetUser("Jayesh", "Office");
// greetUser("Mitanshu"); // not passing the second argument ie Place


// function sum(a = 0, b = 0) {
//     console.log(a + b); // only used for printing the value
//     return a + b;
//     console.log("This is unreachable code coz it is written after return statement");
// }
// let sumoftwonumbers = sum(10);
// console.log(sumoftwonumbers); //10


//nested Function
// function personDetails(name, birthYear) {
//     console.log("Name: " + name);
//     console.log("Age: ", calculateAge(birthYear));
// }
// function calculateAge(birthYear) {
//     return 2025 - birthYear;
// }
// personDetails("Mayuresh", 2003);


// function square(num) {
//     return num * num;
// }
// console.log(square(20));
// console.log(square(21));
// console.log(square(5));


// console.log("hello", 2 + 2); //will treat everything after comma as a single argument
// console.log("hello" + 2 + 2); //will treat anything as a one argument


//=============================Arrays Starts here=============================================


// console.log(students[2]); //prints 2nd student name
// console.log(4, students[3]); //prints index of Mitanshu

//Using loops will print all students name, with roll no.
// for (let i = 0; i < students.length; i++) {
//     console.log(i + 1, students[i]);
// }


// console.log("for .. i in loop");
// for (let i in students) {
//     console.log(Number(i) + 1, students[i]);
// }


//Print all students with Even roll number
//const students = ["Mayuresh", "Hitesh", "Jayesh", "Mitanshu", "Darshan"];
// for (let i = 0; i < students.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(i + 1, students[i]);
//     }
// }

// for (let i in students) {
//     if (i % 2 !== 0) {
//         //console.log(Number(i) + 1, students[i]);
//         (Number(i) + 1) % 2 !== 0 ? console.log(Number(i) + 1, students[i]) : null;
//     }
// }

//for of loop
// for (let student of students) {
//     console.log(student);
// }


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = new Array(1, 2, 3, 4, 5);
// arr1[2] = 10;
// console.log(arr1);


// //Homogenous Property of array
// const arr3 = [1, 2, 3, 4, 5];

// //Heterogenous  Property of array
// const array = ["Hello", 1, 5.6, true]; //can store multiple datatypes like int, string, boolean even string also

// const iplteams = ["CSK", "MI", "RCB", "SRH", "KKR", "GT"];

//Add Elements
// iplteams.push("GT");  //Insert at the end
// console.log("Elements after PUSH: ", iplteams);
// iplteams.unshift("KKR");  //Insert at the beginning
// console.log("Elements after UNSHIFT: ", iplteams);
// console.log("Number of IPL teams in list :", iplteams.length);

//Remove elements
// iplteams.pop(); // Delete from end
// console.log("Elements after Pop: ", iplteams);
// iplteams.shift(); // Delete from beginning
// console.log("Elements after Shift: ", iplteams);

//slice
// console.log(iplteams.slice(2)); // keeps all elements after furst 2 elements
// console.log(iplteams.slice(-2)); // Keeps two elements from end