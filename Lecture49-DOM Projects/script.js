class Questions {
    constructor({ id, text, options, correctOption, type }) {
        this.id = id;
        this.text = text;
        this.options = options;
        this.correctOption = correctOption;
        this.type = type;
    }
}

const questionsData = [
    {
        id: 1,
        text: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mode Language", "Home Tool Markup Language"],
        correctOption: 0,
        type: "mcq"
    },
    {
        id: 2,
        text: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correctOption: 2,
        type: "mcq"
    },
    {
        id: 3,
        text: "Inside which HTML element do we put JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        correctOption: 1,
        type: "mcq"
    },
    {
        id: 4,
        text: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "<!-- -->", "#"],
        correctOption: 0,
        type: "mcq"
    },
    {
        id: 5,
        text: "Which method is used to parse a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "Object.parseJSON()"],
        correctOption: 0,
        type: "mcq"
    },
    {
        id: 6,
        text: "Which keyword declares a block-scoped variable in JavaScript?",
        options: ["var", "int", "let", "scope"],
        correctOption: 2,
        type: "mcq"
    },
    {
        id: 7,
        text: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "font", "styles"],
        correctOption: 0,
        type: "mcq"
    },
    {
        id: 8,
        text: "What is the correct syntax to output 'Hello World' in JavaScript?",
        options: ["print('Hello World')", "console.log('Hello World')", "echo('Hello World')", "document.writeConsole('Hello World')"],
        correctOption: 1,
        type: "mcq"
    },
    {
        id: 9,
        text: "Which built-in method removes the last element from an array?",
        options: ["shift()", "remove()", "pop()", "delete()"],
        correctOption: 2,
        type: "mcq"
    },
    {
        id: 10,
        text: "Which event occurs when a user clicks an HTML element?",
        options: ["onmouseover", "onchange", "onmouseclick", "onclick"],
        correctOption: 3,
        type: "mcq"
    }
];

class Quiz {
    constructor(questions, duration) {
        this.questions = questions;
        this.duration = duration;
        this.currentQuestionIndex = 0;
        this.userResponse = {};
        this.score = 0;
        this.timer = null;
    }



    start() {
        this.startTimer();
        this.CurrrentQuestion();
    }

    displayOptions(qidx) {
        const optionsUl = document.querySelector("ul");
        const options = this.questions[qidx].options;
        optionsUl.innerHTML = options.map((option, index) => {
            return `<li data-option-index="${index}">${option}</li>`
        }).join("");
    }

    CurrrentQuestion() {
        const idx = this.currentQuestionIndex;

        const questionTextElement = document.querySelector("p");
        questionTextElement.textContent = this.questions.questionsData[idx].text;

        this.displayOptions(idx);
    }

    PrevQuestion() {
        if (this.currentQuestionIndex == 0) {
            return;
        }
        if (this.currentQuestionIndex == this.questions.length - 2) {
            const nextButton = document.querySelector(".buttons").lastElementChild;
            nextButton.textContent = "Next";
        }

        this.currentQuestionIndex--;
        this.CurrrentQuestion();
    }

    NextQuestion() {
        if (this.currentQuestionIndex == this.questions.length - 1) {
            this.submit();
            return;
        }
        if (this.currentQuestionIndex == this.questions.length - 2) {
            const nextButton = document.querySelector(".buttons").lastElementChild;
            nextButton.textContent = "Submit";
        }
        this.currentQuestionIndex++;
        this.CurrrentQuestion();
    }

    calculateScore() {
        const qIdx = this.currentQuestionIndex;
        for (let Questions of this.userResponse) {
            const optionIdx = this.userResponse[qIdx].correctOption;
            const correctOption = this.questions[qIdx].correctOption;
            if (correctOption === optionIdx) {
                this.score += 1;
            }

        }
    }

    captureUserResponse(userSelectedOptionIdx) {
        const qidx = this.currentQuestionIndex;
        this.userResponse[qidx] = userSelectedOptionIdx;
    }

    startTimer() {
        const timerElement = document.querySelector(".timer");
        let remainingTime = this.duration * 60;
        this.timer = setInterval(() => {
            remainingTime--;
            const hr = String(Math.floor(remainingTime / 3600)).padStart(2, '0');
            const min = String(Math.floor((remainingTime / 60) % 60)).padStart(2, '0');
            const sec = String(Math.floor(remainingTime % 60)).padStart(2, '0');
            timerElement.textContent = `${hr}:${min}:${sec}`;
            if (remainingTime <= 0) {
                clearInterval(this.timer);
                alert("Quiz Submitted!");

            }
        }, 1000);
    }

    submit() {
        this.calculateScore();
    }
}

const quiz = new Quiz(questionsData, 10);

quiz.start();

const options = document.querySelector(".options");
const prevButton = document.querySelector(".buttons").children[0];
const nextButton = document.querySelector(".buttons").children[1];





options.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        const optionIdx = Number(e.target.dataset.optionIdx);
        quiz.captureUserResponse(optionIdx);
    }
    quiz.captureUserResponse();
});
prevButton.addEventListener("click", () => {
    quiz.PrevQuestion();
});
nextButton.addEventListener("click", () => {
    quiz.NextQuestion();
});