import { AllMOVIES } from "../types/moviesType"


export const getAllMovie = () => {
    return { type: AllMOVIES, data: [] }
}