import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig, fullAddress } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-emerald-100/70 bg-emerald-950 text-white">
      <Container className="grid gap-8 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
            {siteConfig.alternateName}
          </p>
          <p className="text-xl font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-emerald-100/80">{siteConfig.description}</p>
        </div>
        <div className="space-y-2 text-sm text-emerald-100/80">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
            Visit
          </p>
          <p>{fullAddress}</p>
          <p>{siteConfig.deliveryNote}</p>
        </div>
        <div className="space-y-2 text-sm text-emerald-100/80">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
            Contact
          </p>
          <p>
            <a href={`tel:${siteConfig.contact.phoneRaw}`}>
              {siteConfig.contact.phone}
            </a>
          </p>
          <p>
            <a href={`tel:${siteConfig.contact.mobileRaw}`}>
              {siteConfig.contact.mobile} ({siteConfig.contact.mobileContact})
            </a>
          </p>
          <p>{siteConfig.hours.weekday}</p>
          <p>{siteConfig.hours.saturday}</p>
          <p>{siteConfig.hours.sunday}</p>
          <div className="flex gap-4 pt-2 text-xs uppercase tracking-[0.3em]">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-emerald-200/70 hover:text-emerald-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-emerald-900 py-4 text-center text-xs text-emerald-200/60">
        Built for Gold Coast &amp; surrounding areas.
      </div>
    </footer>
  );
}
