// ------------------------------------- //
// sass entry point
import "../sass/style.scss";

// module imports
import { initCircleGraph } from "./circleGraph";
// ------------------------------------- //

// Screen navigation logic

// Screens
const startScreen = document.querySelector(".startscreen");
const questionScreen = document.querySelector(".question");
const settingsScreen = document.querySelector(".settings");
const highscores = document.querySelector(".highscores");
const resultScreen = document.querySelector(".results");

const pages = [startScreen, questionScreen, settingsScreen, highscores, resultScreen];

// Buttons
const startBtn = document.getElementById("start-btn");
const quitBtn = document.getElementById("quit-btn");
const settingsBtn = document.getElementById("settings-btn");
const backBtns = [...document.querySelectorAll(".back-btn")];
const highscoresBtn = document.getElementById("highscores-btn");

const changeScreen = (destinationScreen) => {
    destinationScreen.classList.remove("container--inactive");

    pages.map((page) => {
        if (page !== destinationScreen) {
            page.classList.add("container--inactive");
        }
    });
};

// Button Actions
backBtns.map((btn) => {
    btn.addEventListener("click", () => {
        changeScreen(startScreen);
    });
});

settingsBtn.addEventListener("click", () => {
    changeScreen(settingsScreen);
});

startBtn.addEventListener("click", () => {
    changeScreen(questionScreen);
    startNewQuiz();
});

highscoresBtn.addEventListener("click", () => {
    changeScreen(highscores);
});

quitBtn.addEventListener("click", () => {
    window.close();
});

// Setting Elements
const amountOfQuestions = document.getElementById("amount-of-questions");
const possibleAnswers = document.getElementById("possible-answers");
const tipsAllowed = document.getElementById("tips-allowed");
const timelimitActivated = document.getElementById("timelimit-activated");

// const counters = [...document.querySelectorAll(".counter-btn")];
// const toggles = [...document.querySelectorAll(".toggle-btn")];

// Quiz settings logic
let quizSettings = {
    amountOfQuestions: Number(amountOfQuestions.innerText),
    possibleAnswers: Number(possibleAnswers.innerText),
    tipsOn: tipsAllowed.innerText === "Off" ? false : true,
    timelimitOn: timelimitActivated.innerText === "Off" ? false : true,
    difficulty: "Easy",
};

if (!localStorage.getItem("quizSettings")) {
    localStorage.setItem("quizSettings", JSON.stringify(quizSettings));
}

const updateQuizSettings = () => {
    localStorage.setItem("quizSettings", quizSettings);
};

// Fetching data
const fetchQuiz = async () => {
    let url = new URL("https://quizapi.io/api/v1/questions");

    let params = {
        apiKey: "Yk930yLz3W65YXkbfkG5Cu1E3Aduuk2LqfAsO1k1",
        limit: quizSettings.amountOfQuestions,
        difficulty: quizSettings.difficulty,
    };

    url.search = new URLSearchParams(params).toString();

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data;
};

// Quiz init
let quizData;

const startNewQuiz = async () => {
    quizData = await fetchQuiz();
    createAnswerStorage(quizData);
    questionIndex = 1;
    displayQuestion(quizData);
};

// Quiz answer storage
let answerStorage = [];

const createAnswerStorage = (data) => {
    answerStorage = data.map((answer, index) => {
        return {
            selectedAnswer: undefined,
            correctAnswer: undefined,
        };
    });
};

const updateAnswerStorage = (questionIndex, selectedAnswer, correctAnswer) => {
    answerStorage[questionIndex - 1] = {
        selectedAnswer: selectedAnswer,
        correctAnswer: correctAnswer,
    };
};

// Quiz submit logic
const submitQuizBtn = document.getElementById("submit-quiz-btn");
const questionComparisonList = document.getElementById("question-comparison-list");
const resultElements = [...document.querySelectorAll(".results__infopiece")];
let quizScore = 0;

submitQuizBtn.addEventListener("click", () => {
    submitQuiz(answerStorage, quizData);
    changeScreen(resultScreen);
});

const compareAnswer = (answerEntry) => {
    if (
        answerEntry.selectedAnswer !== undefined &&
        answerEntry.correctAnswer !== undefined &&
        answerEntry.selectedAnswer === answerEntry.correctAnswer
    ) {
        return true;
    }
};

