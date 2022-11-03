// ------------------------------------------- //
// module imports
import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { initCircleGraph } from "./circleGraph";
import { trimString, compareAnswer, findCorrectAnswerIndex } from "./helperFunctions";
import { calculatePointsScore } from "./highscores";
// ------------------------------------------- //

export const submitQuiz = (answers, questions) => {
    CONSTS.questionComparisonList.innerHTML = "";
    GLOBALS.setQuizScore(0);

    answers.map((answer) => {
        if (compareAnswer(answer)) {
            GLOBALS.setQuizScore(GLOBALS.getQuizScore() + 1);
        }
    });

    CONSTS.quizPointsScore.innerText = calculatePointsScore(GLOBALS.getQuizScore());

    let scoreToPercentage = Math.round((GLOBALS.getQuizScore() / GLOBALS.getQuizSettings().amountOfQuestions) * 100);

    CONSTS.resultElements.map((el) => {
        let resultType = el.children[0].innerText.slice(0, -1).toLowerCase();
        let resultValue = el.children[1];

        if (resultType === "score") resultValue.innerText = `${scoreToPercentage}%`;
        if (resultType === "total questions") resultValue.innerText = GLOBALS.getQuizSettings().amountOfQuestions;
        if (resultType === "answered correct") resultValue.innerText = GLOBALS.getQuizScore();
        if (resultType === "topic")
            resultValue.innerText = GLOBALS.getQuizSettings().tags == "" ? "Random" : GLOBALS.getQuizSettings().tags.join(" ");
        if (resultType === "difficulty") resultValue.innerText = GLOBALS.getQuizSettings().difficulty;
        if (resultType === "final") resultValue.innerText = scoreToPercentage >= 50 ? "Pass" : "Fail";
    });

    initCircleGraph(scoreToPercentage);

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
