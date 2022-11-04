// ------------------------------------------- //
// sass entry point
import "../sass/style.scss";

// module imports
import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { displayQuestion } from "./renderQuestion";
import { changeScreen } from "./screenNav";
import { fetchQuiz } from "./fetchQuiz";
import { renderHighscores } from "./highscores";
import { generateQuizSettings } from "./settings";
import { initEvents } from "./eventListeners";
// ------------------------------------------- //

// Window load
window.onload = () => {
    GLOBALS.initSessionStorage();
    GLOBALS.initLocalStorage();
    GLOBALS.setHighscores(GLOBALS.getHighscores());
    GLOBALS.setQuizSettings(generateQuizSettings());
    renderHighscores();
    initEvents();
};

// Start event
CONSTS.startBtn.addEventListener("click", () => {
    startNewQuiz();
    changeScreen(CONSTS.questionScreen);
});

// Quiz start
const startNewQuiz = async () => {
    GLOBALS.setQuizSettings(generateQuizSettings());
    GLOBALS.setQuizData(await fetchQuiz());
    GLOBALS.createAnswerStorage(GLOBALS.getQuizData());
    GLOBALS.setQuestionIndex(1);
    if (GLOBALS.getQuizSettings().tipsOn === true) GLOBALS.createHints(GLOBALS.getQuizData());
    displayQuestion(GLOBALS.getQuizData());
};
