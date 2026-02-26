import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://airexpertskc.com"),
  title: {
    default: "Air Experts Heating & Cooling | Kansas City HVAC Services",
    template: "%s | Air Experts KC",
  },
  description:
    "Three generations of trusted HVAC experts serving Kansas City, Cass County & Eastern Jackson County. 24/7 heating, cooling, installation, repair & maintenance. Call (816) 394-0099.",
  keywords: [
    "HVAC Kansas City",
    "heating repair Kansas City",
    "cooling installation Kansas City",
    "air conditioning repair KC",
    "furnace installation Kansas City",
    "AC maintenance Kansas City",
    "indoor air quality Kansas City",
    "commercial HVAC Kansas City",
    "residential HVAC Kansas City",
    "Air Experts KC",
    "Cass County HVAC",
    "Jackson County HVAC",
    "24 hour HVAC service Kansas City",
  ],
  openGraph: {
    title: "Air Experts Heating & Cooling | Kansas City HVAC Services",
    description:
      "Three generations of trusted HVAC experts serving Kansas City. 24/7 heating, cooling, installation, repair & maintenance.",
    url: "https://airexpertskc.com",
    siteName: "Air Experts KC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Experts Heating & Cooling | Kansas City HVAC",
    description:
      "Three generations of trusted HVAC experts serving Kansas City. Call (816) 394-0099.",
  },
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
  alternates: {
    canonical: "https://airexpertskc.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Air Experts Heating and Cooling",
    url: "https://airexpertskc.com",
    telephone: "(816) 394-0099",
    description:
      "Three generations of trusted HVAC experts serving Kansas City, Cass County & Eastern Jackson County. Installation, repair, maintenance for all makes and models.",
    areaServed: [
      { "@type": "County", name: "Cass County, Missouri" },
      { "@type": "County", name: "Eastern Jackson County, Missouri" },
      { "@type": "City", name: "Kansas City, Missouri" },
    ],
    serviceType: [
      "Heating Installation",
      "Heating Repair",
      "Heating Maintenance",
      "Cooling Installation",
      "Cooling Repair",
      "Cooling Maintenance",
      "Indoor Air Quality",
      "Commercial HVAC",
      "Home Automation",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${workSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
