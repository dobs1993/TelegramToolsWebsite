"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Forwarder Tool */}
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-4">Telegram Forwarder</h2>
          <p>Set up and manage your message forwarding rules.</p>
          <Link href="/dashboard/forwarder">
            <button className="mt-4 bg-[#0088cc] hover:bg-[#0077b3] text-white p-2 rounded-lg">
              Go to Forwarder
            </button>
          </Link>
        </div>

        {/* Employee Manager */}
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-4">Employee Manager</h2>
          <p>Manage schedules, track time, and pay your team.</p>
          <Link href="/dashboard/admin">
            <button className="mt-4 bg-[#0088cc] hover:bg-[#0077b3] text-white p-2 rounded-lg">
              Go to Admin Panel
            </button>
          </Link>
        </div>

        {/* Betting Tools */}
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-4">Betting Tools</h2>
          <p>Access EV calculators and trading utilities.</p>
          <Link href="/dashboard/betting">
            <button className="mt-4 bg-[#0088cc] hover:bg-[#0077b3] text-white p-2 rounded-lg">
              Go to Tools
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
