//============================Introduction to Objects========================================

//create variables to store name, age, address and class of student
// let name = "Piyush";
// let age = 24;
// let address = "Pune";
// let className = "12th";


//create variables to store name, age and address of Student parents
// let ParentName = "Riya"
// let ParentAge = 45;
// let ParentAddress = "Pune";

//Object Creation os Student
// const studentObj = {
//     name: "Piyush",    //Key-value pairs   (key = name, Value = Piyush)
//     age: 17,
//     address: "Pune",
//     Std: 12
// }


//Object Creation of Parent
// const parentObj = {
//     name: "Riya",
//     age: 36,
//     address: "Pune"
// }


//Access the properties in Object
// console.log(`Student Name : ${studentObj.name}`);
// console.log(`Student Age : ${studentObj.age}`);
// console.log(`Student Address : ${studentObj.address}`);
// console.log(`Student Class : ${studentObj.Std}`);

//Accessing the values of Parent object
// console.log(`Parent Name : ${parentObj.name}`);
// console.log(`Parent address : ${parentObj.address}`);
// console.log(`Parent age : ${parentObj.age}`);


//Updating values of an object
// studentObj.name = "Parteek";
// console.log(`Updated Student name : ${studentObj.name}`)


//Adding the property in object
// parentObj.gender = "Female";
// console.log({ parentObj })



//Delete the property of an object
// parentObj.standard = 12; //Inserting Property first
// console.log({ parentObj })

// delete parentObj.standard; //Deleting property here
// console.log({ parentObj })


// const personObj = {
//     name: "Mayuresh",
//     age: 22,
//     city: "Shirpur"
// }

// console.log({ personObj });

// personObj.city = "Pune";
// console.log({ personObj });

// personObj.hobby = "Driving Cars";
// console.log({ personObj });

// console.log(`Age of Person is ${personObj["age"]}`);

// console.log(personObj["address"]);     //undefined
// console.log(personObj.address.firstLine);     //Cannot read properties of undefined (reading 'firstLine')


// if (personObj && personObj.address.firstLine && personObj.address) { //throws error that cannot read properties of undefined
//     console.log(personObj)
// }

// if (personObj && personObj.address && personObj.address.firstLine) { //condition is FALSE at personObj.address
//     console.log(personObj)
// }


//nested objects

// const employeeObj = {     //= is used only to store values in a variables
//     name: "Raju",            // : is used to assign the values in key
//     company: "Acciojob",
//     Salary: "10LPA",
//     address: {
//         addressLine1: "Ganraj Chowk",
//         addressLine2: "Baner",
//         city: "Pune"
//     }
// }

// console.log(`City of ${employeeObj.name} is ${employeeObj.address.city}`)


//Array of objects
// const studentObjArray = [
//     studentObj, {
//         name: "Mitanshu",
//         age: 22,
//         city: "Amalner",
//         passOut: 2025
//     }
// ]
// console.log({ studentObjArray })


// for (let i in studentObj) {   //You can use for - in loop to print values of objects
//     console.log(`${i} : ${studentObj[i]}`)
// }

// console.log(`Keys of Student object are : ${Object.keys(studentObj)} `)   //Object.keys(objname) is used to print keys of an object;
// console.log(`Keys of Student object are : ${Object.values[studentObj]} `)  //Object.values[objname] is used to print Values of an object; (spot the difference)


//using object.keys()
// for (let i of Object.keys(studentObj)) {   //You can use for - of loop to print key-values pairs of objects
//     console.log(`${i} : ${studentObj[i]}`)
// }


// const classRoom = {
//     studentobj1: {
//         name: "Mayuresh",
//         age: 22,
//         gender: "Male",
//         grade: "Graduate",
//         address: {
//             addressLine1: "Ganraj Chowk",
//             addressLine2: "Baner",
//             addressLine3: "Pune",
//             houseNumber: 303
//         }
//     },
//     studentobj2: {
//         name: "Hitesh",
//         age: 21,
//         gender: "Male",
//         grade: "Graduate",
//         address: {
//             addressLine1: "Bhumkar Chowk",
//             addressLine2: "Wakad",
//             addressLine3: "Dhule",
//             houseNumber: 31
//         }
//     },
//     studentobj3: {
//         name: "Mitanshu",
//         age: 23,
//         gender: "Male",
//         grade: "Graduate",
//         address: {
//             addressLine1: "Balewadi Highstreet",
//             addressLine2: "Balewadi",
//             addressLine3: "Jalgaon",
//             houseNumber: 402
//         }
//     },
//     studentobj4: {
//         name: "Nikita",
//         age: 21,
//         gender: "Female",
//         grade: "12",
//         address: {
//             addressLine1: "Lohegaon",
//             addressLine2: "Viman Nagar",
//             addressLine3: "Mumbai",
//             houseNumber: "31A"
//         }
//     }
// }


//console.log("Details of student who resides in pune");
// for (let i in classRoom) {    // i represents student object
//     if (classRoom[i] && classRoom[i].address && classRoom[i].address.addressLine3) {    //this is the checks condition to identify whether i is an object ot not
//         if (classRoom[i].address.addressLine3 == "Pune") {
//             console.log(`Name : ${classRoom[i].name}, Age : ${classRoom[i].age}, House Number : ${classRoom[i].address.houseNumber}`)
//         }
//     }
// }
//we can also push an object into an array by using arrname.push() method


//functions inside object
//Normal Functions, can be accessed as same as props

// const carObj = {
//     car: "Mercedes GLS-220d",
//     color: "White",
//     milege: 10,
//     currenSpeed: 20,
//     running: function running() {
//         console.log(`The car is running!`)
//     }
// }
// carObj.running();


//this keyword
//It is used to access values of a specific abject and each object has its own this keyword
//scope of this keyword is only inside the object
//Mostly used in functions inside objects

// const carObj1 = {
//     car: "Mercedes GLS-220d",
//     color: "White",
//     milege: 10,
//     currentSpeed: 20,
//     running: function running() {
//         //console.log(`The car is running!`)
//         console.log(`The car is running!! Current speed of car is : ${this.currentSpeed}`)  //using this keyword
//     }
// }
// carObj1.running();


// const portFolio = {
//     name: "Mayuresh",
//     skills: ["CPP", "JavaScript", "Java"],
//     showskills: function showskills() {    //always write name of function for best practice
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

// portFolio.showskills();
// portFolio.addskills("Python");
// portFolio.showskills();

//remove extra comma from output