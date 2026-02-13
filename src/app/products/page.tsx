import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { productCategories } from "@/content/products";

export const metadata = {
  title: "Products",
  description:
    "Browse decorative stone, sands, soils, gravels, mulches, pavers, and garden supplies available from our Jacobs Well yard.",
};

export default function ProductsPage() {
  return (
    <div className="textured-surface">
      <section className="border-b border-emerald-100/70 py-16">
        <Container>
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-600">
            Products
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">
            Landscape supplies for every stage of the job.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-600">
            From premium decorative stone to reliable sands, gravels, mulches,
            pavers, and garden supplies, we stock a wide range of materials for
            trade and DIY projects.
          </p>
          <p className="mt-4 text-sm font-semibold text-emerald-700">
            Call to check current stock and availability.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
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
                  className="h-44 w-full rounded-2xl object-cover"
                />
                <div className="mt-4 space-y-2">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {category.title}
                  </h2>
                  <p className="text-sm text-slate-600">{category.summary}</p>
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    View category
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
