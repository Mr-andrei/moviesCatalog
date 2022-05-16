import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {allActionType, cinemaReducer} from "./getCinemaReducer/cinemaReducer";
import {ActionsTypeAppReducer, appReducer} from "./appReducer/appReducer";


const rootReducer = combineReducers({
    cinema: cinemaReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
export type ThunkAPPType = ThunkAction<void, AppRootStateType, unknown, allActionType | ActionsTypeAppReducer>
//@ts-ignore
window.store = store;