import Header from "@/components/Dashboard/header"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <section className="mt-4">
            <Header title={"My collection"}/>   
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-2">
                <Link href="/" className="border-2 border-color-accent">
                    <Image src="" width={200} height={200} alt="..."/>
                    <div className="w-full bg-color-primary text-l font-bold">
                        <h5>Judul anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-color-accent">
                    <Image src="" width={200} height={200} alt="..."/>
                    <div className="w-full bg-color-primary text-l font-bold text-center">
                        <h5>Judul anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-color-accent">
                    <Image src="" width={200} height={200} alt="..."/>
                    <div className="w-full bg-color-primary text-l font-bold">
                        <h5>Judul anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-color-accent">
                    <Image src="" width={200} height={200} alt="..."/>
                    <div className="w-full bg-color-primary text-l font-bold">
                        <h5>Judul anime</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page