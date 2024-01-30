import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 m-2">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                        <Image src={anime.images.webp.image_url} alt="..." width={220} height={220} className="w-full max-h-64 object-cover"/>
                        <h3 className="font-bold text-l p-2">{ anime.title }</h3>
                    </Link>
                )        
            })}
        </div>

    )
}

export default AnimeList