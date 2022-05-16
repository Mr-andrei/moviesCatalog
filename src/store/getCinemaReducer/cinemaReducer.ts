import {CinemaDataType} from "../../services/API";
import {getCinemaAC, setPageAC, setTitleAC} from "./getCinemaAC";


const initialState: InitialStateType  = {
    cinemaData: [],
    totalResults: "",
    title: "",
    page: 1,
}


export const cinemaReducer = (state = initialState, action: allActionType): InitialStateType => {
    switch (action.type) {
        case "GET_CINEMA_DATA_CINEMA_REDUCER": {
            return {...state, cinemaData: action.cinemaData, totalResults: action.totalResults}
        }
        case "SET_PAGE_CINEMA_REDUCER": {
            return {...state, page: action.page}
        }
        case "SET_TITLE_CINEMA_REDUCER": {
            return {...state, title: action.title}
        }
        default:
            return state
    }
}


type InitialStateType = {
    cinemaData: CinemaDataType []
    totalResults: string
    title: string
    page: number
}
export type allActionType = ReturnType<typeof getCinemaAC>
    | ReturnType<typeof setPageAC>
    | ReturnType<typeof setTitleAC>