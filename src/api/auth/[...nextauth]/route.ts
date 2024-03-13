import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { handleSignIn } from "@/lib/user/handleSignIn";

export const authOptions = {
  providers: [
    GithubProvider({
      id: "github",
      clientId: process?.env?.GITHUB_CLIENT_ID || "",
      clientSecret: process?.env?.GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      id: "google",
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider == "github" || account?.provider == "google") {
        const res = await handleSignIn({
          name: user.name,
          email: user.email,
          password: "",
          image: user.image,
          method: account?.provider,
        });

        if (res?.success) {
          return true;
        } else {
          return false;
        }
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token }) {
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
