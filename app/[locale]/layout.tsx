import type {Metadata} from "next";
import {hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import "../globals.css";

const locales = ["en", "es", "pt"] as const;

type Locale = (typeof locales)[number];

const homeMetadata: Record<
  Locale,
  {
    description: string;
    ogDescription: string;
  }
> = {
  en: {
    description:
      "OmniDock Labs creates focused digital products that make everyday work simpler.",
    ogDescription:
      "Focused software and digital tools built to make everyday work simpler."
  },

  es: {
    description:
      "OmniDock Labs crea productos digitales enfocados en simplificar el trabajo cotidiano.",
    ogDescription:
      "Software y herramientas digitales creadas para simplificar el trabajo cotidiano."
  },

  pt: {
    description:
      "A OmniDock Labs cria produtos digitais focados em simplificar o trabalho do dia a dia.",
    ogDescription:
      "Software e ferramentas digitais criados para simplificar o trabalho do dia a dia."
  }
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR"
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!hasLocale(locales, locale)) {
    return {};
  }

  const currentLocale = locale as Locale;
  const content = homeMetadata[currentLocale];

  return {
    metadataBase: new URL("https://omnidocklabs.com"),

    title: {
      default: "OmniDock Labs",
      template: "%s | OmniDock Labs"
    },

    description: content.description,

    applicationName: "OmniDock Labs",

    authors: [
      {
        name: "OmniDock Labs"
      }
    ],

    creator: "OmniDock Labs",
    publisher: "OmniDock Labs",

    alternates: {
      canonical: `/${currentLocale}`,
      languages: {
        en: "/en",
        es: "/es",
        pt: "/pt",
        "x-default": "/en"
      }
    },

    openGraph: {
      type: "website",
      siteName: "OmniDock Labs",
      title: "OmniDock Labs",
      description: content.ogDescription,
      url: `/${currentLocale}`,
      locale: openGraphLocales[currentLocale],
      alternateLocale: Object.values(openGraphLocales).filter(
        (value) => value !== openGraphLocales[currentLocale]
      )
    },

    twitter: {
      card: "summary_large_image",
      title: "OmniDock Labs",
      description: content.ogDescription
    },

    robots: {
      index: true,
      follow: true
    },

    formatDetection: {
      email: false,
      address: false,
      telephone: false
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}