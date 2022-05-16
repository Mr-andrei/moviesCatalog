import {CinemaDataType} from "../../services/API";


export const getCinemaAC = (cinemaData: CinemaDataType[], totalResults:string) => ({
    type: "GET_CINEMA_DATA_CINEMA_REDUCER",
    cinemaData,
    totalResults,
} as const)

export const setPageAC = (page: number) => ({
    type: "SET_PAGE_CINEMA_REDUCER",
    page
} as const)

export const setTitleAC = (title: string) => ({
    type: "SET_TITLE_CINEMA_REDUCER",
    title
} as const)