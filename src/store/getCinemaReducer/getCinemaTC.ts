import {AppRootStateType, ThunkAPPType} from "../store";
import {getCinemaAPI} from "../../services/API";
import {getCinemaAC} from "./getCinemaAC";
import {setErrorStatus, setErrorText, setLoaderStatus} from "../appReducer/appAC";


export const getCinemaTC = (): ThunkAPPType => async (dispatch, getState: () => AppRootStateType) => {
    const title = getState().cinema.title
    const page = getState().cinema.page
    try {
        dispatch(setLoaderStatus(true))

        const cinemaData = await getCinemaAPI.searchFilmsByTitle(title, page)
        if (cinemaData.data.Response === "False") {
            dispatch(setErrorStatus(true))
            dispatch(setErrorText(cinemaData.data.Error))
        }
        if (cinemaData.data.Response === "True") {
            dispatch(getCinemaAC(cinemaData.data.Search, cinemaData.data.totalResults))
        }
        dispatch(setLoaderStatus(false))
    } catch (e: any) {
        dispatch(setErrorStatus(true))
        dispatch(setErrorText(e.response.data.Error))
    }
}