const mysymbol = Symbol("key1");
const JsUser = {
    name: "Hitesh",
    age: 22,
    [mysymbol]: "myKey1",   //Correct way to define a symbol and when object is printed it will print like  [Symbol(key1)] :'mykey1' 
    location: "pune",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
}      //This is Object Declaration

// console.log(JsUser.email);    //Valid Method 
// console.log(JsUser["email"]);   //Suitable method mainly used 
// console.log(JsUser[mysymbol]);  //correct way to access symbol 
// Object.freeze(JsUser);   //This will make the object immutable means no changes can be done to the object
console.log(JsUser)
// JsUser.email = "newemail@gmail.com";
// console.log(JsUser)