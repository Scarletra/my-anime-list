"use client"

import { ArrowLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation" 

const NotFound = () => {

    const router = useRouter()

    return (
        <div>
            <div className="flex flex-col gap-3 justify-center items-center mx-auto max-w-xl">
            <button onClick={() => router.back()}>
                <ArrowLeft size={32} />
            </button>
            404 NOT FOUND
            </div>
        </div>
    )
}

export default NotFound