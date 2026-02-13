import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig, fullAddress } from "@/content/site";
import { productCategories } from "@/content/products";

export const metadata = {
  title: "Decorative Stone, Sands and Landscape Supplies",
  description:
    "Local landscaping supplies yard with premium decorative stone, sands, soils, gravels, mulches, pavers, and bagged cement. Small to bulk deliveries available.",
};

export default function Home() {
  return (
    <div className="textured-surface">
      <section className="border-b border-emerald-100/70">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              Premium landscape supplies
            </p>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Decorative stone, sands, soils and trade-ready landscaping supplies.
            </h1>
            <p className="max-w-xl text-base text-slate-600 md:text-lg">
              Gold Coast Northern Landscape Supplies is your local yard for
              decorative stone, sands, gravels, mulches, pavers, and bagged
              cement products. Small to bulk deliveries and same-day delivery
              available (where possible).
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="rounded-full border border-orange-500 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-orange-600 transition hover:bg-orange-500 hover:text-white"
              >
                {siteConfig.ctas.secondary}
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-emerald-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-500"
              >
                {siteConfig.ctas.primary}
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                Socials
              </span>
              <a
                href={siteConfig.sameAs[0]}
                className="font-semibold text-emerald-700 hover:text-emerald-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={siteConfig.sameAs[1]}
                className="font-semibold text-emerald-700 hover:text-emerald-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 right-6 hidden h-24 w-24 rounded-full bg-lime-100 md:block" />
            <div className="stone-panel rounded-[32px] border border-emerald-100 p-6 shadow-lg">
              <Image
                src="/images/overview.jpg"
                alt="Supply yard overview"
                width={520}
                height={420}
                className="h-full w-full rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </Container>
        <Container className="grid gap-6 border-t border-emerald-100/70 py-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
              Address
            </p>
            <p className="text-sm font-semibold text-slate-900">{fullAddress}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
              Hours
            </p>
            <p className="text-sm text-slate-700">{siteConfig.hours.weekday}</p>
            <p className="text-sm text-slate-700">{siteConfig.hours.saturday}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
              Delivery
            </p>
            <p className="text-sm text-slate-700">{siteConfig.deliveryNote}</p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
                Products
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Explore our core categories
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              View all products
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  width={360}
                  height={220}
                  className="h-40 w-full rounded-2xl object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600">{category.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-emerald-100/70 bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              Why choose us
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Trade-ready service, premium yard standards.
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-700">
              <li>Local yard with quick access to the right materials.</li>
              <li>Strong focus on decorative stone and feature finishes.</li>
              <li>Clear advice on quantities, coverage, and delivery options.</li>
              <li>Small to bulk deliveries with same-day available where possible.</li>
              <li>Convenient access to bagged cement and garden supplies.</li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-emerald-100 bg-emerald-50 p-6">
            <Image
              src="/images/deco.jpg"
              alt="Decorative stone range"
              width={520}
              height={420}
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              How delivery works
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Simple steps for fast delivery.
            </h2>
            <p className="text-sm text-slate-600">
              Tell us what you need, confirm quantities, and we will organise a
              delivery window that suits your site.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                step: "01",
                title: "Choose your product",
                text: "Pick the category and product type that suits the job.",
              },
              {
                step: "02",
                title: "Confirm quantity",
                text: "We help you calculate coverage and volume.",
              },
              {
                step: "03",
                title: "Book delivery",
                text: "Small to bulk deliveries with same-day available where possible.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-white p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                  {item.step}
                </p>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-emerald-100/70 bg-white py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              Service area
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Serving the Gold Coast and surrounding areas.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Visit our yard at {fullAddress} for expert advice, fast loading,
              and a wide range of decorative stone, sands, soils, and gravels.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 text-sm text-slate-700">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
              Call for quotes
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {siteConfig.contact.phone}
            </p>
            <p className="mt-2">{siteConfig.deliveryNote}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white"
            >
              Request a quote
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
