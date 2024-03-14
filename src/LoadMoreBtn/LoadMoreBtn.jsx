import css from './LoadMoreBtn.module.css'


export const LoadMoreBtn = ({ onGetMore }) => {
    return (
        <>
        <button onClick={onGetMore} className={css.loadMoreBtn}>Load more</button>
        </>
    )
}