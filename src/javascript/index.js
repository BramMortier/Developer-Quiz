// ------------------------------------------- //
// sass entry point
import "../sass/style.scss";

// module imports
import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { changeScreen } from "./screenNav";
import { submitQuiz } from "./submitQuiz";
import { findCorrectAnswerIndex } from "./helperFunctions";
// ------------------------------------------- //

window.onload = () => {
    GLOBALS.initSessionStorage();
};

// Button Actions
CONSTS.backBtns.map((btn) => {
    btn.addEventListener("click", () => {
        changeScreen(CONSTS.startScreen);
    });
});

CONSTS.settingsBtn.addEventListener("click", () => {
    changeScreen(CONSTS.settingsScreen);
});

CONSTS.startBtn.addEventListener("click", () => {
    changeScreen(CONSTS.questionScreen);
    startNewQuiz();
});

CONSTS.highscoresBtn.addEventListener("click", () => {
    changeScreen(CONSTS.highscores);
});

CONSTS.quitBtn.addEventListener("click", () => {
    window.close();
});

// Quiz settings logic
let quizSettings = {
    amountOfQuestions: Number(CONSTS.amountOfQuestions.innerText),
    possibleAnswers: Number(CONSTS.possibleAnswers.innerText),
    tipsOn: CONSTS.tipsAllowed.innerText === "Off" ? false : true,
    timelimitOn: CONSTS.timelimitActivated.innerText === "Off" ? false : true,
    difficulty: "Easy",
};

// Fetching data
const fetchQuiz = async () => {
    let url = new URL("https://quizapi.io/api/v1/questions");

    let params = {
        apiKey: "Yk930yLz3W65YXkbfkG5Cu1E3Aduuk2LqfAsO1k1",
        limit: GLOBALS.getQuizSettings().amountOfQuestions,
        difficulty: GLOBALS.getQuizSettings().difficulty,
    };

    url.search = new URLSearchParams(params).toString();

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data;
};

// Quiz init
const startNewQuiz = async () => {
    GLOBALS.setQuizSettings(quizSettings);
    GLOBALS.setQuizData(await fetchQuiz());
    createAnswerStorage(GLOBALS.getQuizData());
    GLOBALS.setQuestionIndex(1);
    displayQuestion(GLOBALS.getQuizData());
};

// Quiz answer storage
const createAnswerStorage = (data) => {
    let answerStorageBase = data.map((answer, index) => {
        return {
            selectedAnswer: -1,
            correctAnswer: -1,
        };
    });
    GLOBALS.setAnswerStorage(answerStorageBase);
};

const updateAnswerStorage = (questionIndex, selectedAnswer, correctAnswer) => {
    let answerStorageCurrent = GLOBALS.getAnswerStorage();
    answerStorageCurrent[questionIndex - 1] = {
        selectedAnswer: selectedAnswer,
        correctAnswer: correctAnswer,
    };
    GLOBALS.setAnswerStorage(answerStorageCurrent);
};

// Quiz submit logic
CONSTS.submitQuizBtn.addEventListener("click", () => {
    submitQuiz(GLOBALS.getAnswerStorage(), GLOBALS.getQuizData());
    changeScreen(CONSTS.resultScreen);
});

// Question pagination logic
CONSTS.nextPageBtn.addEventListener("click", () => {
    if (GLOBALS.getQuestionIndex() > GLOBALS.getQuizSettings().amountOfQuestions - 1) GLOBALS.setQuestionIndex(0);
    GLOBALS.setQuestionIndex(GLOBALS.getQuestionIndex() + 1);
    displayQuestion(GLOBALS.getQuizData());
    highlightSelectedAnswer(GLOBALS.getQuestionIndex());
});

CONSTS.prevPageBtn.addEventListener("click", () => {
    if (GLOBALS.getQuestionIndex() <= 1) GLOBALS.setQuestionIndex(GLOBALS.getQuizSettings().amountOfQuestions + 1);
    GLOBALS.setQuestionIndex(GLOBALS.getQuestionIndex() - 1);
    displayQuestion(GLOBALS.getQuizData());
    highlightSelectedAnswer(GLOBALS.getQuestionIndex());
});

// Display current question
export const highlightSelectedAnswer = (questionIndex) => {
    let selectedIndex = GLOBALS.getAnswerStorage()[questionIndex - 1].selectedAnswer;

    if (selectedIndex == undefined) return;
    [...CONSTS.answerList.children].map((el, index) => {
        if (selectedIndex === index) {
            el.classList.add("question__answer--selected");
        } else {
            el.classList.remove("question__answer--selected");
        }
    });
};

export const renderQuestionNavigation = (questions) => {
    CONSTS.questionNav.innerHTML = "";

    questions.map((question, index) => {
        let questionNumberEl = document.createElement("li");

        if (index === GLOBALS.getQuestionIndex() - 1) questionNumberEl.classList.add("question__number--selected");
        questionNumberEl.classList.add("question__number");

        questionNumberEl.addEventListener("click", (e) => {
            GLOBALS.setQuestionIndex(Number(e.target.innerText) > 9 ? Number(e.target.innerText) : Number(e.target.innerText.slice(1)));
            displayQuestion(GLOBALS.getQuizData());
            highlightSelectedAnswer(GLOBALS.getQuestionIndex());
        });

        questionNumberEl.innerText = index >= 9 ? index + 1 : `0${index + 1}`;
        CONSTS.questionNav.appendChild(questionNumberEl);
    });
};

export const displayQuestion = (data) => {
    renderQuestionNavigation(data);

    let currentQuestion = data[GLOBALS.getQuestionIndex() - 1];

    let currentQuestionAnswers = Object.values(currentQuestion.answers);
    let correctAnswer = findCorrectAnswerIndex(Object.values(currentQuestion.correct_answers));

    CONSTS.questionPhrase.innerText = currentQuestion.question;
    CONSTS.answerList.innerHTML = "";

    currentQuestionAnswers.map((answer, index) => {
        if (answer !== null) {
            let answerEl = document.createElement("li");
            answerEl.classList.add("question__answer");
            answerEl.innerHTML = `<p>${answer.replace("<", "&lt;")}</p>`;

            CONSTS.answerList.appendChild(answerEl);

            answerEl.addEventListener("click", () => {
                updateAnswerStorage(GLOBALS.getQuestionIndex(), index, correctAnswer);
                highlightSelectedAnswer(GLOBALS.getQuestionIndex());
            });
        }
    });
};
