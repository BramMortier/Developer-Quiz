import * as CONSTS from "./constants";

export let maxAmountOfQuestions = 20;
export let maxPossibleAnswers = 6;

// Quiz settings object
export let quizSettings = {
    amountOfQuestions: Number(CONSTS.amountOfQuestions.innerText),
    possibleAnswers: Number(CONSTS.possibleAnswers.innerText),
    tipsOn: CONSTS.tipsAllowed.innerText === "Off" ? false : true,
    timelimitOn: CONSTS.timelimitActivated.innerText === "Off" ? false : true,
    difficulty: "Easy",
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

export const checkCounterValue = (currentValue, maxValue) => {
    if (currentValue == maxValue) {
        return currentValue - 1;
    }
    if (currentValue == 1) {
        return currentValue + 1;
    }
    return currentValue;
};
