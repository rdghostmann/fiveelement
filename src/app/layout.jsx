import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated Sequence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className={inter.className}>{children}</body>
    </html>
  );
}