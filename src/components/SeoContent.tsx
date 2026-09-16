import { business } from "@/lib/data";

function Kw({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-brand-800">{children}</strong>;
}

export default function SeoContent() {
  return (
    <section className="bg-cream-100 py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-3xl border border-brand-900/10 bg-white px-6 py-10 shadow-sm sm:px-12 sm:py-14">
          <h2 className="text-center font-display text-2xl font-semibold tracking-wide text-brand-900 uppercase sm:text-3xl">
            Trusted Travel Agency for Kashmir Tours
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-[15px] leading-relaxed text-brand-800/85">
            <p>
              Plan your perfect <Kw>Kashmir vacation</Kw> with {business.name} —
              a Kashmir-based travel company offering <Kw>Kashmir tour packages</Kw>{" "}
              for every kind of traveller. As local <Kw>Kashmir tour operators</Kw>,
              we put together <Kw>Kashmir holiday packages</Kw> at a fair price,
              whether you want a <Kw>Kashmir tour package for couples</Kw>, a{" "}
              <Kw>Kashmir family tour package</Kw> or <Kw>Kashmir group tour packages</Kw>.
              Every <Kw>Kashmir trip package</Kw> is a customised itinerary covering
              Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg &amp; Verinag.
            </p>
            <p>
              Get a clear <Kw>Kashmir trip cost</Kw> with no hidden charges and
              support before, during and after your journey. From houseboat
              stays on Dal Lake to the Gulmarg Gondola and the meadows of
              Pahalgam, we handle the stays, transport and route so your{" "}
              <Kw>Kashmir holidays</Kw> feel effortless — a <Kw>Kashmir travel</Kw>{" "}
              experience worth remembering.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 border-t border-brand-900/10 pt-8 sm:grid-cols-2">
            <p className="text-sm leading-relaxed text-brand-800/80">
              Looking for the <Kw>cheapest Kashmir tour packages</Kw> or a{" "}
              <Kw>Kashmir trip on a budget</Kw>? We build value itineraries with
              clean stays and shared transport that still cover every
              highlight — plus premium and luxury options when you want them.
            </p>
            <p className="text-sm leading-relaxed text-brand-800/80">
              We plan <Kw>Kashmir trips</Kw> for travellers from Delhi, Mumbai,
              Bengaluru, Hyderabad, Chennai, Kolkata, Pune and Ahmedabad, as
              well as families and honeymooners flying in from across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
