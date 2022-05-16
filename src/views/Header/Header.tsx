import {ChangeEvent, KeyboardEvent, useState} from "react";
import style from "./header.module.css"
import search from "../../assets/searchInput.svg"
import user from "../../assets/User-icon1.png"
import {useAppDispatch} from "../../utils/hooks/useAppDisspatch";
import {setPageAC, setTitleAC} from "../../store/getCinemaReducer/getCinemaAC";
import {getCinemaTC} from "../../store/getCinemaReducer/getCinemaTC";

export const Header = () => {

    const dispatch = useAppDispatch()
    const [titleInput, setTitleInput] = useState('')

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleInput(e.currentTarget.value)


    }
    const clickHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13 && titleInput.trim() !== "") {
            dispatch(setTitleAC(titleInput))
            dispatch(getCinemaTC())
            dispatch(setPageAC(1))
            setTitleInput("")
        }
    }

    return (
        <header className={style.main_container}>
            <span className={style.title}>Movie Catalog</span>

            <div className={style.input_block}>
                <div className={style.input_image}>
                    <img src={search} alt=""/>
                </div>
                <input
                    className={style.input}
                    value={titleInput}
                    onChange={inputChangeHandler}
                    onKeyPress={clickHandler}
                    type="text"
                    placeholder={"Search"}
                />
            </div>
            <div className={style.wrapper_person_info}>
                <div className={style.image_person}>
                    <img src={user} alt=""/>
                </div>
                <span className={style.text_name}>Andrei Chaus</span>
            </div>


        </header>
    )
}