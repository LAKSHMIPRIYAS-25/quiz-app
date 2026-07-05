const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

const quiz = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        answer: 2
    },
    {
        question: "Which language is used to make web pages interactive?",
        options: [
            "CSS",
            "JavaScript",
            "C",
            "SQL"
        ],
        answer: 1
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Google",
            "Netscape",
            "Apple"
        ],
        answer: 2
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;

loadQuestion();

function loadQuestion() {

    selectedAnswer = -1;

    question.textContent = quiz[currentQuestion].question;

    options.forEach((button, index) => {

        button.textContent = quiz[currentQuestion].options[index];

        button.classList.remove("btn-success");
        button.classList.add("btn-outline-primary");

    });

}

options.forEach((button, index) => {

    button.addEventListener("click", () => {

        selectedAnswer = index;

        options.forEach(btn => {

            btn.classList.remove("btn-success");
            btn.classList.add("btn-outline-primary");

        });

        button.classList.remove("btn-outline-primary");
        button.classList.add("btn-success");

    });

});

nextBtn.addEventListener("click", () => {

    if (selectedAnswer === -1) {

        alert("Please select an answer.");
        return;

    }

    if (selectedAnswer === quiz[currentQuestion].answer) {

        score++;

    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {

        loadQuestion();

    } else {

        document.querySelector(".card").innerHTML = `

            <h2 class="text-center">Quiz Completed 🎉</h2>

            <h3 class="text-center mt-3">
                Your Score: ${score} / ${quiz.length}
            </h3>

            <div class="text-center mt-4">
                <button class="btn btn-primary" onclick="location.reload()">
                    Restart Quiz
                </button>
            </div>

        `;

    }

});