import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { Providers } from "./component/provider";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Toaster } from "sonner";
import { defaultSEO } from "./lib/seo";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.todayatusa.com';

export const metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    ...defaultSEO.openGraph,
    url: siteUrl,
  },
  twitter: defaultSEO.twitter,
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGJ3LB8V');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGJ3LB8V"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Providers>
          <Navbar />
          <main className="px-6 max-w-full mx-auto">{children}</main>
          <Toaster richColors /> 
        </Providers>

        <Footer />
      </body>
    </html>
  );
}
