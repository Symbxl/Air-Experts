import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Banner — split red/blue */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-brand to-blue-brand" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have Heating and Cooling Peace of Mind. With Air Experts.
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you need emergency repair or a brand-new system, our team is
            here to help. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8163940099"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-brand font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call 816.394.0099
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg border border-white/30 backdrop-blur-sm"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Air Experts Heating and Cooling"
              width={180}
              height={40}
              className="h-10 w-auto mb-5 rounded bg-white px-2 py-1"
            />
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Three generations of trusted HVAC professionals serving the Kansas
              City area. We are committed to providing honest, reliable service
              for your home and business.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:8163940099" className="flex items-center gap-2 hover:text-red-brand transition-colors">
                <Phone className="w-4 h-4 text-red-brand" /> 816.394.0099
              </a>
              <a href="mailto:Airexpertkc@gmail.com" className="flex items-center gap-2 hover:text-blue-brand transition-colors">
                <Mail className="w-4 h-4 text-blue-brand" /> Airexpertkc@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-brand mt-0.5" />
                <span>Kansas City, Missouri</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-brand mt-0.5" />
                <span>24/7 Emergency Service Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Cooling Installation",
                "Cooling Repair",
                "Cooling Maintenance",
                "Heating Installation",
                "Heating Repair",
                "Heating Maintenance",
                "Indoor Air Quality",
                "Commercial HVAC",
                "Home Automation",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-white transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>Kansas City, MO</li>
              <li>Cass County</li>
              <li>Eastern Jackson County</li>
              <li>Belton, MO</li>
              <li>Raymore, MO</li>
              <li>Peculiar, MO</li>
              <li>Grandview, MO</li>
              <li>Lee&apos;s Summit, MO</li>
              <li>Blue Springs, MO</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Air Experts Heating and Cooling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
