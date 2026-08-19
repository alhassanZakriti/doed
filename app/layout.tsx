import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProviders } from "@/components/AppProviders";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { localeInitScript } from "@/lib/i18n/locale-script";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DOED",
  description: "Dutch Leadership. International IT Expertise.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <AppProviders>
          <Header />
          <main className="min-w-0 flex-1 overflow-x-hidden pt-[var(--header-height)]">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
