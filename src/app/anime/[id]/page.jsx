import { getAnimeResponse } from "@/lib/api-libs"
import Image from "next/image"

const Page = async ({ params: {id} }) => {

    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <h3 className="text-color-accent text-2xl">{anime.data.title} ({anime.data.title_japanese})</h3>
            <Image src={anime.data.images.webp.image_url} alt="..." width={220} height={220}/>
        </>
    )
}

export default Page