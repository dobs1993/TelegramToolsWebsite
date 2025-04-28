export default function ForwarderInfo() {
    return (
      <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-white">
        <h1 className="text-4xl font-bold mb-6 text-[#0088cc]">Telegram Forwarder</h1>
        <p className="text-lg mb-6 text-center max-w-2xl">
          Set up smart message forwarding across all your Telegram channels. 
          Automatically redirect messages between groups, filter spam, and manage communication efficiently.
        </p>
        <img src="/forwarder.png" alt="Forwarder illustration" className="w-2/3 max-w-md mb-6" />
        <button className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-3 px-6 rounded-lg">
          Get Started
        </button>
      </main>
    );
  }
  