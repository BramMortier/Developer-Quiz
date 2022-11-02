// ------------------------------------------- //
// sass entry point
import "../sass/style.scss";

// module imports
import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { displayQuestion } from "./renderQuestion";
import { changeScreen } from "./screenNav";
import { fetchQuiz } from "./fetchQuiz";
import { generateQuizSettings } from "./settings";
import { initEvents } from "./eventListeners";
// ------------------------------------------- //

window.onload = () => {
    GLOBALS.initSessionStorage();
    GLOBALS.setQuizSettings(generateQuizSettings());
    initEvents();
};

// Start event
CONSTS.startBtn.addEventListener("click", () => {
    startNewQuiz();
    changeScreen(CONSTS.questionScreen);
});

// Quiz init
const startNewQuiz = async () => {
    GLOBALS.setQuizSettings(generateQuizSettings());
    GLOBALS.setQuizData(await fetchQuiz());
    GLOBALS.createAnswerStorage(GLOBALS.getQuizData());
    GLOBALS.setQuestionIndex(1);
    displayQuestion(GLOBALS.getQuizData());
};
