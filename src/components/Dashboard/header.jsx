"use client"

import { ArrowLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {

    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }


    return (
        <div className="flex justify-between items-center mb-4 mx-3 text-color-primary">
            <button onClick={handleBack}>
                <ArrowLeft size={32} />
            </button>
            <h3>{title}</h3>
        </div>
    )
}

export default Header