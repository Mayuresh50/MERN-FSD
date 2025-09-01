// const portFolio = {
//     name: "Mayuresh",
//     skills: ["CPP", "JavaScript", "Java"],
//     showskills: function () {       //This is the anormous function because it doesn't have any function name
//         let printskills = "";
//         for (let i = 0; i < this.skills.length; i++) {
//             printskills += portFolio.skills[i] + ",";
//         }
//         console.log(printskills);
//     },
//     addskills: function addskills(skills) {
//         this.skills.push(skills);
//     }
// }

//=======================================================================================================

// const obj = {
//     property1: "PropertyOne",
//     1: "one"      //by default it will take key ie 1 as string
// }
// console.log(obj.property2);    //undefined because no key present as property2;
// console.log(obj["property2"]); //undefined because no key present as property2;
// console.log(obj[1]);    //it will print the value of key 1\

// obj.property2 = "Property2"

//console.log(obj);

//Object keys can have array as values also
// obj.arrProperty = [1, 2, 3, 4, 5]
// for (let i of obj.arrProperty) {
//     console.log(i)
// }

//Another way of creating object
// const newObject = newObject();
// newObject.a = "a";
// newObject.b = "b";
// newObject.c = "c";
// newObject.d = "d";
// newObject.e = "e";

// console.log({ newObject })







//======================================String Starts Here================================================

// //strings using single quotes
// let str = 'a'    //type 1 of defining strings
// console.log(typeof (str));

// str = ['a', 'b', 'c'];
// console.log(typeof (str));

// str = 'abc';
// console.log(typeof (str));

// //Strings using double quotes
// str = "ABC"        //type 2 of defining strings 
// console.log(typeof (str));

// //strings using backticks
// str = `abc`;         //type 3 of defining strings
// console.log(typeof (str));

// //case when we must use double inverted comma
// str = "Hi I'm Mayuresh"
// console.log({ str });

// //case when we must use single inverted comma
// str = 'Hi this is "Java" classes';
// console.log({ str })

// //case when we must use backticks 
// str = `Hi I'm Mayuresh, I have joined "Mern classes"`;
// console.log({ str });

// let name = "Mayuresh"
// str = `Hello, I'm ${name}`;
// console.log(str)



//Some methods in strings

str = ` We're going to see some methods of strings `;

// //Includes function
// console.log(str.includes("a"));     //Returns False
// console.log(str.includes("g"));     //Returns True


// //Replace function       //This only creates a new string, it doesn't modify the original ones
// console.log(str.replace("s", "x"))     //replace only first value pf S with X
// console.log(str)            //Prints original String

// //replaceAll function
// console.log(str.replaceAll("s", "X"))     //replaces all the values of s by X


//trim() --> Removes all leading and trailing void spaces
// console.log(str);
// console.log(str.trim())
// console.log(str);

//Substring() -->  Gives substring   -->  It doesn't changes the original string
// console.log(str.substring(3, 9));       //Gives susbtring starting from (3 to 9-1)
// console.log(str.substring(3));          //Gives Substring starting from (3 to end)
// console.log(str.substring("3"));            //Gives Substring starting from (3 to end)
// console.log(str.substring(-3));            //Gives whole string as Substring (from 0 to end)
// console.log(str.substring(-3, -10));        //Gives empty string
// console.log(str.substring(-3, 1000));       //Behaves as 0 to n

//slice() -->  Almost same as substring, handles (-)ve values differently
// console.log(str.slice(3))      //Prints string from 3 to n
// console.log(str.slice(-3))     //Prints last 3 elements including void spaces
// console.log(str.slice(3, 5))    //Prints substring from (3 to n-1)
// console.log(str.slice());       //Prints whole string
// console.log(str.slice(-100));   //Prints all elements in case the number is greater than the length of the string
// console.log(str.slice(-9, -3))     //Prints string from index -9 to index -4(excluding index -3)

//split()  --> Splits the string based on given character

// str = `We're going, to see, some methods, of strings`;
// console.log(str.split(","));    //identified comma(,) as a seperator

str = `Hello, Welcome to MERN stack course`

// console.log(str.split(" "))

//toUpperCase() Function
// console.log(str.toUpperCase());

// //toLowercase() Function
// console.log(str.toLowerCase());

// const string = "Vaibhav";
// const number = 66;
// const bool = true;
// const obj = {
//     name: "Vaibhav"
// }
// console.log(string._proto_);
// console.log(number._proto_);
// console.log(bool._proto_);
// console.log(obj._proto_);

//=========================Spread and Rest Operator=====================================

//Rest Operator    --> Combines all the arguments and transforms them into an array
// function addStudent(students, ...studentName) {
//     for (let student of studentName) {
//         students.push(student);
//     }
//     console.log(students)     //prints the array
// }
// const students = ["Mayuresh", "Darshan", "Hitesh"]
// addStudent(students, "Mitanshu", "Jayesh", "Pratik")

const [hi, ...bye] = ["Hi", "Bye", "Byee", "Byeeee"]
console.log(hi, bye);

//spread operator 
const arr = [1, 2, 3, 4, 5]
console.log("Spreaded array :", [0, ...arr, 67, 678, 679])

//HW
//Spread and rest use in object

