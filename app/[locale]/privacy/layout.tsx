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
    title: "Privacy Policy",
    description:
      "Privacy Policy for OmniDock Labs and SnipDock."
  },

  es: {
    title: "Política de Privacidad",
    description:
      "Política de Privacidad de OmniDock Labs y SnipDock."
  },

  pt: {
    title: "Política de Privacidade",
    description:
      "Política de Privacidade da OmniDock Labs e do SnipDock."
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
      canonical: `/${locale}/privacy`,
      languages: {
        en: "/en/privacy",
        es: "/es/privacy",
        pt: "/pt/privacy",
        "x-default": "/en/privacy"
      }
    }
  };
}

export default function PrivacyLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}