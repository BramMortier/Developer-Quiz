// Screen Elements
export const startScreen = document.querySelector(".startscreen");
export const questionScreen = document.querySelector(".question");
export const settingsScreen = document.querySelector(".settings");
export const highscores = document.querySelector(".highscores");
export const resultScreen = document.querySelector(".results");

export const pages = [startScreen, questionScreen, settingsScreen, highscores, resultScreen];

// Button ELements
export const startBtn = document.getElementById("start-btn");
export const quitBtn = document.getElementById("quit-btn");
export const settingsBtn = document.getElementById("settings-btn");
export const backBtns = [...document.querySelectorAll(".back-btn")];
export const highscoresBtn = document.getElementById("highscores-btn");

// Setting Elements
export const amountOfQuestions = document.getElementById("amount-of-questions");
export const possibleAnswers = document.getElementById("possible-answers");
export const tipsAllowed = document.getElementById("tips-allowed");
export const timelimitActivated = document.getElementById("timelimit-activated");
export const difficultyBtns = [...document.querySelectorAll(".settings__difficuly-btn")];

export const applySettingsBtn = document.getElementById("apply-settings");
export const resetSettingsBtn = document.getElementById("reset-settings");

// Submit Screen Elements
export const submitQuizBtn = document.getElementById("submit-quiz-btn");
export const questionComparisonList = document.getElementById("question-comparison-list");
export const resultElements = [...document.querySelectorAll(".results__infopiece")];

// Question Elements
export const prevPageBtn = document.getElementById("prev-page");
export const nextPageBtn = document.getElementById("next-page");

export const questionPhrase = document.getElementById("question");
export const answerList = document.getElementById("answer-list");
export const questionNav = document.getElementById("question-nav");

// Circle Graph Elements
export const graphProgress = document.getElementById("graph-progress");
export const progressValue = document.getElementById("progress-value");
