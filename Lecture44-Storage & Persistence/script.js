let key = "Name1";
let value = "Patil";
let value2 = "Mayuresh";

localStorage.setItem(key, value);
localStorage.setItem(key, value2);  //Latest value will be print 

localStorage.setItem("Name2", "pratik");
localStorage.setItem("Name3", "hitesh");
localStorage.setItem("Name4", "mitanshu");
localStorage.setItem("Name5", "bhavesh");

console.log(localStorage.getItem(key));


//localStorage.removeItem("key");  //To remove item from local storage
// console.log("Element after removal:", localStorage.getItem(key))

for (let i = 0; i < localStorage.length; i++) {
    let k = localStorage.key(i);
    console.log(`Key: ${k}, Value: ${localStorage.getItem(k)}`);
}


// localStorage.clear();  //To clear the entire local storage