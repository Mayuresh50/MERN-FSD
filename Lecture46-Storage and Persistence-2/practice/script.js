
const personalDetails = document.querySelector(".personal-details");
const contactDetails = document.querySelector(".contact-details");
const educationDetails = document.querySelector(".education-details");


const forms = [personalDetails, contactDetails, educationDetails];

const nextButtons = document.querySelectorAll(".next1, .next2");
const prevButtons = document.querySelectorAll(".prev1, .prev2");

let currentForm = 0;

for (let i = 0; i < forms.length; i++) {
    const inputs = forms[i].querySelectorAll("input");

    let formIncomplete = false;

    inputs.forEach((input) => {
        if (!sessionStorage.getItem(input.id)) {
            formIncomplete = true;
        }
    });

    if (formIncomplete) {
        currentForm = i;
        break;
    }
}

forms.forEach((form, i) => {
    form.style.display = i === currentForm ? "block" : "none";
});

nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const form = forms[currentForm];
        const inputs = form.querySelectorAll("input");

        let allFilled = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                allFilled = false;
            }
            sessionStorage.setItem(input.id, input.value);
        });

        if (!allFilled) {
            alert("Please fill all fields!");
            return;
        }

        if (currentForm === forms.length - 1) {
            alert("All forms submitted successfully!");
            sessionStorage.clear();
            return;
        }

        forms[currentForm].style.display = "none";
        currentForm++;
        forms[currentForm].style.display = "block";
    });
});

prevButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (currentForm === 0) return; // Already at first form

        forms[currentForm].style.display = "none";
        currentForm--;
        forms[currentForm].style.display = "block";
    });
});
