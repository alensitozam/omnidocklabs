import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnidocklabs.com"),

  title: {
    default: "OmniDock Labs",
    template: "%s | OmniDock Labs"
  },

  description:
    "OmniDock Labs creates focused digital products that make everyday work simpler.",

  applicationName: "OmniDock Labs",

  authors: [
    {
      name: "OmniDock Labs"
    }
  ],

  creator: "OmniDock Labs",
  publisher: "OmniDock Labs",

  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },

  openGraph: {
    type: "website",
    siteName: "OmniDock Labs",
    title: "OmniDock Labs",
    description:
      "Software built to make work simpler.",
    url: "https://omnidocklabs.com"
  },

  twitter: {
    card: "summary_large_image",
    title: "OmniDock Labs",
    description:
      "Software built to make work simpler."
  },

  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
