"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { SiteContent, Business, HeroContent } from "@/lib/content";
import { Field, TextInput, TextArea, Card, SaveButton } from "./ui";
import {
  PackagesEditor,
  DestinationsEditor,
  GalleryEditor,
  InclusionsEditor,
  PromisesEditor,
  TestimonialsEditor,
} from "./SectionEditors";

type SaveStatus = "idle" | "saving" | "saved" | "error";

const tabs = [
  { id: "business", label: "Business Info" },
  { id: "hero", label: "Hero Section" },
  { id: "packages", label: "Tour Packages" },
  { id: "destinations", label: "Destinations" },
  { id: "gallery", label: "Gallery" },
  { id: "inclusions", label: "Inclusions" },
  { id: "promises", label: "Our Promise" },
  { id: "testimonials", label: "Reviews" },
  { id: "lists", label: "Pickup Points & Services" },
] as const;

type TabId = (typeof tabs)[number]["id"];

async function saveSection<T>(section: keyof SiteContent, data: T): Promise<boolean> {
  try {
    const res = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, data }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function BusinessForm({ initial }: { initial: Business }) {
  const [form, setForm] = useState<Business>(initial);
  const [status, setStatus] = useState<SaveStatus>("idle");

  async function handleSave() {
    setStatus("saving");
    const ok = await saveSection("business", form);
    setStatus(ok ? "saved" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-brand-900">Business Info</h2>
        <SaveButton status={status} onClick={handleSave} />
      </div>
      {status === "error" && <p className="mb-3 text-sm font-medium text-red-600">Could not save.</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Business Name">
          <TextInput value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </Field>
        <Field label="Owner Name">
          <TextInput value={form.owner} onChange={(e) => setForm({ ...form, owner: e.target.value })} />
        </Field>
        <Field label="Phone (digits only, e.g. 9876543210)">
          <TextInput value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </Field>
        <Field label="Phone Display (e.g. +91 98765 43210)">
          <TextInput value={form.phoneDisplay} onChange={(e) => setForm({ ...form, phoneDisplay: e.target.value })} />
        </Field>
        <Field label="WhatsApp Link (https://wa.me/91...)">
          <TextInput value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} />
        </Field>
        <Field label="Email">
          <TextInput value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </Field>
        <Field label="Full Address">
          <TextInput value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
        </Field>
        <Field label="Short Address">
          <TextInput value={form.addressShort} onChange={(e) => setForm({ ...form, addressShort: e.target.value })} />
        </Field>
      </div>
    </Card>
  );
}

function HeroForm({ initial }: { initial: HeroContent }) {
  const [form, setForm] = useState<HeroContent>(initial);
  const [status, setStatus] = useState<SaveStatus>("idle");

  async function handleSave() {
    setStatus("saving");
    const ok = await saveSection("hero", form);
    setStatus(ok ? "saved" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-brand-900">Hero Section</h2>
        <SaveButton status={status} onClick={handleSave} />
      </div>
      {status === "error" && <p className="mb-3 text-sm font-medium text-red-600">Could not save.</p>}
      <div className="space-y-4">
        <Field label="Kicker text (small line above heading)">
          <TextInput value={form.kicker} onChange={(e) => setForm({ ...form, kicker: e.target.value })} />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Heading Line 1">
            <TextInput value={form.headingLine1} onChange={(e) => setForm({ ...form, headingLine1: e.target.value })} />
          </Field>
          <Field label="Heading Line 2 (gold)">
            <TextInput value={form.headingLine2} onChange={(e) => setForm({ ...form, headingLine2: e.target.value })} />
          </Field>
        </div>
        <Field label="Paragraph">
          <TextArea rows={3} value={form.paragraph} onChange={(e) => setForm({ ...form, paragraph: e.target.value })} />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Tagline (italic quote)">
            <TextInput value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} />
          </Field>
          <Field label="Location Tag">
            <TextInput value={form.locationTag} onChange={(e) => setForm({ ...form, locationTag: e.target.value })} />
          </Field>
        </div>
        <Field label="Keyword chips (comma separated)">
          <TextInput
            value={form.keywords.join(", ")}
            onChange={(e) =>
              setForm({ ...form, keywords: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
            }
          />
        </Field>
      </div>
    </Card>
  );
}

function ListsForm({ initial }: { initial: { pickupPoints: string[]; services: string[] } }) {
  const [pickupPoints, setPickupPoints] = useState(initial.pickupPoints.join("\n"));
  const [services, setServices] = useState(initial.services.join("\n"));
  const [status, setStatus] = useState<SaveStatus>("idle");

  async function handleSave() {
    setStatus("saving");
    const ok1 = await saveSection(
      "pickupPoints",
      pickupPoints.split("\n").map((s) => s.trim()).filter(Boolean)
    );
    const ok2 = await saveSection(
      "services",
      services.split("\n").map((s) => s.trim()).filter(Boolean)
    );
    setStatus(ok1 && ok2 ? "saved" : "error");
    if (ok1 && ok2) setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-brand-900">Pickup Points &amp; Services</h2>
        <SaveButton status={status} onClick={handleSave} />
      </div>
      {status === "error" && <p className="mb-3 text-sm font-medium text-red-600">Could not save.</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Pickup Points (one per line)">
          <TextArea rows={6} value={pickupPoints} onChange={(e) => setPickupPoints(e.target.value)} />
        </Field>
        <Field label="Services (one per line)">
          <TextArea rows={6} value={services} onChange={(e) => setServices(e.target.value)} />
        </Field>
      </div>
    </Card>
  );
}

export default function AdminDashboard({
  initialContent,
  databaseConfigured,
  uploadsConfigured,
}: {
  initialContent: SiteContent;
  databaseConfigured: boolean;
  uploadsConfigured: boolean;
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabId>("business");
  const [content] = useState(initialContent);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-cream-100">
      <header className="sticky top-0 z-10 border-b border-brand-900/10 bg-cream-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
              Kashmir Prestige
            </span>
            <h1 className="font-display text-xl font-semibold text-brand-900">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="rounded-full border border-brand-900/15 px-4 py-2 text-xs font-semibold text-brand-800 hover:bg-brand-50"
            >
              View Site ↗
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full bg-brand-900 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-800"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {!databaseConfigured && (
        <div className="bg-red-50 px-5 py-3 text-center text-sm font-medium text-red-700 sm:px-8">
          Database is not connected yet. Changes will not be saved until UPSTASH_REDIS_REST_URL
          and UPSTASH_REDIS_REST_TOKEN are added to your environment.
        </div>
      )}
      {!uploadsConfigured && (
        <div className="bg-amber-50 px-5 py-3 text-center text-sm font-medium text-amber-800 sm:px-8">
          Image uploads are not connected yet. Add UPSTASH_BLOB_TOKEN to your environment to
          enable &quot;Upload from device&quot; — pasting image URLs still works fine.
        </div>
      )}

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-wrap gap-2 border-b border-brand-900/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "bg-brand-900 text-white"
                  : "bg-white text-brand-800 hover:bg-brand-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "business" && <BusinessForm initial={content.business} />}
          {activeTab === "hero" && <HeroForm initial={content.hero} />}
          {activeTab === "packages" && (
            <PackagesEditor initial={content.packages} onSave={(data) => saveSection("packages", data)} />
          )}
          {activeTab === "destinations" && (
            <DestinationsEditor
              initial={content.destinations}
              onSave={(data) => saveSection("destinations", data)}
            />
          )}
          {activeTab === "gallery" && (
            <GalleryEditor initial={content.gallery} onSave={(data) => saveSection("gallery", data)} />
          )}
          {activeTab === "inclusions" && (
            <InclusionsEditor initial={content.inclusions} onSave={(data) => saveSection("inclusions", data)} />
          )}
          {activeTab === "promises" && (
            <PromisesEditor initial={content.promises} onSave={(data) => saveSection("promises", data)} />
          )}
          {activeTab === "testimonials" && (
            <TestimonialsEditor
              initial={content.testimonials}
              onSave={(data) => saveSection("testimonials", data)}
            />
          )}
          {activeTab === "lists" && (
            <ListsForm initial={{ pickupPoints: content.pickupPoints, services: content.services }} />
          )}
        </div>
      </div>
    </div>
  );
}
