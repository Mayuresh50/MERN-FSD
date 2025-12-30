//Resize, Recall,throttling and debouncing

/*

// Resize and Scroll are browser events that trigger continuously when a user resizes the window or scrolls the page.
// Because these events fire many times per second, they can cause performance issues if heavy logic runs every time.
// Throttling and Debouncing are optimization techniques used to control how often a function executes.
// we limiting the no of function calls not event trigger
//Throttling is nothing but limiting the function call


*/
// window.addEventListener("scroll", () => {
//     console.log("scrolled")
// })

//Throttling using global variable
function handleScroll() {
    console.log("Scrolling Throttled");
}

// let isAllowed = true;

// function throttle(delay) {
//     if (!isAllowed) return;
//     handleScroll();
//     isAllowed = false;
//     setTimeout(() => {
//         isAllowed = true;
//     }, delay);
// }
// window.addEventListener("scroll", () => {
//     throttle(100);
// })

//Infinite scroll, Key down, Mouse hover and Resize are the best example

//Closure is used for wrapping
// function throtle(fn, delay) {
//     isAllowed = true;
//     return function() {
//         if (!isAllowed) return;
//         fn();
//         isAllowed = false
//         setTimeout(() => {
//             isAllowed = true;
//         }, delay);
//     };
// }
// const throttleScroll = throtle(handleScroll, 1000);
// window.addEventListener("scroll", throttleScroll);


//Debouncing :It means it wait for user to stop triggering the function again and again and finally executing function once
//It waits for to not triggering function or to stop user working
//for ex: door bell ranging


//throttling trigger recusrsively and debouncing trigger once

/* 
timeline of debouncing 
delay = 2s
below is the timeline when user has triggered the event
(t=0) => (t=2) => (t=4) => (t=8)  => stops triggering at all

at (t=7) and (t=11) => the function will be called
*/

function debouncing(fn, delay) {
    let timerId = null;
    return function(...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function saveInput(value) {
    console.log(value);
}
const debaounceSaveInput = debouncing(saveInput, 2000);
const input = document.querySelector("input");
input.addEventListener("input", () => {
    debaounceSaveInput(input.value);
});


/*
User interacted at t=0 => 
    fn has entered the macrotask queue(MTQ) be executed at t=0

User interacted at t=2 => 
    cleartimeout will remove this function from MTQ, as this fn() is not execute yet & fn() will again enter MTQ and will be executed at t=5

User interacted at t=4 => 
    cleartimeout will remove this function from MTQ, as this fn() is not execute yet & fn() will again enter MTQ and will be executed at t=7

At t=7 => 
    fn() will be executed successfully

User interacted at t=8 => 
    cleartimeout will remove this function from MTQ, as this fn() is not execute yet & fn() will again enter MTQ and will be executed at t=11

*/