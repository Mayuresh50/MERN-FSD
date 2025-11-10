console.log(window.document.body)
console.log(document.body)

//Note the difference between these two styles
console.log(document.body.children)
console.log(document.body.childNodes)

//Note the difference between these two styles
console.log(document.body.firstChild)
console.log(document.body.firstElementChild)

//Selectors in Div
console.log(document.querySelector("div"))
console.log(document.querySelectorAll("div"))

console.log(document.querySelector(".first-div"))
console.log(document.querySelector("#second-div"))

console.log(document.querySelector("div.first-div"))
console.log(document.querySelector("div#second-div"))

//Output of both is Null bcoz Space is not valid in between . and div and wrong spelling is not allowed
// console.log(document.querySelector("div .first-div"))
// console.log(document.querySelector("divi.first-div"))

//Elements to get by Id, Class and Tag
console.log(document.getElementsByClassName("first-div"));
console.log(document.getElementById("second-div"));
console.log(document.getElementsByTagName("div"))


const para = document.querySelector("p");
console.log(para);
// para.style.color = "blue";
// para.style.backgroundColor = "yellow"


// const imageElement = document.querySelector("img");
// imageElement.setAttribute("src", "bg.png")

const divElement = document.querySelector("div.first-div");
divElement.setAttribute("data-now", "10000")

//deleting an attribute, by setting its value to null
divElement.setAttribute("data-now", null)

// console.log(para.innerHTML)
// console.log(para.textContent)


para.innerHTML = "<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vitae?</strong>"    //It is used to make content bold using Strong tag

const secondpara = document.querySelector(".second-para");
secondpara.textContent = "Mayuresh Kailas Patil"


// Deleting an classname using old method
const sectionElement = document.querySelector(".class1")
// const list = sectionElement.className.split(" ");
// list.splice(2, 1)
// console.log(list)


//Deleting an element using Classlist
console.log(sectionElement.classList);
sectionElement.classList.remove("class3");
console.log(sectionElement.classList)

sectionElement.classList.add("class5")
console.log(sectionElement.classList)

sectionElement.classList.toggle("class5")
console.log(sectionElement.classList)