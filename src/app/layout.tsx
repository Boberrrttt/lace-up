import type { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "./header";
import TopLoader from "nextjs-toploader";
import Providers from "./providers";
import "./globals.css";
import { Raleway } from "next/font/google";

// Load Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "900"], // Regular → Bold → ExtraBold
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stride & Glory",
    template: "%s • Stride & Glory",
  },
  description:
    "Stride & Glory: Athlete-focused sneaker store showcasing performance shoes and the athletes who wear them. Built with Next.js, Tailwind, GraphQL, and Shopify.",
};

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en" className={`${raleway.variable} light`}>
      <body className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        <TopLoader color="orange" />

        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
