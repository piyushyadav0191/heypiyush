import type { Metadata, Viewport } from "next";
import { Fira_Code, Inter } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";

import "@/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "sonner";
import site from "@/config/site";
import cn from "@/utils/cn";

import Providers from "./providers";

/**
 * The props of {@link RootLayout}.
 */
type RootLayoutProps = {
  /**
   * The child elements to render.
   */
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`,
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/favicon/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    site: "@piyushyadav0191",
    siteId: "1152256803746377730",
    creator: "@piyushyadav0191",
    creatorId: "1152256803746377730",
    images: [`${site.url}/images/logo.png`],
  },
  keywords: site.keywords,
  creator: "Piyush Yadav",
  openGraph: {
    url: site.url,
    type: "website",
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: "en-US",
    images: [
      {
        url: `${site.url}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: "/favicon/logo.png",
    shortcut: "/favicon/logo.png",
    apple: [
      {
        url: "/favicon/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [...site.favicons],
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const calcom = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calcom",
});

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html
      lang="en-US"
      className={cn(
        inter.variable,
        firaCode.variable,
        calcom.variable,
        "scroll-smooth"
      )}
      suppressHydrationWarning
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="relative font-default no-select">
        <Providers>
          <Header />
          <main
            id="skip-nav"
            className="mx-auto mb-16 max-w-5xl px-6 py-24 sm:px-8"
          >
            {children}
          </main>
          <Toaster />
          <Footer />
          {/* <Analytics /> */}
          <Image
            width={1512}
            height={550}
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
            src="/images/gradient-background-top.png"
            alt="Gradient background"
            priority
          />
          <Image
            width={1512}
            height={447}
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
            src="/images/gradient-background-bottom.png"
            alt="Gradient background"
            priority
          />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
