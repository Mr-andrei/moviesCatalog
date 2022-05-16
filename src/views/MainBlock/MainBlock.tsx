import {useTypedSelector} from "../../utils/hooks/useTypedSelector";
import React from "react";
import {CinemaDataType} from "../../services/API";
import style from "./mainBlock.module.css"
import {Pagination} from "../../components/pagination/Pagination";
import {useAppDispatch} from "../../utils/hooks/useAppDisspatch";
import {setPageAC} from "../../store/getCinemaReducer/getCinemaAC";
import {createPlaceholder} from "../../utils/createPlaceholder";
import {getCinemaTC} from "../../store/getCinemaReducer/getCinemaTC";


export const MainBlock = React.memo(() => {

    const dispatch = useAppDispatch()

    const totalResults = useTypedSelector(state => state.cinema.totalResults)
    const page = useTypedSelector(state => state.cinema.page)
    const title = useTypedSelector(state => state.cinema.title)
    const cinemaData = useTypedSelector(state => state.cinema.cinemaData)

    const setPageHandler = (page: number) => {
        dispatch(setPageAC(page))
        dispatch(getCinemaTC())
    }

    return (
        <div className={style.container_main_block}>
            {totalResults && <div className={style.subtitle_block}>
                <span className={style.subtitle_text}> Your searched for:
                    <span className={style.text_info}>{title}</span>,
                    <span className={style.text_info}> {totalResults}</span> results found</span>
            </div>}


            <div className={style.block_cinema}>
                {cinemaData && cinemaData.map((m: CinemaDataType) => (
                    <div className={style.cinema_card} key={m.imdbID}>
                        <div className={style.cinema_image}>
                            <img src={createPlaceholder(m.Poster)} alt="Poster"/>
                        </div>
                        <div className={style.block_text}>
                            <span className={style.cinema_text}>Name: {m.Title}</span>
                            <span className={style.cinema_text}>Year: {m.Year}</span>
                            <span className={style.cinema_text}>imdbID: {m.imdbID}</span>
                            <span className={style.cinema_text}>Type: {m.Type}</span>
                        </div>
                    </div>))}
            </div>
            {+totalResults > 10 &&
            <Pagination
                currentPage={page}
                totalCountPage={+totalResults}
                pageCount={10}
                setPage={setPageHandler}
            />}
        </div>
    )
})