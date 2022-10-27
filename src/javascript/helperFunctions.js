// Compares the indexes of the given answer and the correct answer
export const compareAnswer = (answerEntry) => {
    if (answerEntry.selectedAnswer !== -1 && answerEntry.correctAnswer !== -1 && answerEntry.selectedAnswer === answerEntry.correctAnswer) {
        return true;
    }
};

// Limit a string to 60 chars
export const trimString = (text) => {
    return text.length > 60 ? `${text.substring(0, 60)}...` : text;
};

// Finds the correct answer by index in the correct-answers object
export const findCorrectAnswerIndex = (answers) => {
    let correctIndex;
    answers.map((answer, index) => {
        if (answer == "true") correctIndex = index;
    });
    return correctIndex;
};
