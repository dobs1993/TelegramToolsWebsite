"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold tracking-tight cursor-pointer">
            Telegram<span className="text-[#229ED9]">Tools</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-[#229ED9] transition font-medium">
            Home
          </Link>
          <Link href="/forwarder-info" className="hover:text-[#229ED9] transition font-medium">
            Forwarder
          </Link>
          <Link href="/admin-info" className="hover:text-[#229ED9] transition font-medium">
            Employee Manager
          </Link>
          <Link href="/betting-info" className="hover:text-[#229ED9] transition font-medium">
            Betting Tools
          </Link>
          <Link href="/pricing" className="hover:text-[#229ED9] transition font-medium">
            Pricing
          </Link>
          <Link href="/login" className="hover:text-[#229ED9] transition font-medium">
            Login
          </Link>
          <Link href="/register" className="hover:text-[#229ED9] transition font-medium">
            Register
          </Link>


          {/* Logout Button */}
          <button className="ml-4 bg-[#ff0000] hover:bg-[#e60000] text-white text-sm font-bold py-2 px-4 rounded-lg transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
