// "use client"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className + " bg-white dark:bg-gray-900 text-gray-900 dark:text-white"}>
        {children}
      </body>
    </html>
  );
}
