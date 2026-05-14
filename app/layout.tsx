import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const siteName = "APY Calculator";
const description =
  "Free APY calculator to estimate compound growth, interest earned, and future balance from deposits, contributions, and compounding frequency.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "apy calculator",
    "annual percentage yield calculator",
    "compound interest apy calculator",
    "savings growth calculator",
    "high yield savings calculator",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
  robots: { index: true, follow: true },
};

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Contact", "/contact"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="container header-inner">
              <Link href="/" className="brand">APY Calculator</Link>
              <nav aria-label="Main navigation">
                <ul className="nav-list">
                  {nav.map(([label, href]) => (
                    <li key={href}><Link href={href}>{label}</Link></li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>
          <main className="container main-content">{children}</main>
          <footer className="site-footer">
            <div className="container footer-inner">
              <p>Free online APY calculator for savings growth, compound interest, and future balance planning.</p>
              <p>© {new Date().getFullYear()} APY Calculator</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
