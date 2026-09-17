"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { packages } from "@/lib/data";
import { useEnquiryModal } from "@/components/EnquiryModalContext";

type EnquiryFormProps = {
  initialPackage?: string | null;
};

function packageOptionValue(p: (typeof packages)[number]) {
  return `${p.name} (${p.duration})`;
}

export default function EnquiryForm({ initialPackage }: EnquiryFormProps) {
  const router = useRouter();
  const { closeModal } = useEnquiryModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pkg, setPkg] = useState(() => {
    const matched = packages.find((p) => p.name === initialPackage);
    return packageOptionValue(matched ?? packages[0]);
  });
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          packageName: pkg,
          travelDate,
          message,
          honey,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      closeModal();
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-900">
            Full Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-900">
            Phone Number
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="package" className="mb-1.5 block text-sm font-medium text-brand-900">
            Interested Package
          </label>
          <select
            id="package"
            value={pkg}
            onChange={(e) => setPkg(e.target.value)}
            className="w-full rounded-xl border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
          >
            {packages.map((p) => (
              <option key={p.slug} value={packageOptionValue(p)}>
                {p.name} ({p.duration})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-brand-900">
            Preferred Travel Date
          </label>
          <input
            id="date"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full rounded-xl border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-900">
          Message (optional)
        </label>
        <textarea
          id="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Number of travellers, budget, special requests..."
          className="w-full rounded-xl border border-brand-900/15 bg-white px-4 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-brand-950 shadow-lg shadow-gold-400/30 transition-transform hover:scale-[1.01] hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Enquiry"}
        {status !== "sending" && (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  );
}
