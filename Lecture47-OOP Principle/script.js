// class employee {
//     constructor({name, age, designation, salary, gender, joiningdate}) {
//         this.Name = name;
//         this.Age = age;
//         this.Designation = designation;
//         this.Salary = salary;
//         this.Gender = gender;
//         this.JoiningDate = joiningdate;
//     }

//     checkIn(time) {
//         this.checkInTime = time.toLocaleString();
//     }
//     checkOut(time) {
//         this.checkOutTime = time.toLocaleString();
//     }
//     // totalTimeToday() {
//     //     if (!this.checkInTime || !this.checkOutTime) {
//     //         console.log("Check in or Check out Missing");
//     //         return;
//     //     }

//     //     return this.checkOutTime - this.checkInTime;
//     // }
// }

// const emp1 = new employee("Hitesh", 22, "Developer", 650000, "Male", "01-01-2020");
// console.log(emp1);

// document.querySelector("button:first-of-type").addEventListener("click", () => {
//     emp1.checkIn(new Date());
//     console.log(`Employee Checked In at: ${emp1.checkInTime}`);
// });

// document.querySelector("button:last-of-type").addEventListener("click", () => {
//     emp1.checkOut(new Date());
//     console.log(`Employee Checked Out at: ${emp1.checkOutTime}`);
// });



// const employeeDetails = {
//     name: "Riya",
//     age: 30,
//     designation: "Manager",
//     salary: 900000,
//     gender: "Female",
//     joiningdate: "01-06-2018"
// };

// class manager extends employee {
//     constructor({ employeeDetails, subOrdinates }) {
//         super(employeeDetails);
//         this.subOrdinates = subOrdinates;
//     }

// }

// const Manager = new manager({ employeeDetails, subOrdinates: ["E1", "E2", "E3"] });
// console.log(Manager);


// document.querySelector("button:first-of-type").addEventListener("click", () => {
//     Manager.checkIn(new Date());
//     console.log(`Manager Checked In at: ${Manager.checkInTime}`);
// });

// document.querySelector("button:last-of-type").addEventListener("click", () => {
//     Manager.checkOut(new Date());
//     console.log(`Manager Checked Out at: ${Manager.checkOutTime}`);
// });




//Animal Class 
class Animal {
    constructor({ noOfLegs, age, color }) {   //Always Destructure karna hain using => {}
        this.noOfLegs = noOfLegs;
        this.age = age;
        this.color = color;
    }
    speak() {
        console.log("Speak Method of Animal Class")
    }
}

const dogDetails = {
    noOfLegs: 4,
    age: 5,
    color: "black",
    speak() {
        console.log("Speak Method of Dog Class")
    }
};

class Dog extends Animal {
    constructor({ dogDetails, sound, breed }) {
        super(dogDetails);
        this.sound = sound;
        this.breed = breed;
    }
}

const dog = new Dog({ dogDetails, sound: "Bark", breed: "labrador" })
console.log(dog);




const catDetails = {
    noOfLegs: 4,
    age: 5,
    color: "white"
};

//Whenever child calls super :
//Agar mere instance mein koi property missing ho to browser use main(parent) class main dhundhata hain aur udhar se return karta hain 
// -That parents constructor sets up all the properties (constructor fill up karta hain)
// -When parent is contructing/Initializing properties for child class then it is actually constructing/intializing the properties this of child class 


class Cat extends Animal {
    constructor({ catDetails, sound, breed }) {
        super(catDetails);
        this.sound = sound;
        this.breed = breed;
    }
}

const cat = new Cat({ catDetails, sound: "Meow", breed: "Persian" })
console.log(cat);


