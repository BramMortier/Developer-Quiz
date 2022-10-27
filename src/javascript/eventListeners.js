import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { submitQuiz } from "./submitQuiz";
import { changeScreen } from "./screenNav";
import { displayQuestion, highlightSelectedAnswer } from "./renderQuestion";

export const initEvents = () => {
    // Button Actions
    CONSTS.backBtns.map((btn) => {
        btn.addEventListener("click", () => {
            changeScreen(CONSTS.startScreen);
        });
    });

    CONSTS.settingsBtn.addEventListener("click", () => {
        changeScreen(CONSTS.settingsScreen);
    });

    CONSTS.highscoresBtn.addEventListener("click", () => {
        changeScreen(CONSTS.highscores);
    });

    CONSTS.quitBtn.addEventListener("click", () => {
        window.close();
    });

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
};
