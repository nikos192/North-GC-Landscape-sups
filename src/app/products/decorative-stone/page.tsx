import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { productDetailCopy, productGalleries } from "@/content/products";

export const metadata = {
  title: "Decorative Stone",
  description:
    "Decorative stone, pebbles, and gravels with one of the largest ranges locally. Visit our Jacobs Well yard for premium feature stone.",
};

export default function DecorativeStonePage() {
  return (
    <div className="textured-surface">
      <section className="border-b border-emerald-100/70 py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
              Decorative stone
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">
              Premium decorative stone, pebbles and gravels.
            </h1>
            <p className="mt-4 text-sm text-slate-600">
              {productDetailCopy.decorativeStone.intro}
            </p>
            <p className="mt-3 text-sm font-semibold text-emerald-700">
              Call to check current stock and availability.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              {productDetailCopy.decorativeStone.bullets.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-emerald-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
              >
                Request a quote
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-emerald-300 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-emerald-700"
              >
                View all products
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-emerald-100 bg-white p-6 shadow-sm">
            <Image
              src={productGalleries.decorativeStone[0].src}
              alt={productGalleries.decorativeStone[0].alt}
              width={520}
              height={420}
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
                Decorative stone gallery
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                Feature stones, pebbles and gravels
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productGalleries.decorativeStone.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={420}
                height={320}
                className="h-56 w-full rounded-2xl border border-slate-200 object-cover"
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
