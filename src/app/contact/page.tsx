import Link from "next/link";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig, fullAddress } from "@/content/site";

export const metadata = {
  title: "Contact",
  description:
    "Call for quotes or request product advice from Gold Coast Northern Landscape Supplies in Jacobs Well.",
};

export default function ContactPage() {
  return (
    <div className="textured-surface">
      <section className="border-b border-emerald-100/70 py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">
              Call for quotes or delivery advice.
            </h1>
            <p className="mt-4 text-sm text-slate-600">
              Speak directly with our team about product availability, delivery
              timing, and quantities.
            </p>
            <div className="mt-6 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                Call now
              </p>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="mt-3 block text-2xl font-semibold text-slate-900"
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={`tel:${siteConfig.contact.mobileRaw}`}
                className="mt-2 block text-sm text-slate-600"
              >
                {siteConfig.contact.mobile} ({siteConfig.contact.mobileContact})
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-600">
              <p>{fullAddress}</p>
              <p>{siteConfig.hours.weekday}</p>
              <p>{siteConfig.hours.saturday}</p>
              <p>{siteConfig.hours.sunday}</p>
            </div>
            <Link
              href={siteConfig.urls.maps}
              className="mt-6 inline-flex rounded-full border border-emerald-300 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-emerald-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </Link>
          </div>
          <ContactForm />
        </Container>
      </section>
    </div>
  );
}
