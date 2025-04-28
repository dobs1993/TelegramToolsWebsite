"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full flex justify-center min-h-screen"
      >
        <div className="w-[70%] bg-white rounded-xl shadow-md p-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0088cc]">
            All-in-One Telegram Automation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Manage forwarding, team operations, and betting tools — all from one platform.
            Save time, automate processes, and supercharge your Telegram workflow.
          </p>
          <Link href="/register">
            <button className="bg-[#0088cc] hover:bg-[#007ab8] text-white font-bold py-3 px-8 rounded-full text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Forwarder Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full flex justify-center min-h-screen"
      >
        <div className="w-[70%] bg-[#0088cc] text-white rounded-xl shadow-md p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Smart Message Forwarding
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Redirect messages automatically between Telegram groups and channels.
            Filter spam, automate flows, and stay organized effortlessly.
          </p>
          <Link href="/forwarder-info">
            <button className="bg-white text-[#0088cc] hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg">
              Learn More
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Employee Manager Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full flex justify-center min-h-screen"
      >
        <div className="w-[70%] bg-white rounded-xl shadow-md p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0088cc]">
            Manage Your Telegram Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Track hours, schedule shifts, and simplify team operations directly inside Telegram.
            Boost productivity with effortless management tools.
          </p>
          <Link href="/admin-info">
            <button className="bg-[#0088cc] hover:bg-[#007ab8] text-white font-bold py-3 px-8 rounded-full text-lg">
              Learn More
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Betting Tools Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full flex justify-center min-h-screen"
      >
        <div className="w-[70%] bg-[#0088cc] text-white rounded-xl shadow-md p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Betting Tools
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Analyze markets, calculate Expected Value (EV), and sharpen your trading edge —
            right from Telegram.
          </p>
          <Link href="/betting-info">
            <button className="bg-white text-[#0088cc] hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg">
              Learn More
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Got an Idea Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full flex justify-center min-h-screen"
      >
        <div className="w-[70%] bg-white rounded-xl shadow-md p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0088cc]">
            🚀 Got an Idea for a Telegram Tool?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            We're always building the next big thing. Message us — and let's bring your vision to life!
          </p>
          <Link href="https://t.me/MTDobs" target="_blank">
            <button className="bg-[#0088cc] hover:bg-[#007ab8] text-white font-bold py-3 px-8 rounded-full text-lg">
              Message Us
            </button>
          </Link>
        </div>
      </motion.section>
    </motion.main>
  );
}
