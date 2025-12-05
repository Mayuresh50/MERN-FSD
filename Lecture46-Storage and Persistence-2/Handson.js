//Has Local storage or not
// function checkLocalStorage() {
//     try {
//         const key = "key";
//         const value = "value";
//         // const bigData = "A".repeat(25*1000*1000); //25 MB of data, will throw quota exceeded error
//         localStorage.setItem(key, value);
//         // localStorage.setItem(key, bigData);
//         if (localStorage.getItem(key) == value) {
//             return true;
//         }
//         return false;
//     }
//     catch (e) {
//         return false;
//     }
// }


//Autosave Program :
// const autoSaveKey = "autoSaveKey";
// const textArea = document.querySelector("textarea");

// textArea.value = localStorage.getItem(autoSaveKey);

// textArea.addEventListener("input", () => {
//     const newValue = textArea.value;
//     localStorage.setItem(autoSaveKey, newValue);
// });
// localStorage.clear();


//save array in local storage :
// const arr = [2, 3, 5, 5, 4, 5, 5];
// localStorage.setItem("arr", arr.join(" "));
// const result = localStorage.getItem("arr").split(" ");
// console.log(result);

// const obj = {
//     name: "Mayuresh",
//     age: 23
// };

// const objInString = JSON.stringify(obj);
// localStorage.setItem("obj", objInString);
// // console.log(objInString);
// console.log(localStorage.getItem("obj"));

