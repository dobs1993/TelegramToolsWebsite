export default function Pricing() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
        <h1 className="text-5xl font-bold text-[#0088cc] mb-10 text-center">
          Pricing Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Forwarder Plan */}
          <div className="border rounded-lg shadow-lg p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#0088cc]">Forwarder Only</h2>
            <p className="text-gray-600 mb-6 text-center">
              Smart message forwarding between groups and channels.
            </p>
            <div className="text-3xl font-bold mb-6">$15<span className="text-lg font-normal">/month</span></div>
            <a
              href="/register"
              className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-2 px-6 rounded-lg"
            >
              Get Started
            </a>
          </div>
  
          {/* Employee Manager Plan */}
          <div className="border rounded-lg shadow-lg p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-[#0088cc]">Employee Manager</h2>
            <p className="text-gray-600 mb-6 text-center">
              Manage schedules, track time, and pay your Telegram team.
            </p>
            <div className="text-3xl font-bold mb-6">$20<span className="text-lg font-normal">/month</span></div>
            <a
              href="/register"
              className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-2 px-6 rounded-lg"
            >
              Get Started
            </a>
          </div>
  
          {/* All Access Bundle */}
          <div className="border rounded-lg shadow-lg p-8 flex flex-col items-center bg-[#f5faff]">
            <h2 className="text-2xl font-bold mb-4 text-[#0088cc]">All Access Bundle</h2>
            <p className="text-gray-600 mb-6 text-center">
              Full access to Forwarder, Employee Manager, and Betting Tools.
            </p>
            <div className="text-3xl font-bold mb-6">$30<span className="text-lg font-normal">/month</span></div>
            <a
              href="/register"
              className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-2 px-6 rounded-lg"
            >
              Get Started
            </a>
            <span className="text-green-600 text-sm font-semibold mt-4">
              Best Value
            </span>
          </div>
        </div>
  
        <p className="text-gray-400 mt-10 text-sm text-center">
          Cancel anytime. No hidden fees.
        </p>
      </main>
    );
  }
  