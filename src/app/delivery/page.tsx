import Image from "next/image";
import { Container } from "@/components/Container";
import { DeliveryQuoteForm } from "@/components/forms/DeliveryQuoteForm";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Delivery",
  description:
    "Small to bulk deliveries with same-day delivery available where possible. Request a delivery quote for your landscaping supplies.",
};

export default function DeliveryPage() {
  return (
    <div className="textured-surface">
      <section className="border-b border-emerald-100/70 py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              Delivery
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">
              Small to bulk deliveries made easy.
            </h1>
            <p className="mt-4 text-sm text-slate-600">
              {siteConfig.deliveryNote} We deliver premium decorative stone,
              sands, soils, gravels, mulches, and paving materials direct to
              site.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>- Same-day delivery available (where possible)</li>
              <li>- Flexible delivery windows for trade projects</li>
              <li>- Pickup available from our Jacobs Well yard</li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-sm">
            <Image
              src="/images/overview-2.jpg"
              alt="Supply yard overview"
              width={520}
              height={420}
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              Request delivery quote
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Tell us the product, quantity, and delivery date.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Complete the form and our team will confirm availability and
              pricing. For urgent deliveries, call us directly.
            </p>
          </div>
          <DeliveryQuoteForm />
        </Container>
      </section>
    </div>
  );
}
