"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Cooling Installation", href: "/services#cooling-installation" },
  { name: "Cooling Repair", href: "/services#cooling-repair" },
  { name: "Cooling Maintenance", href: "/services#cooling-maintenance" },
  { name: "Heating Installation", href: "/services#heating-installation" },
  { name: "Heating Repair", href: "/services#heating-repair" },
  { name: "Heating Maintenance", href: "/services#heating-maintenance" },
  { name: "Indoor Air Quality", href: "/services#indoor-air-quality" },
  { name: "Commercial Services", href: "/services#commercial" },
  { name: "Residential Services", href: "/services#residential" },
  { name: "Home Automation", href: "/services#home-automation" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-red-brand text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <p className="hidden sm:block text-red-100">
            Serving Kansas City, Cass County & Eastern Jackson County
          </p>
          <a
            href="tel:8163940099"
            className="flex items-center gap-2 font-semibold hover:text-white/80 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            816.394.0099
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Air Experts Heating and Cooling"
                width={200}
                height={44}
                className="h-11 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              <Link href="/" className="text-gray-brand font-medium hover:text-blue-brand transition-colors">Home</Link>
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services" className="text-gray-brand font-medium hover:text-blue-brand transition-colors flex items-center gap-1">
                  Services <ChevronDown className="w-4 h-4" />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-60 border border-gray-100">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-brand hover:bg-blue-light hover:text-blue-brand transition-colors" onClick={() => setServicesOpen(false)}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/about" className="text-gray-brand font-medium hover:text-blue-brand transition-colors">About Us</Link>
              <Link href="/blog" className="text-gray-brand font-medium hover:text-blue-brand transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-brand font-medium hover:text-blue-brand transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden md:inline-flex bg-blue-brand hover:bg-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Schedule a Consultation
              </Link>
              <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block py-2 text-gray-brand font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/services" className="block py-2 text-gray-brand font-medium" onClick={() => setMobileOpen(false)}>Services</Link>
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block py-1.5 text-sm text-gray-brand" onClick={() => setMobileOpen(false)}>{s.name}</Link>
                ))}
              </div>
              <Link href="/about" className="block py-2 text-gray-brand font-medium" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/blog" className="block py-2 text-gray-brand font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/contact" className="block py-2 text-gray-brand font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
              <a href="tel:8163940099" className="block bg-red-brand text-white text-center font-semibold px-6 py-3 rounded-lg mt-4">Call 816.394.0099</a>
              <Link href="/contact" className="block bg-blue-brand text-white text-center font-semibold px-6 py-3 rounded-lg" onClick={() => setMobileOpen(false)}>Schedule a Consultation</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
