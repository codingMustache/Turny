import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import vercelPostgresAdapter from "@/lib/vercelPostgresAdapter"

export const { handlers, signIn, signOut, auth } = NextAuth({
    debug: true,
    adapter: vercelPostgresAdapter(),
    secret: process.env.AUTH_SECRET as string,
    providers: [GitHub],

})