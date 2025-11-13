const users = [];
const submitbtn = document.querySelector("button");
const form = document.querySelector("form");

submitbtn.addEventListener("click", (event) => {
    event.preventDefault();
    const user = {};
    user.name = document.querySelector("input[type=text]").value;
    user.number = document.querySelector("input[type=number]").value;
    user.gender = document.querySelector("input[name=gender]:checked")?.value;
    user.isTnCAgreed = document.querySelector("input[type=checkbox]")?.checked;
    user.city = document.querySelector("#city")?.value;

    if (!user.name || !user.number || !user.gender || !user.isTnCAgreed || !user.city)
        alert("Please fill all the details");

    users.push(user);
    form.reset();
    console.log(users);
});






//How to make a button disabled until TnC is agreed
//email validation
//phone number validation
//space between mobile number