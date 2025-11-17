import { useEffect, useState } from "react";

const backendURL = import.meta.env.VITE_BACKEND_URL || "";

export default function Navbar() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    let active = true;
    async function ping() {
      if (!backendURL) {
        if (active) setStatus("Offline");
        return;
      }
      try {
        const res = await fetch(`${backendURL}/api/hello`);
        if (!res.ok) throw new Error("bad");
        if (active) setStatus("Online");
      } catch (e) {
        if (active) setStatus("Offline");
      }
    }
    ping();
    return () => {
      active = false;
    };
  }, []);

  const pillClass =
    status === "Online"
      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
      : status === "Checking..."
      ? "bg-gray-100 text-gray-700 border-gray-200"
      : "bg-rose-100 text-rose-700 border-rose-200";

  return (
    <header className="w-full fixed top-0 left-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">V</div>
            <span className="text-lg font-semibold text-gray-900">Vibe Coding Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${pillClass}`}>
              {status}
            </span>
            <a
              href="#get-started"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
