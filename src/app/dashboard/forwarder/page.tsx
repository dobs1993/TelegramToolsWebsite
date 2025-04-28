export default function ForwarderSetup() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-6">Telegram Forwarder Setup</h1>
        <p className="text-lg mb-6 text-center">
          Connect your Telegram account and configure your message redirection rules here.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          Connect Telegram
        </button>
      </main>
    );
  }
  