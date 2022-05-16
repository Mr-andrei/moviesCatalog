import style from './err.module.css'
import React from "react";
import {setErrorStatus} from "../../store/appReducer/appAC";
import {useAppDispatch} from "../../utils/hooks/useAppDisspatch";


type ErrorWindowType = {
    errorText: string
}

export const ErrorWindow = ({errorText}: ErrorWindowType) => {
    const dispatch = useAppDispatch()

    const closeClickHandler = () => {
        dispatch(setErrorStatus(false))
    }
    setTimeout(() => {
        dispatch(setErrorStatus(false))
    }, 4000)


    return (
        <div className={style.block_main}>
            <div className={style.close} onClick={closeClickHandler}></div>
            {errorText}
        </div>
    )
}