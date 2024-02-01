import VideoPlayer from "@/components/Utilities/VideoPlayer"
import { getAnimeResponse } from "@/lib/api-libs"
import Image from "next/image"

const Page = async ({ params: {id} }) => {

    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="pt-4 px-2 flex flex-col items-center justify-center gap-2 text-color-primary">
                <h3 className="text-color-accent text-2xl font-bold">{anime.data.title} ({anime.data.title_japanese})</h3>
                <Image 
                src={anime.data.images.webp.image_url} 
                alt={anime.data.images.jpg.image_url} 
                width={300} 
                height={300}
                className="rounded object-cover"/>
                <div className="flex text-color-primary flex-row gap-4 rounded border p-2">
                    <p>Ranking: {anime.data.rank} ({anime.data.score}⭐)</p>
                    <p>Episode: {anime.data.episodes}</p>
                    {/* <Image src="/lib/star.png" alt="..." width={5} height={5}/> */}
                </div>
                <p>{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer videoId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page