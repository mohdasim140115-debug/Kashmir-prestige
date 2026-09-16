"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type EnquiryModalContextValue = {
  isOpen: boolean;
  selectedPackage: string | null;
  openModal: (packageName?: string) => void;
  closeModal: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const openModal = useCallback((packageName?: string) => {
    setSelectedPackage(packageName ?? null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, selectedPackage, openModal, closeModal }),
    [isOpen, selectedPackage, openModal, closeModal]
  );

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return ctx;
}
