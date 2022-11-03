// ------------------------------------------- //
// module imports
import * as GLOBALS from "./globals";
import * as CONSTS from "./constants";
import { randomInteger } from "./helperFunctions";
// ------------------------------------------- //

let easyMultiplier = 0.85;
let mediumMultiplier = 1;
let hardMultiplier = 1.25;

export let highscores = [
    {
        user: "Bram Mortier",
        score: 22489,
    },
    {
        user: "Manu Van Leirberghe",
        score: 18754,
    },
    {
        user: "Fien Haelvoet",
        score: 15689,
    },
];

export const saveHighscore = () => {
    let user = CONSTS.highscoreUsername.value;
    let score = CONSTS.quizPointsScore.innerText;

    let highscoreEntry = { user: user, score: score };

    highscores = GLOBALS.getHighscores();
    highscores.push(highscoreEntry);
    GLOBALS.setHighscores(highscores);

    renderHighscores();
};

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

export const renderHighscores = () => {
    GLOBALS.setHighscores(
        GLOBALS.getHighscores().sort((a, b) => {
            return b.score - a.score;
        })
    );

    CONSTS.highscoresList.innerHTML = "";

    GLOBALS.getHighscores().map((highscore, index) => {
        let highscoreEl = document.createElement("li");
        highscoreEl.classList.add("highscores__entry");
        if (index === 0) highscoreEl.classList.add("highscores__entry--champion");
        highscoreEl.innerHTML = `
            <div class="highscores__entry-user">
                <img src="./src/images/icons/${index === 0 ? "crown" : "user"}.svg" alt="user" />
                <p>${highscore.user}</p>
            </div>
            <div class="highscores__entry-points">
                <p class="score font-gimlet">${highscore.score}</p>
                <p class="score--label">Points</p>
            </div>
        `;
        CONSTS.highscoresList.appendChild(highscoreEl);
    });
};
