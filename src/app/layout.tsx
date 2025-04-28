import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "TelegramTools",
  description: "Telegram Automation Made Easy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">
        <NavBar />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <a
          href="https://t.me/MTDobs"
          target="_blank"
          className="fixed bottom-6 right-6 bg-[#0088cc] hover:bg-[#007ab8] text-white py-3 px-5 rounded-full shadow-lg z-50"
        >
          Chat with Us
        </a>
      </body>
    </html>
  );
}
