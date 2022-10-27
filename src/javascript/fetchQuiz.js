import * as GLOBALS from "./globals";

// Fetching data
export const fetchQuiz = async () => {
    let url = new URL("https://quizapi.io/api/v1/questions");

    let params = {
        apiKey: "Yk930yLz3W65YXkbfkG5Cu1E3Aduuk2LqfAsO1k1",
        limit: GLOBALS.getQuizSettings().amountOfQuestions,
        difficulty: GLOBALS.getQuizSettings().difficulty,
    };

    url.search = new URLSearchParams(params).toString();

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data;
};
