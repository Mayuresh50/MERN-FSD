//Event Propagation : Event kaise spread ho raha hai ek element se dusre element me

// By default event propagation is in bubbling phase

// 1.Bubling phase : Hum target se child se parent element ki taraf jayenge
// 2.Capturing phase : Parent se child element ki taraf jayenge (Sabse bahar vale se Andar vale tak jana )
// 3.Target phase : Jis Element pe event happen hua hai wo element

//add click event listener 
const outer = document.querySelector(".container");
const inner = document.querySelector(".inner-div");
const h1Element = document.querySelector("h1");


outer.addEventListener("click", (event) => {
    console.log("Outer Div Clicked");
    outer.style.background = "yellow";
}, true);

inner.addEventListener("click", (event) => {
    event.stopPropagation(); // stop the event propagation at inner div
    console.log("Inner Div Clicked");
    // inner.style.background = "red";
}, false);

h1Element.addEventListener("click", (event) => {
    console.log("H1 Element Clicked");
    h1Element.style.background = "lightblue";
}, true);



