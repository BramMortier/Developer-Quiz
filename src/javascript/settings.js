import * as CONSTS from "./constants";

// Quiz settings object
export let quizSettings = {
    amountOfQuestions: Number(CONSTS.amountOfQuestions.innerText),
    possibleAnswers: Number(CONSTS.possibleAnswers.innerText),
    tipsOn: CONSTS.tipsAllowed.innerText === "Off" ? false : true,
    timelimitOn: CONSTS.timelimitActivated.innerText === "Off" ? false : true,
    difficulty: "Easy",
};
