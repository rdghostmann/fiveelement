import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sequence Generator",
  manifest: "/manifest.json",
  description: "Join the number hunting adventure and discover how many pairs you can match in our exciting game.",
  keywords: " generated sequence, number matching game, number checker, interactive table, observation skills, focus and concentration, engaging game, fun game, number hunting, strategy game, memory improvement, cognitive skills, number pairs, matching numbers, table game, number finder, brain game, time passer, addictive game"
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="bg-slate-300">
      <body className={inter.className}>
        <header className="mx-auto w-full py-2 bg-slate-500 sticky top-0 left-0 z-10 shadow-sm ">
          <h1 className="font-bold text-center text-xl text-white ">Seqence Generator</h1>
        </header>
        {children}
        <footer className="mx-auto w-full py-2 bg-slate-500 sticky top-0 left-0 z-10 shadow-sm">
          <p className="text-center text-xs text-white ">Seqence Generator - Powered by <i>RdTech</i></p>
          <p className="text-center text-xs text-white ">All Right Reserved 2024</p>
        </footer>
      </body>
    </html>
  );
}
