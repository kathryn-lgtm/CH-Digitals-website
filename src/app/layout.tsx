import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "CH Digitals | Websites, Systems, and AI Automation",
    template: "%s | CH Digitals",
  },
  description: siteConfig.description,
  keywords: [
    "Central Highlands digital agency",
    "regional Queensland web design",
    "AI automation for small business",
    "website design",
    "digital systems",
  ],
  openGraph: {
    title: "CH Digitals",
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--color-off-white)] text-[var(--color-black)]">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${siteConfig.gaMeasurementId}');`}
        </Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${siteConfig.metaPixelId}');
fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${siteConfig.metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
