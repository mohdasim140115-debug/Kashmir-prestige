"use client";

import type { ReactNode } from "react";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-brand-800">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-brand-900/15 bg-white px-3 py-2 text-sm text-brand-950 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-brand-900/10 bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

export function SaveButton({
  status,
  onClick,
  label = "Save Changes",
}: {
  status: "idle" | "saving" | "saved" | "error";
  onClick: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={status === "saving"}
      className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {status === "saving" ? "Saving..." : status === "saved" ? "Saved ✓" : label}
    </button>
  );
}

export function IconButton({
  onClick,
  label,
  variant = "default",
}: {
  onClick: () => void;
  label: string;
  variant?: "default" | "danger";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
        variant === "danger"
          ? "border-red-200 text-red-600 hover:bg-red-50"
          : "border-brand-900/15 text-brand-800 hover:bg-brand-50"
      }`}
    >
      {label}
    </button>
  );
}
