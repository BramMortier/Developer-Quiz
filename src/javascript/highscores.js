// ------------------------------------------- //
// module imports
import * as CONSTS from "./constants";
import * as GLOBALS from "./globals";
import { randomInteger } from "./helperFunctions";
// ------------------------------------------- //

let easyMultiplier = 0.85;
let mediumMultiplier = 1;
let hardMultiplier = 1.25;

export const calculatePointsScore = (quizScore) => {
    let quizDifficulty = GLOBALS.getQuizSettings().difficulty;

    // multiply score by amount of question in quiz
    quizScore *= GLOBALS.getQuizSettings().amountOfQuestions;

    // multiply score by topics chosen + 3
    quizScore *= GLOBALS.getQuizSettings().tags.length + 3;

    // luck multiplier
    quizScore *= randomInteger(20, 25);
    quizScore += randomInteger(0, 100);

    // difficulty multiplier
    if (quizDifficulty == "Easy") quizScore *= easyMultiplier;
    if (quizDifficulty == "Medium") quizScore *= mediumMultiplier;
    if (quizDifficulty == "Hard") quizScore *= hardMultiplier;

    return Math.ceil(quizScore);
};
