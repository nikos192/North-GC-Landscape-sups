import { siteConfig } from "@/content/site";

export function MobileCallButton() {
  return (
    <a
      href={`tel:${siteConfig.contact.phoneRaw}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-400 md:hidden"
      aria-label="Call Gold Coast Northern Landscape Supplies"
    >
      Call Now
    </a>
  );
}
