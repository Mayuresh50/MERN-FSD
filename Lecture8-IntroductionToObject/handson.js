//Create a object of Book include properties like name, author and price and print it
// const bookObj = {
//     name: "Wing of Fire",
//     author: "Dr. A. P. J. Abdul Kalam",
//     price: 350
// }
// console.log({ bookObj })

//Updating the property
// bookObj.price = 450;
// console.log({ bookObj })

//deleting a property
// delete bookObj.price;
// console.log({ bookObj })

// console.log("The book", bookObj["name"], "is written by ", bookObj["author"]);



//Ask Vaibhav Sir for this question
// const mobileObj = {
//     name: "Iphone 17 pro max",
//     specification: {
//         ram: "6GB",
//         Processor: "A17 Bionic Chip",
//         Storage: "256GB"
//     }
// }

// console.log(`${mobileObj.name} has a ${mobileObj.specification.Processor} inside for better performance and smooth experience`);

// for (let i in mobileObj) {
//     console.log(`${i} : ${mobileObj.specification[i]}`)   // return undefined for specification
// }



const bookObj = {
    book1: {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 399,
        publishedYear: 1988
    },
    book2: {
        title: "Atomic Habits",
        author: "James Clear",
        price: 499,
        publishedYear: 2018
    },
    book3: {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        price: 299,
        publishedYear: 1997
    }
}


for (let i in bookObj) {
    if (bookObj[i].publishedYear > 1999)
        console.log(`Name : ${bookObj[i].name}, Author : ${bookObj[i].author}`)
}