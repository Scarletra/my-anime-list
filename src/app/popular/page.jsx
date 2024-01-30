"use client"

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { getAnimeResponse } from "@/lib/api-libs"
import { useEffect, useState } from "react"

const Page = () => {

    const [page, setPage] = useState(1)
    const [topAnime,  setTopAnime] = useState([])

    const fetchData = async () => {

        const topAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(topAnime)
    }

    useEffect(() => {
        fetchData()
    }, [page])
    

    return (
        <>
            <HeaderMenu title={"Top anime musim ini"}/>
            <AnimeList api={topAnime}/>
            <Pagination 
            page={page} 
            totalPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
            />
        </>
        
    );
};

export default Page