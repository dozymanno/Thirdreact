import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from "@/component/navbar/page";
import Footer from "@/component/footer/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Third react assignment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
