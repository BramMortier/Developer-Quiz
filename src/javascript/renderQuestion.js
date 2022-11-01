import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { findCorrectAnswerIndex } from "./helperFunctions";

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
                GLOBALS.updateAnswerStorage(GLOBALS.getQuestionIndex(), index, correctAnswer);
                highlightSelectedAnswer(GLOBALS.getQuestionIndex());
            });
        }
    });
};
