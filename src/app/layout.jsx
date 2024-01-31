import { Gabarito } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavigationBar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Animax",
  description: "Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
      <NavBar/>
      <div className="pt-16">
        {children}
      </div>
      </body>
    </html>
  );
}
