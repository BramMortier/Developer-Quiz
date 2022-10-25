export const initSessionStorage = () => {
    if (!sessionStorage.getItem("quizData")) {
        sessionStorage.setItem("quizData", []);
    }
    if (!sessionStorage.getItem("answerStorage")) {
        sessionStorage.setItem("answerStorage", []);
    }
    sessionStorage.setItem("quizScore", 0);
    sessionStorage.setItem("questionIndex", 0);
};

// QuizData get & set
export const setQuizData = (data) => {
    sessionStorage.setItem("quizData", JSON.stringify(data));
};

export const getQuizData = () => {
    return JSON.parse(sessionStorage.getItem("quizData"));
};

// AnswerStorage get & set
export const setAnswerStorage = (data) => {
    sessionStorage.setItem("answerStorage", JSON.stringify(data));
};

export const getAnswerStorage = () => {
    return JSON.parse(sessionStorage.getItem("answerStorage"));
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
