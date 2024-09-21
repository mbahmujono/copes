import "./globals.css";
import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import { cn } from "@/lib/utils";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bedah Anak RSUP Kariadi",
  description: "Layanan Bedah Anak",
};

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/global";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      topNav: {
        populate: "*",
      },
      footer: {
        populate: "*",
      }
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  const data = await fetchData(url.href);
  return data;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await loader();
  const { topNav, footer } = data?.data;

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Header data={topNav}/>
        {children}
        <Footer data={footer}/>
      </body>
    </html>
  );
}