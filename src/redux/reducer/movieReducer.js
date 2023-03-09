import { AllMOVIES } from "../types/moviesType";

const initalValue = { movies: [], pageCount: 0 }

export const movieReducer = (state = initalValue, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case AllMOVIES:
            return { movies: action.data }
        default:
            return state;
    }
}