const submitQuiz = (answers, questions) => {
    questionComparisonList.innerHTML = "";
    quizScore = 0;

    answers.map((answer) => {
        if (compareAnswer(answer)) {
            quizScore++;
        }
    });

    resultElements.map((el) => {
        let resultType = el.childNodes[1].innerText.slice(0, -1).toLowerCase();
        let resultValue = el.childNodes[3];

        if (resultType === "score") resultValue.innerText = `${(quizScore / quizSettings.amountOfQuestions) * 100}%`;
        if (resultType === "total questions") resultValue.innerText = quizSettings.amountOfQuestions;
        if (resultType === "answered correct") resultValue.innerText = quizScore;
        if (resultType === "topic") resultValue.innerText = "Random";
        if (resultType === "difficulty") resultValue.innerText = quizSettings.difficulty;
        if (resultType === "final") resultValue.innerText = (quizScore / quizSettings.amountOfQuestions) * 100 >= 50 ? "Pass" : "Fail";
    });

    initCircleGraph((quizScore / quizSettings.amountOfQuestions) * 100);

    questions.map((question, index) => {
        let answerCorrect = compareAnswer(answers[index]);
        let questionComparisonEl = document.createElement("div");
        let answerArray = Object.values(question.answers);

        let correctAnswer = answerArray[findCorrectAnswerIndex(Object.values(question.correct_answers))];
        let givenAnswer = answerArray[answers[index].selectedAnswer];

        if (givenAnswer == undefined) givenAnswer = "No answer selected";

        questionComparisonEl.classList.add("results__question");
        if (!answerCorrect) questionComparisonEl.classList.add("results__question--wrong");

        questionComparisonEl.innerHTML = `
            <div class="results__question-info">
                <p>${trimString(question.question)}</p>
                <div class="results__question-icon">
                    <img src="./src/images/icons/${answerCorrect ? `check` : `wrong`}.svg" alt="checkmark" />
                </div>
            </div> 
            <div class="results__answer-info">
                <div class="results__wrong-answer">
                    <p>Your answer</p>
                    <p class="red">${givenAnswer.replace("<", "&lt;")}</p>
                </div>
                <div class="results__correct-answer">
                    <p>Correct answer</p>
                    <p class="green">${correctAnswer.replace("<", "&lt;")}</p>
                </div>
            </div>
        `;
        questionComparisonList.appendChild(questionComparisonEl);
    });
};

const trimString = (text) => {
    return text.length > 60 ? `${text.substring(0, 60)}...` : text;
};

// Question pagination logic
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");
let questionIndex;

nextPageBtn.addEventListener("click", () => {
    if (questionIndex > quizSettings.amountOfQuestions - 1) questionIndex = 0;
    questionIndex++;
    displayQuestion(quizData);
    highlightSelectedAnswer(questionIndex);
});

prevPageBtn.addEventListener("click", () => {
    if (questionIndex <= 1) questionIndex = quizSettings.amountOfQuestions + 1;
    questionIndex--;
    displayQuestion(quizData);
    highlightSelectedAnswer(questionIndex);
});

// Display current question
const question = document.getElementById("question");
const answerList = document.getElementById("answer-list");
const questionNav = document.getElementById("question-nav");

const highlightSelectedAnswer = (questionIndex) => {
    let selectedIndex = answerStorage[questionIndex - 1].selectedAnswer;

    if (selectedIndex == undefined) return;
    [...answerList.children].map((el, index) => {
        if (selectedIndex === index) {
            el.classList.add("question__answer--selected");
        } else {
            el.classList.remove("question__answer--selected");
        }
    });
};

const renderQuestionNavigation = (questions) => {
    questionNav.innerHTML = "";

    questions.map((question, index) => {
        let questionNumberEl = document.createElement("li");

        if (index === questionIndex - 1) questionNumberEl.classList.add("question__number--selected");
        questionNumberEl.classList.add("question__number");

        questionNumberEl.addEventListener("click", (e) => {
            questionIndex = Number(e.target.innerText) > 9 ? Number(e.target.innerText) : Number(e.target.innerText.slice(1));
            displayQuestion(quizData);
            highlightSelectedAnswer(questionIndex);
        });

        questionNumberEl.innerText = index >= 9 ? index + 1 : `0${index + 1}`;
        questionNav.appendChild(questionNumberEl);
    });
};

const displayQuestion = (data) => {
    renderQuestionNavigation(data);

    let currentQuestion = data[questionIndex - 1];
    // console.log(currentQuestion);

    let currentQuestionAnswers = Object.values(currentQuestion.answers);
    let correctAnswer = findCorrectAnswerIndex(Object.values(currentQuestion.correct_answers));
    // console.log(correctAnswer);

    question.innerText = currentQuestion.question;
    answerList.innerHTML = "";

    currentQuestionAnswers.map((answer, index) => {
        if (answer !== null) {
            let answerEl = document.createElement("li");
            answerEl.classList.add("question__answer");
            answerEl.innerHTML = `<p>${answer.replace("<", "&lt;")}</p>`;

            answerList.appendChild(answerEl);

            answerEl.addEventListener("click", () => {
                updateAnswerStorage(questionIndex, index, correctAnswer);
                highlightSelectedAnswer(questionIndex);
            });
        }
    });
};

// Finds the correct answer by index in the correct-answers object
const findCorrectAnswerIndex = (answers) => {
    let correctIndex;
    answers.map((answer, index) => {
        if (answer == "true") correctIndex = index;
    });
    return correctIndex;
};
