"use client";

import { useState } from "react";
import type {
  TourPackage,
  Destination,
  GalleryPhoto,
  Inclusion,
  PromiseItem,
  Testimonial,
} from "@/lib/content";
import { Field, TextInput, TextArea, Card, SaveButton, IconButton } from "./ui";
import { ImageUploader } from "./ImageUploader";

type SaveStatus = "idle" | "saving" | "saved" | "error";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ---------- Packages ----------

const emptyPackage: TourPackage = {
  slug: "",
  name: "New Package",
  keyword: "",
  duration: "3N / 4D",
  nights: 3,
  days: 4,
  badge: "",
  places: [],
  highlights: [],
  image: "",
  price: 9999,
};

export function PackagesEditor({
  initial,
  onSave,
}: {
  initial: TourPackage[];
  onSave: (data: TourPackage[]) => Promise<boolean>;
}) {
  const [items, setItems] = useState<TourPackage[]>(initial);
  const [status, setStatus] = useState<SaveStatus>("idle");

  function update(i: number, patch: Partial<TourPackage>) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }

  function addItem() {
    const next = { ...emptyPackage, slug: `new-package-${items.length + 1}` };
    setItems((prev) => [...prev, next]);
  }

  function removeItem(i: number) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSave() {
    setStatus("saving");
    const ok = await onSave(items);
    setStatus(ok ? "saved" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-brand-900">Tour Packages</h2>
        <div className="flex gap-2">
          <IconButton onClick={addItem} label="+ Add Package" />
          <SaveButton status={status} onClick={handleSave} />
        </div>
      </div>
      {status === "error" && (
        <p className="text-sm font-medium text-red-600">Could not save. Check database setup.</p>
      )}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {items.map((pkg, i) => (
          <Card key={i}>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wide text-gold-600 uppercase">
                Package {i + 1}
              </span>
              <IconButton onClick={() => removeItem(i)} label="Remove" variant="danger" />
            </div>
            <div className="space-y-3">
              <Field label="Name">
                <TextInput
                  value={pkg.name}
                  onChange={(e) =>
                    update(i, { name: e.target.value, slug: slugify(e.target.value) || pkg.slug })
                  }
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Keyword / Tag">
                  <TextInput value={pkg.keyword} onChange={(e) => update(i, { keyword: e.target.value })} />
                </Field>
                <Field label="Badge">
                  <TextInput value={pkg.badge ?? ""} onChange={(e) => update(i, { badge: e.target.value })} />
                </Field>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Field label="Duration">
                  <TextInput value={pkg.duration} onChange={(e) => update(i, { duration: e.target.value })} />
                </Field>
                <Field label="Nights">
                  <TextInput
                    type="number"
                    value={pkg.nights}
                    onChange={(e) => update(i, { nights: Number(e.target.value) })}
                  />
                </Field>
                <Field label="Days">
                  <TextInput
                    type="number"
                    value={pkg.days}
                    onChange={(e) => update(i, { days: Number(e.target.value) })}
                  />
                </Field>
              </div>
              <Field label="Price (₹ per person)">
                <TextInput
                  type="number"
                  value={pkg.price}
                  onChange={(e) => update(i, { price: Number(e.target.value) })}
                />
              </Field>
              <Field label="Places (comma separated)">
                <TextInput
                  value={pkg.places.join(", ")}
                  onChange={(e) =>
                    update(i, { places: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
                  }
                />
              </Field>
              <Field label="Highlights (one per line)">
                <TextArea
                  rows={3}
                  value={pkg.highlights.join("\n")}
                  onChange={(e) =>
                    update(i, { highlights: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) })
                  }
                />
              </Field>
              <ImageUploader
                label="Package Image"
                value={pkg.image}
                onChange={(url) => update(i, { image: url })}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ---------- Destinations ----------

const emptyDestination: Destination = {
  slug: "",
  name: "New Destination",
  tagline: "",
  description: "",
  image: "",
};

export function DestinationsEditor({
  initial,
  onSave,
}: {
  initial: Destination[];
  onSave: (data: Destination[]) => Promise<boolean>;
}) {
  const [items, setItems] = useState<Destination[]>(initial);
  const [status, setStatus] = useState<SaveStatus>("idle");

  function update(i: number, patch: Partial<Destination>) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }
  function addItem() {
    setItems((prev) => [...prev, { ...emptyDestination, slug: `new-destination-${prev.length + 1}` }]);
  }
  function removeItem(i: number) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }
  async function handleSave() {
    setStatus("saving");
    const ok = await onSave(items);
    setStatus(ok ? "saved" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-brand-900">Destinations</h2>
        <div className="flex gap-2">
          <IconButton onClick={addItem} label="+ Add Destination" />
          <SaveButton status={status} onClick={handleSave} />
        </div>
      </div>
      {status === "error" && <p className="text-sm font-medium text-red-600">Could not save.</p>}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {items.map((d, i) => (
          <Card key={i}>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wide text-gold-600 uppercase">
                Destination {i + 1}
              </span>
              <IconButton onClick={() => removeItem(i)} label="Remove" variant="danger" />
            </div>
            <div className="space-y-3">
              <Field label="Name">
                <TextInput
                  value={d.name}
                  onChange={(e) => update(i, { name: e.target.value, slug: slugify(e.target.value) || d.slug })}
                />
              </Field>
              <Field label="Tagline">
                <TextInput value={d.tagline} onChange={(e) => update(i, { tagline: e.target.value })} />
              </Field>
              <Field label="Description">
                <TextArea rows={3} value={d.description} onChange={(e) => update(i, { description: e.target.value })} />
              </Field>
              <ImageUploader
                label="Destination Image"
                value={d.image}
                onChange={(url) => update(i, { image: url })}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ---------- Gallery ----------

export function GalleryEditor({
  initial,
  onSave,
}: {
  initial: GalleryPhoto[];
  onSave: (data: GalleryPhoto[]) => Promise<boolean>;
}) {
  const [items, setItems] = useState<GalleryPhoto[]>(initial);
  const [status, setStatus] = useState<SaveStatus>("idle");

  function update(i: number, patch: Partial<GalleryPhoto>) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }
  function addItem() {
    setItems((prev) => [...prev, { src: "", alt: "" }]);
  }
  function removeItem(i: number) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }
  async function handleSave() {
    setStatus("saving");
    const ok = await onSave(items);
    setStatus(ok ? "saved" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-brand-900">Gallery Photos</h2>
        <div className="flex gap-2">
          <IconButton onClick={addItem} label="+ Add Photo" />
          <SaveButton status={status} onClick={handleSave} />
        </div>
      </div>
      {status === "error" && <p className="text-sm font-medium text-red-600">Could not save.</p>}

      <div className="space-y-3">
        {items.map((photo, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-wide text-gold-600 uppercase">
                Photo {i + 1}
              </span>
              <IconButton onClick={() => removeItem(i)} label="Remove" variant="danger" />
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ImageUploader label="Photo" value={photo.src} onChange={(url) => update(i, { src: url })} />
              <div className="space-y-3">
                <Field label="Alt text (description)">
                  <TextInput value={photo.alt} onChange={(e) => update(i, { alt: e.target.value })} />
                </Field>
                <label className="flex items-center gap-1.5 text-xs text-brand-800">
                  <input
                    type="checkbox"
                    checked={Boolean(photo.tall)}
                    onChange={(e) => update(i, { tall: e.target.checked })}
                  />
                  Tall tile (spans 2 rows in the grid)
                </label>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ---------- Inclusions & Promises (same shape: title + detail) ----------

function TitleDetailEditor({
  heading,
  initial,
  onSave,
}: {
  heading: string;
  initial: (Inclusion | PromiseItem)[];
  onSave: (data: (Inclusion | PromiseItem)[]) => Promise<boolean>;
}) {
  const [items, setItems] = useState(initial);
  const [status, setStatus] = useState<SaveStatus>("idle");

  function update(i: number, patch: Partial<Inclusion>) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }
  function addItem() {
    setItems((prev) => [...prev, { title: "New item", detail: "" }]);
  }
  function removeItem(i: number) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }
  async function handleSave() {
    setStatus("saving");
    const ok = await onSave(items);
    setStatus(ok ? "saved" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-brand-900">{heading}</h2>
        <div className="flex gap-2">
          <IconButton onClick={addItem} label="+ Add" />
          <SaveButton status={status} onClick={handleSave} />
        </div>
      </div>
      {status === "error" && <p className="text-sm font-medium text-red-600">Could not save.</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <Card key={i}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wide text-gold-600 uppercase">
                  Item {i + 1}
                </span>
                <IconButton onClick={() => removeItem(i)} label="Remove" variant="danger" />
              </div>
              <Field label="Title">
                <TextInput value={item.title} onChange={(e) => update(i, { title: e.target.value })} />
              </Field>
              <Field label="Detail">
                <TextArea rows={2} value={item.detail} onChange={(e) => update(i, { detail: e.target.value })} />
              </Field>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function InclusionsEditor(props: {
  initial: Inclusion[];
  onSave: (data: Inclusion[]) => Promise<boolean>;
}) {
  return <TitleDetailEditor heading="What's Included" {...props} />;
}

export function PromisesEditor(props: {
  initial: PromiseItem[];
  onSave: (data: PromiseItem[]) => Promise<boolean>;
}) {
  return <TitleDetailEditor heading="Our Promise Cards" {...props} />;
}

// ---------- Testimonials ----------

export function TestimonialsEditor({
  initial,
  onSave,
}: {
  initial: Testimonial[];
  onSave: (data: Testimonial[]) => Promise<boolean>;
}) {
  const [items, setItems] = useState<Testimonial[]>(initial);
  const [status, setStatus] = useState<SaveStatus>("idle");

  function update(i: number, patch: Partial<Testimonial>) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }
  function addItem() {
    setItems((prev) => [...prev, { name: "", role: "", rating: 5, quote: "" }]);
  }
  function removeItem(i: number) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }
  async function handleSave() {
    setStatus("saving");
    const ok = await onSave(items);
    setStatus(ok ? "saved" : "error");
    if (ok) setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm text-brand-800/70">
          Only add reviews from real travellers. This section stays hidden on the site until
          there is at least one entry here.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-brand-900">Traveller Reviews</h2>
        <div className="flex gap-2">
          <IconButton onClick={addItem} label="+ Add Review" />
          <SaveButton status={status} onClick={handleSave} />
        </div>
      </div>
      {status === "error" && <p className="text-sm font-medium text-red-600">Could not save.</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((t, i) => (
          <Card key={i}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wide text-gold-600 uppercase">
                  Review {i + 1}
                </span>
                <IconButton onClick={() => removeItem(i)} label="Remove" variant="danger" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Name">
                  <TextInput value={t.name} onChange={(e) => update(i, { name: e.target.value })} />
                </Field>
                <Field label="Role / Trip">
                  <TextInput value={t.role} onChange={(e) => update(i, { role: e.target.value })} />
                </Field>
              </div>
              <Field label="Rating (1-5)">
                <TextInput
                  type="number"
                  min={1}
                  max={5}
                  value={t.rating}
                  onChange={(e) => update(i, { rating: Number(e.target.value) })}
                />
              </Field>
              <Field label="Quote">
                <TextArea rows={3} value={t.quote} onChange={(e) => update(i, { quote: e.target.value })} />
              </Field>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
