import githubAuth from "next-auth/providers/github"
import NextAuth from "next-auth/next";

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_CLIENT,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}