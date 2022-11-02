// ------------------------------------------- //
// module imports
import * as CONSTS from "./constants";
// ------------------------------------------- //

export let maxAmountOfQuestions = 20;
export let maxPossibleAnswers = 6;
let difficulty = "Easy";

// Quiz settings object
export const generateQuizSettings = () => {
    return {
        amountOfQuestions: Number(CONSTS.amountOfQuestions.children[1].innerText),
        possibleAnswers: Number(CONSTS.possibleAnswers.children[1].innerText),
        tipsOn: CONSTS.tipsAllowed.children[1].innerText === "Off" ? false : true,
        timelimitOn: CONSTS.timelimitActivated.children[1].innerText === "Off" ? false : true,
        difficulty: difficulty,
    };
};

export const resetQuizSettings = () => {
    CONSTS.amountOfQuestions.children[1].innerText = 10;
    CONSTS.possibleAnswers.children[1].innerText = 4;
    CONSTS.tipsAllowed.children[1].innerText = "off";
    CONSTS.timelimitActivated.children[1].innerText = "off";
};

export const checkCounterValue = (currentValue, maxValue) => {
    if (currentValue == maxValue) {
        return currentValue - 1;
    }
    if (currentValue == 1) {
        return currentValue + 1;
    }
    return currentValue;
};

export const updateCounter = (event, counterMax) => {
    let settingValue = event.target.parentElement.children[1];
    let settingBtn = event.target;

    if (settingBtn.getAttribute("data-action") === "higher") {
        settingValue.innerText = checkCounterValue(Number(settingValue.innerText), counterMax) + 1;
    }

    if (settingBtn.getAttribute("data-action") === "lower") {
        settingValue.innerText = checkCounterValue(Number(settingValue.innerText), counterMax) - 1;
    }
};

export const updateToggle = (event) => {
    let toggleValue = event.target.parentElement.children[1];

    if (toggleValue.innerText === "off") {
        toggleValue.innerText = "on";
    } else {
        toggleValue.innerText = "off";
    }
};

export const updateDifficulty = (event) => {
    let targetBtn = event.target;
    difficulty = targetBtn.innerText;

    targetBtn.classList.remove("btn--secondary");
    targetBtn.classList.add("btn--primary");

    CONSTS.difficultyBtns.map((btn) => {
        if (btn.innerText !== targetBtn.innerText) {
            btn.classList.remove("btn--primary");
            btn.classList.add("btn--secondary");
        }
    });
};
