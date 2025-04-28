export default function AdminInfo() {
    return (
      <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-white">
        <h1 className="text-4xl font-bold mb-6 text-[#0088cc]">Employee Manager</h1>
        <p className="text-lg mb-6 text-center max-w-2xl">
          Manage your team effortlessly. Assign shifts, track clock-ins/outs, and manage employee payments — all in one place.
        </p>
        <img src="/placeholder.png" alt="Admin panel illustration" className="w-2/3 max-w-md mb-6" />
        <button className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-3 px-6 rounded-lg">
          Get Started
        </button>
      </main>
    );
  }
  