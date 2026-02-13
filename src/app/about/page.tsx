import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig, fullAddress } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "Local landscaping supplies yard in Jacobs Well with a strong focus on decorative stone, sands, soils, gravels, mulches, and pavers.",
};

export default function AboutPage() {
  return (
    <div className="textured-surface">
      <section className="border-b border-emerald-100/70 py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              About
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">
              Local experts in premium landscape supplies.
            </h1>
            <p className="mt-4 text-sm text-slate-600">
              {siteConfig.name} is a local supply yard with a strong focus on
              decorative stone and a wide range of sands, soils, gravels, and
              mulches. We support trade and DIY customers with reliable advice,
              consistent materials, and fast delivery options.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Visit us at {fullAddress} for a premium range of materials, plus
              pavers, blocks, and bagged cement products.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-emerald-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
              >
                Explore products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-emerald-300 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-emerald-700"
              >
                Request a quote
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-sm">
            <Image
              src="/images/overview.jpg"
              alt="Landscape supply yard overview"
              width={520}
              height={420}
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
