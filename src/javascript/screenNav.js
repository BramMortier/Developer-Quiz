// ------------------------------------------- //
// module imports
import * as CONSTS from "./constants";
// ------------------------------------------- //

// Screen navigation logic
export const changeScreen = (destinationScreen) => {
    destinationScreen.classList.remove("container--inactive");

    CONSTS.pages.map((page) => {
        if (page !== destinationScreen) {
            page.classList.add("container--inactive");
        }
    });
};
