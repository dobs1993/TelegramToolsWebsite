"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-black text-white shadow-md">
      {/* Logo */}
      <Link href="/" className="text-lg font-bold">
        TelegramTools
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6 items-center">
        {!loggedIn ? (
          <>
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/forwarder-info" className="hover:text-blue-400">Forwarder</Link>
            <Link href="/admin-info" className="hover:text-blue-400">Employee Manager</Link>
            <Link href="/betting-info" className="hover:text-blue-400">Betting Tools</Link>
            <Link href="/pricing" className="hover:text-blue-400">Pricing</Link>
            <Link href="/login" className="hover:text-blue-400">Login</Link>
            <Link href="/register" className="hover:text-blue-400">Register</Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
            <Link href="/forwarder" className="hover:text-blue-400">Forwarder</Link>
            <Link href="/admin" className="hover:text-blue-400">Employee Manager</Link>
            <Link href="/betting" className="hover:text-blue-400">Betting Tools</Link>
            <Link href="/account" className="hover:text-blue-400">My Account</Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
