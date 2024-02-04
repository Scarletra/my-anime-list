import Link from "next/link"
import { authUserSession } from "@/lib/auth-libs"

const Button = async () => {

    const user = await authUserSession()
    const actionLabel = user ? "Sign out" : "Sign in"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="">
            {!user ? null : <Link href="users/dashboard/" className="p-1">Dashboard</Link>}
            <Link href={actionUrl} className="p-1">{actionLabel}</Link>
        
        </div>
    )
}

export default Button