// ------------------------------------------- //
// sass entry point
import "../sass/style.scss";

// module imports
import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { displayQuestion } from "./renderQuestion";
import { changeScreen } from "./screenNav";
import { fetchQuiz } from "./fetchQuiz";
import { quizSettings } from "./settings";
import { initEvents } from "./eventListeners";
// ------------------------------------------- //

window.onload = () => {
    GLOBALS.initSessionStorage();
    initEvents();
};

CONSTS.startBtn.addEventListener("click", () => {
    changeScreen(CONSTS.questionScreen);
    startNewQuiz();
});

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

// Quiz init
const startNewQuiz = async () => {
    GLOBALS.setQuizSettings(quizSettings);
    GLOBALS.setQuizData(await fetchQuiz());
    createAnswerStorage(GLOBALS.getQuizData());
    GLOBALS.setQuestionIndex(1);
    displayQuestion(GLOBALS.getQuizData());
};
