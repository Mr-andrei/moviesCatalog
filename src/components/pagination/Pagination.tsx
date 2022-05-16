import style from './pagination.module.css'
import {createPages} from "../../utils/createPages";


type PaginationType = {
    setPage: (page: number) => void
    totalCountPage: number
    pageCount: number
    currentPage: number
}

export const Pagination = ({setPage, totalCountPage, pageCount, currentPage}: PaginationType) => {

    const totalPagesCount = Math.ceil(totalCountPage / pageCount)
    const pages: number[] = []

    createPages(pages, totalPagesCount, currentPage)

    const onClickHandler = (page: number) => {
        setPage(page)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {pages.map((m, i) =>
                    <span key={i} className={currentPage === m ? style.page_active : style.page}
                          onClick={() => onClickHandler(m)}>{m}</span>)}
            </div>
        </div>
    )
}