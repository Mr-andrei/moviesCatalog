import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../store/store";
import {allActionType} from "../../store/getCinemaReducer/cinemaReducer";
import {ActionsTypeAppReducer} from "../../store/appReducer/appReducer";

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, allActionType | ActionsTypeAppReducer >>()