// ------------------------------------------- //
// sass entry point
import "../sass/style.scss";

// module imports
import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { initCircleGraph } from "./circleGraph";
import { changeScreen } from "./screenNav";
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
const startNewQuiz = async () => {
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

const compareAnswer = (answerEntry) => {
    if (answerEntry.selectedAnswer !== -1 && answerEntry.correctAnswer !== -1 && answerEntry.selectedAnswer === answerEntry.correctAnswer) {
        return true;
    }
};

const submitQuiz = (answers, questions) => {
    CONSTS.questionComparisonList.innerHTML = "";
    GLOBALS.setQuizScore(0);

    answers.map((answer) => {
        if (compareAnswer(answer)) {
            GLOBALS.setQuizScore(GLOBALS.getQuizScore() + 1);
        }
    });

    CONSTS.resultElements.map((el) => {
        let resultType = el.childNodes[1].innerText.slice(0, -1).toLowerCase();
        let resultValue = el.childNodes[3];

        if (resultType === "score") resultValue.innerText = `${(GLOBALS.getQuizScore() / quizSettings.amountOfQuestions) * 100}%`;
        if (resultType === "total questions") resultValue.innerText = quizSettings.amountOfQuestions;
        if (resultType === "answered correct") resultValue.innerText = GLOBALS.getQuizScore();
        if (resultType === "topic") resultValue.innerText = "Random";
        if (resultType === "difficulty") resultValue.innerText = quizSettings.difficulty;
        if (resultType === "final") resultValue.innerText = (GLOBALS.getQuizScore() / quizSettings.amountOfQuestions) * 100 >= 50 ? "Pass" : "Fail";
    });

    initCircleGraph((GLOBALS.getQuizScore() / quizSettings.amountOfQuestions) * 100);

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
        CONSTS.questionComparisonList.appendChild(questionComparisonEl);
    });
};

const trimString = (text) => {
    return text.length > 60 ? `${text.substring(0, 60)}...` : text;
};

// Question pagination logic
CONSTS.nextPageBtn.addEventListener("click", () => {
    if (GLOBALS.getQuestionIndex() > quizSettings.amountOfQuestions - 1) GLOBALS.setQuestionIndex(0);
    GLOBALS.setQuestionIndex(GLOBALS.getQuestionIndex() + 1);
    displayQuestion(GLOBALS.getQuizData());
    highlightSelectedAnswer(GLOBALS.getQuestionIndex());
});

CONSTS.prevPageBtn.addEventListener("click", () => {
    if (GLOBALS.getQuestionIndex() <= 1) GLOBALS.setQuestionIndex(quizSettings.amountOfQuestions + 1);
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

// Finds the correct answer by index in the correct-answers object
export const findCorrectAnswerIndex = (answers) => {
    let correctIndex;
    answers.map((answer, index) => {
        if (answer == "true") correctIndex = index;
    });
    return correctIndex;
};
