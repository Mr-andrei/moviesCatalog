import style from './loader.module.css'


export const LoaderLinear = () => {
  return (
      <div>
              <div className={style.linearActivity}>
              <div className={style.indeterminate}></div>
          </div>
      </div>
  )
} 