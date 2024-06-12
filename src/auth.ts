import NextAuth from "next-auth";
import { connectToDB } from "@/lib/DB/connect";
import { handleSignIn } from "@/lib/user/handleSignIn";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider == "user_credentials") {
                return true;
            }
            if (account?.provider == "github" || account?.provider == "google") {
                await connectToDB();
                try {
                    const res = await handleSignIn({
                        name: user.name || "",
                        email: user.email || "",
                        password: "",
                        image: user.image || "",
                        method: "oauthprovider",
                    });

                    if (res?.success) {
                        return true;
                    } else {
                        return false;
                    }
                } catch (err) {
                    console.log("Error saving user", err);
                    return false;
                }
            }
            return false
        },
    },
});