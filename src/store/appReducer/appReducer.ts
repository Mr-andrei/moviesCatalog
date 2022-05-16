import {setErrorStatus, setErrorText, setLoaderStatus} from "./appAC";


const initialState = {
    errorStatus: false,
    errorText: "",
    loaderStatus: false,
}


export const appReducer = (sate = initialState, action: ActionsTypeAppReducer): InitialStateType => {
    switch (action.type) {
        case "SET_ERROR_STATUS": {
            return {...sate, errorStatus: action.errorStatus}
        }
        case "SET_ERROR_TEXT": {
            return {...sate, errorText: action.errorText}
        }
        case "SET_LOADER_STATUS": {
            return {...sate, loaderStatus: action.loaderStatus}
        }
        default: {
            return sate
        }
    }
}

type InitialStateType = {
    errorStatus: boolean
    errorText: string
    loaderStatus: boolean
}
export type ActionsTypeAppReducer = ReturnType<typeof setErrorStatus>
    | ReturnType<typeof setErrorText>
    | ReturnType<typeof setLoaderStatus>