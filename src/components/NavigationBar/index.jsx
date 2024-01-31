import Link from "next/link";
import InputSearch from "@/InputSearch";

const NavBar = () => {
    return (
        <header className="bg-color-accent fixed top-0 right-0 left-0">
            <div className="flex md:flex-row flex-col justify-between items-center p-2">
                <Link href="/" className="font-bold text-xl">Animax</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default NavBar;