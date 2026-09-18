"use client";

import { useEffect } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import { useEnquiryModal } from "@/components/EnquiryModalContext";
import type { TourPackage } from "@/lib/content";

export default function EnquiryModal({ packages }: { packages: TourPackage[] }) {
  const { isOpen, selectedPackage, closeModal } = useEnquiryModal();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close enquiry form"
        onClick={closeModal}
        className="absolute inset-0 bg-brand-950/70 backdrop-blur-sm"
      />

      <div className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl bg-cream-50 p-5 shadow-2xl sm:p-6">
        <button
          type="button"
          aria-label="Close"
          onClick={closeModal}
          className="absolute top-3.5 right-3.5 flex h-7 w-7 items-center justify-center rounded-full text-brand-800 hover:bg-brand-900/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <span className="text-[11px] font-semibold tracking-widest text-gold-600 uppercase">
          Enquire Now
        </span>
        <h3 className="mt-1.5 font-display text-lg leading-snug font-semibold text-brand-900 sm:text-xl">
          {selectedPackage ?? "Get a Free Kashmir Tour Quote"}
        </h3>
        <p className="mt-1 text-xs text-brand-800/70 sm:text-sm">
          Fill in your details and we&apos;ll reach out with pricing &amp; the full itinerary.
        </p>

        <div className="mt-5">
          <EnquiryForm
            key={selectedPackage ?? "default"}
            initialPackage={selectedPackage}
            packages={packages}
            compact
          />
        </div>
      </div>
    </div>
  );
}
