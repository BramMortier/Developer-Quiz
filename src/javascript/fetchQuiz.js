// ------------------------------------------- //
// module imports
import * as GLOBALS from "./globals";
// ------------------------------------------- //

// Fetching data
export const fetchQuiz = async () => {
    let url = new URL("https://quizapi.io/api/v1/questions");

    let params = {
        apiKey: "Yk930yLz3W65YXkbfkG5Cu1E3Aduuk2LqfAsO1k1",
        limit: GLOBALS.getQuizSettings().amountOfQuestions,
        difficulty: GLOBALS.getQuizSettings().difficulty,
        tags: GLOBALS.getQuizSettings().tags,
    };

    url.search = new URLSearchParams(params).toString();

    try {
        let res = await fetch(url);
        if (res.status >= 200 && res.status <= 299) {
            let data = await res.json();
            return data;
        } else {
            throw Error("Data fetching error");
        }
    } catch (error) {
        return undefined;
    }
};
