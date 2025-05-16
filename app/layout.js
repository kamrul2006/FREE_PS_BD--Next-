import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Free Palestine BD',
  description: 'A voice for justice and awareness from Bangladesh',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" foxified="">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}  >

        <Navbar />

        {children}
      </body>
    </html>
  );
}
