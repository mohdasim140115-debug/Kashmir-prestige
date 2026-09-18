"use client";

import { useRef, useState } from "react";
import { TextInput } from "./ui";

export function ImageUploader({
  value,
  onChange,
  label = "Image",
}: {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus("uploading");
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Upload failed.");
        return;
      }

      onChange(data.url);
      setStatus("idle");
    } catch {
      setStatus("error");
      setError("Network error during upload.");
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div>
      <span className="mb-1.5 block text-xs font-semibold text-brand-800">{label}</span>

      <div className="flex items-center gap-3">
        {value && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={value}
            alt=""
            className="h-14 w-14 shrink-0 rounded-lg border border-brand-900/15 object-cover"
          />
        )}
        <div className="flex-1 space-y-2">
          <TextInput
            value={value}
            placeholder="Paste an image URL..."
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={status === "uploading"}
              className="rounded-lg border border-brand-900/15 px-3 py-1.5 text-xs font-semibold text-brand-800 transition-colors hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "uploading" ? "Uploading..." : "Upload from device"}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
            {status === "error" && <span className="text-xs font-medium text-red-600">{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
