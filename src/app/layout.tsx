import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "TelegramTools",
  description: "Telegram Automation Made Easy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <NavBar />
        <main className="pt-20 max-w-7xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
