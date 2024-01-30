const Pagination = ({ page, totalPage, setPage }) => {

    const scrollToTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    }

    const handleNextPage = () => {
        if (page === totalPage) {setPage((prevState) => prevState - (totalPage - 1))}
        else {setPage((prevState) => prevState + 1)}
        scrollToTop()
    }

    const handlePrevPage = () => {
        if (page === 1) {setPage((prevState) => totalPage)}
        else {setPage((prevState) => prevState - 1)}
        scrollToTop()
    }

    return (

        <div>
            <div className="flex justify-center items-center py-4 px-2 gap-2 text-color-primary">
                <button onClick={handlePrevPage}
                className="transition-all hover:scale-110 hover:text-color-accent">Prev</button>
                <p>{page} of {totalPage}</p>
                <button onClick={handleNextPage}
                className="transition-all hover:scale-110 hover:text-color-accent">Next</button>
            </div>
        </div>
    )
}

export default Pagination