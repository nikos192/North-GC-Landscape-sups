export const siteConfig = {
  name: "Gold Coast Northern Landscape Supplies",
  alternateName: "Gold Coast Landscaping Supplies / Northern Landscape Supplies",
  description:
    "Local landscaping supplies yard focused on decorative stone, sands, soils, gravels, mulches, pavers, and bagged cement with small to bulk deliveries.",
  contact: {
    phone: "(07) 5546 1877",
    phoneRaw: "0755461877",
    mobile: "0409 616 148",
    mobileRaw: "0409616148",
    mobileContact: "Michelle",
  },
  address: {
    street: "1769 Stapylton-Jacobs Well Road",
    city: "Jacobs Well",
    region: "QLD",
    postalCode: "4208",
    country: "AU",
  },
  hours: {
    weekday: "Mon-Fri 6:30am-4:30pm",
    saturday: "Sat 6:30am-2:00pm",
    sunday: "Sun Closed",
  },
  serviceArea: "Gold Coast and surrounding areas",
  deliveryNote: "Small to bulk deliveries. Same-day delivery available (where possible).",
  ctas: {
    primary: "Request a Quote",
    secondary: "Call Now",
  },
  urls: {
    base: "https://example.com",
    maps: "https://www.google.com/maps/search/?api=1&query=1769+Stapylton-Jacobs+Well+Road,+Jacobs+Well+QLD+4208",
  },
  sameAs: [
    "https://www.facebook.com/GoldCoastLandscapingSupplies/",
    "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fgcnorthernlandscape%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEya1RLcnRXUFFQdlFFV3FQcXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5xjjGiVLWkLma4B7R1bml4qcexTN-flCQkNZZmyr-9_y80b5WDOMzLyYv0fQ_aem_9ZFksZ5GJXSuPyUQALnv9A&h=AT1YSn8CaWx-PyC8mZD3NC5huKEPSWah-UpUX8Pr4p3gRzLEtiLXOnoEFv2D-yuip08I4DZbBDMURVrNjL3t9GLSYlWZkC1wzw_amZ67VOGv62pK4qs6nhS3qIgp-LDYdi_MhiAL0w",
  ],
  nav: [
    { label: "Products", href: "/products" },
    { label: "Delivery", href: "/delivery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city} ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
