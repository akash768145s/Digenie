import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/design/navbar";
import Footer from "@/components/design/footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Digenie | Digital Marketing Agency | India",
  description:
    "Looking for a dynamic digital marketing agency in Chennai? Look no further! We can take care of your SEO, social media, digital ads, & more! Contact us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
