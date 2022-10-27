import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { initCircleGraph } from "./circleGraph";
import { trimString, compareAnswer, findCorrectAnswerIndex } from "./helperFunctions";

export const submitQuiz = (answers, questions) => {
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

        if (resultType === "score") resultValue.innerText = `${(GLOBALS.getQuizScore() / GLOBALS.getQuizSettings().amountOfQuestions) * 100}%`;
        if (resultType === "total questions") resultValue.innerText = GLOBALS.getQuizSettings().amountOfQuestions;
        if (resultType === "answered correct") resultValue.innerText = GLOBALS.getQuizScore();
        if (resultType === "topic") resultValue.innerText = "Random";
        if (resultType === "difficulty") resultValue.innerText = GLOBALS.getQuizSettings().difficulty;
        if (resultType === "final")
            resultValue.innerText = (GLOBALS.getQuizScore() / GLOBALS.getQuizSettings().amountOfQuestions) * 100 >= 50 ? "Pass" : "Fail";
    });

    initCircleGraph((GLOBALS.getQuizScore() / GLOBALS.getQuizSettings().amountOfQuestions) * 100);

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
