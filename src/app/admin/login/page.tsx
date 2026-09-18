"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Login failed.");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-950 px-4">
      <div className="w-full max-w-sm rounded-3xl bg-cream-50 p-8 shadow-2xl">
        <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
          Kashmir Prestige
        </span>
        <h1 className="mt-1.5 font-display text-2xl font-semibold text-brand-900">
          Admin Login
        </h1>
        <p className="mt-1.5 text-sm text-brand-800/70">
          Enter the admin password to manage site content.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-brand-900">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
            />
          </div>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-brand-950 shadow-lg shadow-gold-400/30 transition-transform hover:scale-[1.01] hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
