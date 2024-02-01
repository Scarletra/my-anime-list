import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/lib/api-libs";

const Home = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let rekomendasiAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  const randomRekomendasiAnime = getRandomRekomendasi(rekomendasiAnime, 8)
  rekomendasiAnime = { data: randomRekomendasiAnime }

  function getRandomRekomendasi(listRekomendasi, jumlah) {
    const shuffled = [...listRekomendasi].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, jumlah);
  }

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
        <AnimeList api={rekomendasiAnime}/>
      </section>

      </div>
  );
}

export default Home
