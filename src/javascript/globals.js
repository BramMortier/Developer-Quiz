// ------------------------------------------- //
// module imports
import { highscores } from "./highscores";
// ------------------------------------------- //

export const initSessionStorage = () => {
    if (!sessionStorage.getItem("quizData")) {
        sessionStorage.setItem("quizData", []);
    }
    if (!sessionStorage.getItem("answerStorage")) {
        sessionStorage.setItem("answerStorage", []);
    }
    if (!sessionStorage.getItem("quizSettings")) {
        sessionStorage.setItem("quizSettings", {});
    }
    sessionStorage.setItem("quizScore", 0);
    sessionStorage.setItem("questionIndex", 0);
};

export const initLocalStorage = () => {
    if (!localStorage.getItem("highscores")) {
        localStorage.setItem("highscores", JSON.stringify(highscores));
    }
};

// QuizData get & set
export const setQuizData = (data) => {
    sessionStorage.setItem("quizData", JSON.stringify(data));
};

export const getQuizData = () => {
    return JSON.parse(sessionStorage.getItem("quizData"));
};

// AnswerStorage get & set
export const createAnswerStorage = (data) => {
    let answerStorageBase = data.map((answer, index) => {
        return {
            selectedAnswer: -1,
            correctAnswer: -1,
        };
    });
    setAnswerStorage(answerStorageBase);
};

export const updateAnswerStorage = (questionIndex, selectedAnswer, correctAnswer) => {
    let answerStorageCurrent = getAnswerStorage();
    answerStorageCurrent[questionIndex - 1] = {
        selectedAnswer: selectedAnswer,
        correctAnswer: correctAnswer,
    };
    setAnswerStorage(answerStorageCurrent);
};

export const setAnswerStorage = (data) => {
    sessionStorage.setItem("answerStorage", JSON.stringify(data));
};

export const getAnswerStorage = () => {
    return JSON.parse(sessionStorage.getItem("answerStorage"));
};

// QuizSettings get & set
export const setQuizSettings = (data) => {
    sessionStorage.setItem("quizSettings", JSON.stringify(data));
};

export const getQuizSettings = () => {
    return JSON.parse(sessionStorage.getItem("quizSettings"));
};

// QuizScore get & set
export const setQuizScore = (score) => {
    sessionStorage.setItem("quizScore", score);
};

export const getQuizScore = () => {
    return Number(sessionStorage.getItem("quizScore"));
};

// QuestionIndex get & set
export const setQuestionIndex = (index) => {
    sessionStorage.setItem("questionIndex", index);
};

export const getQuestionIndex = () => {
    return Number(sessionStorage.getItem("questionIndex"));
};

// Highscores get & set
export const setHighscores = (data) => {
    localStorage.setItem("highscores", JSON.stringify(data));
};

export const getHighscores = () => {
    return JSON.parse(localStorage.getItem("highscores"));
};
