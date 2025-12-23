/* 

Promises have chainings
Three states : 
1. Pending 
2. Fulfilled/Resolved
3. Rejected



*/

// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const num = Math.random();
//         if (num < 0.5)
//             resolve("Number is less than 0.5");
//         else
//             reject("Number is not Less than 0.5");
//     }, 1000);
// });

// console.log(request);


// const user = ["Mayuresh", "Hitesh", "Mitanshu", "Jayesh", "Pratik"]
// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const num = Math.floor(Math.random() * 10);
//         if (num >= 0 && num <= user.length) {
//             resolve(`User = ${user[num]}`);
//         }
//         else {
//             reject("User array length is greater than 5")
//         }
//     }, 1000);
// })

// console.log(request);

// request
//     .then((resolveMessage) => {
//         console.log({ resolveMessage });
//     })
//     .catch((rejectMessage) => {
//         console.log({ rejectMessage });
//     })
//     .finally(() => {
//         console.log("Request Completed");
//     })




// const instagramUser = [
//     {
//         userId: 0,
//         posts: [
//             {
//                 caption: "Hitesh Bhurya",
//                 imageurl: "#",
//                 comments: ["Chota don mhantas male", "Flower nahi Fire hain main"]
//             },
//         ],
//     },

//     {
//         userId: 1,
//         posts: [
//             {
//                 caption: "Pratik Saadu",
//                 imageurl: "#",
//                 comments: ["Pushpa Raj", "Nice Click"]
//             },
//         ],
//     },
// ];


// function fetchUser(userId, callback) {
//     setTimeout(() => {
//         if (userId >= instagramUser.length) {
//             callback("Invalid userId");
//         }
//         else {
//             callback(null, instagramUser[userId]);
//         }
//     }, 2000);
// }

// function fetchPosts(user, callback) {
//     setTimeout(() => {
//         if (user?.posts?.length) callback(null, user.posts[0]);
//         else callback("User has not posted anything");
//     }, 2000)
// }

// function fetchComment(post, callback) {
//     setTimeout(() => {
//         if (post?.comments?.length) callback(null, post.comments);
//         else callback("This post has no Comments!!!");

//     }, 2000)
// }

// function giveRandomNumber(high) {
//     return Math.floor(Math.random() * high)
// }

// fetchUser(giveRandomNumber(instagramUser.length), (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     fetchPosts(data, (error, data) => {
//         if (error) {
//             console.log(error);
//             return;
//         }

//         fetchComment(data, (error, data) => {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             console.log({ comments: data });
//         });
//     });
// })


//Coding in Promises 


// function fetchUser(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId >= instagramUsers.length) reject("invalid userId");
//             else resolve(instagramUsers[userId]);
//         }, 1000);
//     });
// }

// function fetchPosts(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (user?.posts?.length) resolve(user.posts[0]);
//             else reject("Nothing posted");
//         }, 1000);
//     });
// }

// function fetchComments(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (post?.comments?.length) resolve(post.comments);
//             else reject("User post has no commnets");
//         }, 1000);
//     });
// }

// fetchUser(giveRandomNumber(instagramUsers.length * 2))
//     .then((data) => {
//         return fetchPosts(data);
//     })
//     .then((data) => {
//         return fetchComments(data);
//     })
//     .then((data) => {
//         console.log({ comments: data });
//     })
//     .catch((error) => {
//         console.log(error);
//     });



const products = [{
        pid: 1,
        pname: "Samsung S25 Ultra",
        quantity: 5
    },
    {
        pid: 2,
        pname: "Iphone 17 pro max",
        quantity: 3
    },
    {
        pid: 3,
        pname: "IQOO Neo 7 Pro",
        quantity: 0
    }
];

const cart = [];

function giveRandomNumber(high) {
    return Math.floor(Math.random() * high);
}

function fetchProduct(pId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pId >= products.length) {
                reject("Product not found");
            } else {
                resolve(products[pId]);
            }
        }, 1000);
    });
}


function isProductAvailable(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products.qty > 0) {
                resolve(product)
            } else {
                reject("Product is Out of Stock!!");
            }
        }, 1000);
    });
}


function isProductAlereadyInCart(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exists = cart.find(p => p.pId === product.pId);

            if (exists) {
                reject("Product already in cart");
            } else {
                resolve(product);
            }
        }, 1000)
    })
}
fetchProduct(giveRandomNumber(products.length))
    .then((product) => {
        console.log("Product: ", product);
        return isProductAvailable(product);
    }).then((product) => {
        return isProductAlereadyInCart(product);
    })
    .then((product) => {
        cart.push(product);
        console.log("Product added in cart")
    })
    .catch((error) => {
        console.error(error);
    });