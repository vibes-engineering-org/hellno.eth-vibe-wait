/* eslint-disable @typescript-eslint/no-unused-vars */
import "~/app/globals.css";
import type { Metadata } from "next";
import { ThemeProviderClient } from "~/components/providers/theme-provider-client";
import { ThemeToggle } from "~/components/ui/theme-toggle";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";
import { Providers } from "~/app/providers";
import { NavActions } from "~/components/nav-actions";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const appUrl =
  process.env.NEXT_PUBLIC_URL ||
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

export const metadata: Metadata = {
  title: PROJECT_TITLE,
  description: PROJECT_DESCRIPTION,
  metadataBase: new URL(appUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 animate-gradient-x">
        {/* Funky floating blobs */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-pink-300 opacity-30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300 opacity-20 rounded-full filter blur-2xl animate-blob [animation-delay:2s]"></div>
        <ThemeProviderClient>
          <Providers>
            <SidebarProvider>
              <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
                  <div className="flex flex-1 items-center gap-2">
                    <span className="ml-2 line-clamp-1 text-transparent bg-clip-text animate-rainbow">
                      {PROJECT_TITLE}
                    </span>
                  </div>
                  <div className="ml-auto px-3 flex items-center gap-2">
                    <ThemeToggle />
                    <NavActions />
                  </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 lg:px-4 lg:py-10">
                  {children}
                </div>
              </SidebarInset>
            </SidebarProvider>
          </Providers>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
