// ------------------------------------------- //
// module imports
import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { submitQuiz } from "./submitQuiz";
import { changeScreen } from "./screenNav";
import {
    updateCounter,
    updateToggle,
    updateDifficulty,
    maxAmountOfQuestions,
    maxPossibleAnswers,
    generateQuizSettings,
    resetQuizSettings,
    updateTagResults,
    updateSelectedTags,
    testQuizSettings,
} from "./settings";
import { displayQuestion, highlightSelectedAnswer } from "./renderQuestion";
// ------------------------------------------- //

export const initEvents = () => {
    // Button actions
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

    // Quiz settings counter buttons
    CONSTS.amountOfQuestions.addEventListener("click", (e) => {
        updateCounter(e, maxAmountOfQuestions);
    });

    CONSTS.possibleAnswers.addEventListener("click", (e) => {
        updateCounter(e, maxPossibleAnswers);
    });

    CONSTS.tipsAllowed.addEventListener("click", (e) => {
        updateToggle(e);
    });

    CONSTS.timelimitActivated.addEventListener("click", (e) => {
        updateToggle(e);
    });

    // Quiz settings difficulty buttons
    CONSTS.difficultyBtns.map((btn) => {
        btn.addEventListener("click", (e) => {
            updateDifficulty(e);
        });
    });

    // Quiz settings tag search change events
    CONSTS.tagSearchbar.addEventListener("focus", () => {
        if (updateTagResults()) {
            CONSTS.tagResults.style.display = "flex";
        }
    });

    CONSTS.tagSearchbar.addEventListener("input", () => {
        CONSTS.tagResults.style.display = updateTagResults() ? "flex" : "none";
    });

    // Quiz settings control buttons
    CONSTS.applySettingsBtn.addEventListener("click", () => {
        updateSelectedTags();
        GLOBALS.setQuizSettings(generateQuizSettings());
        testQuizSettings();
    });

    CONSTS.resetSettingsBtn.addEventListener("click", () => {
        resetQuizSettings();
    });

    // Quiz submit logic
    CONSTS.submitQuizBtn.addEventListener("click", () => {
        submitQuiz(GLOBALS.getAnswerStorage(), GLOBALS.getQuizData());
        CONSTS.submitModal.classList.add("modal--hidden");
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

    // Modal events
    CONSTS.openSubmitModal.addEventListener("click", () => {
        CONSTS.submitModal.classList.remove("modal--hidden");
    });

    CONSTS.closeSubmitModal.addEventListener("click", () => {
        CONSTS.submitModal.classList.add("modal--hidden");
    });

    CONSTS.openHighscoreModal.addEventListener("click", () => {
        CONSTS.highscoreModal.classList.remove("modal--hidden");
    });

    CONSTS.closeHighscoreModal.addEventListener("click", () => {
        CONSTS.highscoreModal.classList.add("modal--hidden");
    });
};
