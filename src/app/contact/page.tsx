import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Air Experts for all your heating and cooling needs in Kansas City. Call 816.394.0099 or email Airexpertkc@gmail.com. 24/7 emergency service available.",
};

const contactInfo = [
  { icon: Phone, title: "Phone", primary: "816.394.0099", secondary: "24/7 Emergency Service Available", href: "tel:8163940099", color: "red" as const },
  { icon: Mail, title: "Email", primary: "Airexpertkc@gmail.com", secondary: "We respond within 24 hours", href: "mailto:Airexpertkc@gmail.com", color: "blue" as const },
  { icon: MapPin, title: "Service Area", primary: "Kansas City, Missouri", secondary: "Cass County & Eastern Jackson County", color: "red" as const },
  { icon: Clock, title: "Hours", primary: "Mon-Fri: 8AM - 5PM", secondary: "24/7 Emergency Service Available", color: "blue" as const },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[350px] flex items-center">
        <Image src="/images/CY3A2890.jpg" alt="Air Experts service truck" fill className="object-cover" priority />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready for a consultation? Need emergency service? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${item.color === "red" ? "bg-red-light" : "bg-blue-light"}`}>
                  <item.icon className={`w-6 h-6 ${item.color === "red" ? "text-red-brand" : "text-blue-brand"}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className={`${item.color === "red" ? "text-red-brand" : "text-blue-brand"} font-semibold hover:opacity-80 transition-opacity`}>
                    {item.primary}
                  </a>
                ) : (
                  <p className="text-gray-900 font-semibold">{item.primary}</p>
                )}
                <p className="text-sm text-gray-brand mt-1">{item.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Consultation</h2>
                <p className="text-gray-brand mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-red-brand rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Emergency Service Needed?</h3>
                <p className="text-red-100 mb-6">If you have an HVAC emergency, don&apos;t wait — call us right now. We offer 24/7 emergency service.</p>
                <a href="tel:8163940099" className="inline-flex items-center gap-2 bg-white text-red-brand font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Phone className="w-5 h-5" /> 816.394.0099
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Service Area</h3>
                <p className="text-gray-brand text-sm mb-4">We proudly serve the following areas:</p>
                <div className="flex flex-wrap gap-2">
                  {["Kansas City", "Cass County", "Eastern Jackson County", "Belton", "Raymore", "Peculiar", "Grandview", "Lee's Summit", "Blue Springs"].map((area) => (
                    <span key={area} className="bg-light-bg text-gray-brand px-3 py-1.5 rounded-full text-xs font-medium">{area}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                <ol className="space-y-4 text-sm text-gray-brand">
                  {[
                    "Submit your request and we'll respond within 24 hours.",
                    "We'll schedule a convenient time for an assessment.",
                    "You'll receive an honest recommendation and clear quote.",
                    "Our certified technicians complete the work to your satisfaction.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`${i % 2 === 0 ? "bg-red-brand" : "bg-blue-brand"} text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0`}>{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
