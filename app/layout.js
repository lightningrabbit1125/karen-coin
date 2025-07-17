import "./globals.css";
import BackToTop from "../components/BackToTop";

export const metadata = {
  title: "Karen-Coin",
  description: "Karen-coin is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)]">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
