import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseLine from "@mui/material/CssBaseline";
import { getServerSession } from "next-auth";
import StoreProvider from "./StoreProvider";
import { AuthProvider } from "@/ui/ComponentExporters";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel Headquaters",
  description: "This is a Hackathon project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <StoreProvider>
            <AppRouterCacheProvider>
              <StyledEngineProvider injectFirst>
                {children}
              </StyledEngineProvider>
            </AppRouterCacheProvider>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
