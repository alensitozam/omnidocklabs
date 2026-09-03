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
    title: "SnipDock",
    description:
      "Collect text, images and source links while you browse, organize your research locally, and copy clean material into Word, Google Docs and Notion."
  },

  es: {
    title: "SnipDock",
    description:
      "Recopila textos, imágenes y enlaces mientras navegas, organiza tu investigación localmente y copia material limpio a Word, Google Docs y Notion."
  },

  pt: {
    title: "SnipDock",
    description:
      "Colete textos, imagens e links enquanto navega, organize sua pesquisa localmente e copie conteúdo limpo para Word, Google Docs e Notion."
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
      canonical: `/${locale}/snipdock`,
      languages: {
        en: "/en/snipdock",
        es: "/es/snipdock",
        pt: "/pt/snipdock",
        "x-default": "/en/snipdock"
      }
    },

    openGraph: {
      type: "website",
      title: "SnipDock | OmniDock Labs",
      description: content.description,
      url: `/${locale}/snipdock`,
      siteName: "OmniDock Labs"
    },

    twitter: {
      card: "summary_large_image",
      title: "SnipDock | OmniDock Labs",
      description: content.description
    }
  };
}

export default function SnipDockLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}