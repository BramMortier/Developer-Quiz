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

// Start event
CONSTS.startBtn.addEventListener("click", () => {
    startNewQuiz();
    changeScreen(CONSTS.questionScreen);
});

// Quiz init
const startNewQuiz = async () => {
    GLOBALS.setQuizSettings(quizSettings);
    GLOBALS.setQuizData(await fetchQuiz());
    GLOBALS.createAnswerStorage(GLOBALS.getQuizData());
    GLOBALS.setQuestionIndex(1);
    displayQuestion(GLOBALS.getQuizData());
};
