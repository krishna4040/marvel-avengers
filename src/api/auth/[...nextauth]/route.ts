import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/lib/DB/connect";
import { handleSignIn } from "@/lib/user/handleSignIn";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<AuthUser | null> {
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
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "credentials") {
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
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
