export default function AdminManager() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-6">Employee Manager Setup</h1>
        <p className="text-lg mb-6 text-center">
          Manage your employees' shifts, time tracking, and payments easily.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
          Setup Employee Panel
        </button>
      </main>
    );
  }
  