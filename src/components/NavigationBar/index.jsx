import Link from "next/link";
import InputSearch from "./InputSearch";
import Button from "./UserActionButton";

const NavBar = () => {
    return (
        <header className="bg-color-accent fixed top-0 right-0 left-0">
            <div className="flex md:flex-row flex-col justify-between items-center p-2">
                <Link href="/" className="font-bold text-xl">Animax</Link>
                <div className="flex flex-row justify-center items-center">
                    <div className="px-2">
                        <Button />
                    </div>
                    <InputSearch />
                </div>   
            </div>
        </header>
    )
}

export default NavBar;