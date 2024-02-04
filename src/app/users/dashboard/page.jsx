import { authUserSession } from "@/lib/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center flex-col rounded border-double border-2 border-primary bg-gradient-linear p-4">
        <h3 className="text-2xl font-bold p-2">Welcome, {user.name}</h3>
        <Image src={user.image} alt="..." width={100} height={100} className="py-2"/>
        <div className="flex gap-2 py-3 flex-row flex-wrap">
          <Link href="/users/dashboard/collection" className="bg-color-accent p-1 rounded font-bold text-color-dark">
            My collection
          </Link>
          <Link href="/users/dashboard/comment" className="bg-color-accent p-1 rounded font-bold text-color-dark">
            My comment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
