import Link from "next/link"
import { authUserSession } from "@/lib/auth-libs"

const Button = async () => {

    const user = await authUserSession()
    const actionLabel = user ? "Sign out" : "Sign in"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"
    console.log(user)

    return (
        <>
            <Link href={actionUrl} className="">{actionLabel}</Link>
        
        </>
    )
}

export default Button