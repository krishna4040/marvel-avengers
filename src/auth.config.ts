import type { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from "@/lib/DB/connect";
import { handleSignIn } from "@/lib/user/handleSignIn";

export default {
    providers: [
        CredentialsProvider({
            id: "user_credentials",
            name: "Credentials",
            credentials: {
                name: { label: "name", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                await connectToDB();
                try {
                    const res = await handleSignIn({
                        name: credentials.name,
                        email: credentials.email,
                        password: credentials.password,
                        image: undefined,
                        method: "credentials",
                    });

                    if (res.success) {
                        const user = res.userData;
                        return {
                            id: user?.id,
                            name: user?.name,
                            image: user?.image,
                            email: user?.email,
                        };
                    }
                } catch (err: any) {
                    throw new Error(err);
                }
                return null;
            },
        }),
        GithubProvider({
            id: "github",
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),
        GoogleProvider({
            id: "google",
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
} satisfies NextAuthConfig