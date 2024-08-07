import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: "Jess Mathews",
  description: "Web Design Portfolio of Jess Mathews",
  openGraph:{
    title: "Jess Mathews",
    description: "Web Design Portfolio of Jess Mathews",
    type: "website",
    site_name: "Jess Mathews",
    locale: "en_US",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTransition/>
        <PageTransition>
          {children}
          </PageTransition></body>
    </html>
  );
}
