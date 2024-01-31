import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/lib/api-libs";

const Home = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
      <div>
      {/* Anime terpopuler */}
      <section>
        <Header title="Top anime :" linkHref="/popular/" linkTitle="Lihat semua"/>
        <AnimeList api={topAnime}/>
      </section>

      {/* Anime rekomendasi */}
      <section>
        <Header title="Rekomendasi anime :" linkHref="/new/" linkTitle="Lihat semua"/>
        <AnimeList api={topAnime}/>
      </section>

      </div>
  );
}

export default Home
