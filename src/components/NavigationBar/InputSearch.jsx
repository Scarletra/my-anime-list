"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {

    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        if (!keyword) return
        router.push(`/search/${keyword}`)
    }

    return (
        <form className="relative" onSubmit={handleSearch}>
            <input 
                placeholder="Cari anime..." 
                className="rounded p-2 w-full"
                ref={searchRef}>
            </input>
            <button className="absolute end-3 top-2 hover:scale-125 transition:ease-in" onClick={handleSearch}>
                <MagnifyingGlass size={25} />
            </button>
        </form>
    )
}

export default InputSearch