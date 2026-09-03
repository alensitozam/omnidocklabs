import type {Metadata} from "next";

const locales = ["en", "es", "pt"] as const;

type Locale = (typeof locales)[number];

const metadataByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
  }
> = {
  en: {
    title: "Terms of Service",
    description:
      "Terms of Service for OmniDock Labs and SnipDock."
  },

  es: {
    title: "Términos de Servicio",
    description:
      "Términos de Servicio de OmniDock Labs y SnipDock."
  },

  pt: {
    title: "Termos de Serviço",
    description:
      "Termos de Serviço da OmniDock Labs e do SnipDock."
  }
};

function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = metadataByLocale[locale];

  return {
    title: content.title,
    description: content.description,

    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        en: "/en/terms",
        es: "/es/terms",
        pt: "/pt/terms",
        "x-default": "/en/terms"
      }
    }
  };
}

export default function TermsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}