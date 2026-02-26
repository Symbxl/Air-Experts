import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "When Should You Replace Your HVAC System? 7 Warning Signs",
  description:
    "Is your HVAC system on its last legs? Learn the 7 critical warning signs that it's time for a replacement from Kansas City's trusted HVAC experts.",
  openGraph: {
    title:
      "When Should You Replace Your HVAC System? 7 Warning Signs | Air Experts KC",
    description:
      "Learn the 7 critical warning signs that your HVAC system needs replacement from Kansas City's trusted HVAC experts.",
  },
};

export default function WhenToReplaceHvac() {
  return (
    <>
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-brand hover:text-blue-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="bg-blue-light text-blue-brand px-3 py-1 rounded-full text-xs font-semibold">
              Repair & Replacement
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              When Should You Replace Your HVAC System? 7 Warning Signs
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-brand">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                February 15, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />6 min read
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-brand leading-relaxed">
              Nobody wants to hear that they need a new HVAC system, but
              sometimes repair after repair just isn&apos;t worth it anymore. At
              Air Experts, we always give honest recommendations — we&apos;ll
              never push you toward a replacement if a repair makes more sense.
              But here are the seven warning signs that it may be time for a new
              system.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              1. Your System Is Over 15 Years Old
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Most HVAC systems last 15-20 years with proper maintenance. If
              your system is approaching or past this age, it&apos;s operating
              far less efficiently than modern units. Today&apos;s systems can be
              up to 60% more energy efficient, meaning a new system could
              significantly reduce your monthly energy bills.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              2. Rising Energy Bills
            </h2>
            <p className="text-gray-brand leading-relaxed">
              If your energy bills keep climbing despite consistent usage, your
              HVAC system is likely losing efficiency. As components wear out,
              the system has to run longer and harder to achieve the same
              temperature. Track your bills over the past few years — a steady
              increase is a clear sign.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              3. Frequent Repairs
            </h2>
            <p className="text-gray-brand leading-relaxed">
              The general rule of thumb: if a repair costs more than 50% of the
              value of a new system, replacement makes more sense. Also, if
              you&apos;re calling for repairs more than twice a year, those costs
              add up quickly. A new system comes with a warranty and years of
              trouble-free operation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              4. Inconsistent Temperatures
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Are some rooms too hot while others are too cold? While this can
              sometimes be a ductwork issue, it often indicates that your system
              can no longer distribute air effectively. This is especially common
              in older systems that have lost capacity over time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              5. Excessive Noise
            </h2>
            <p className="text-gray-brand leading-relaxed">
              All HVAC systems make some noise, but if yours has gotten
              noticeably louder — banging, rattling, humming, or squealing —
              that&apos;s a sign of worn-out components. In some cases, these can
              be repaired, but persistent noise in an older system usually means
              it&apos;s on its way out.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              6. Poor Indoor Air Quality
            </h2>
            <p className="text-gray-brand leading-relaxed">
              If you&apos;re noticing more dust, increased allergies, or
              humidity problems in your home, your aging system may no longer be
              able to properly filter and condition the air. Modern systems come
              with advanced filtration and humidity control that can dramatically
              improve your indoor air quality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              7. Your System Uses R-22 Refrigerant
            </h2>
            <p className="text-gray-brand leading-relaxed">
              R-22 (Freon) has been phased out due to its environmental impact.
              If your air conditioner uses R-22, the cost of refrigerant refills
              will continue to skyrocket as supply dwindles. Upgrading to a
              system that uses the newer R-410A refrigerant is better for the
              environment and your wallet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What to Do Next
            </h2>
            <p className="text-gray-brand leading-relaxed">
              If you&apos;re experiencing one or more of these warning signs, it
              doesn&apos;t necessarily mean you need to rush out and buy a new
              system today. The best first step is to have a professional assess
              your current system. At Air Experts, we&apos;ll give you an honest
              evaluation and help you weigh the costs of repair vs. replacement.
            </p>
            <p className="text-gray-brand leading-relaxed">
              Our skilled and certified experts will give honest recommendations
              on which system meets your property&apos;s specific needs. We work
              with you to ensure you get the right size unit for your space,
              installed properly and efficiently.
            </p>

            {/* CTA */}
            <div className="bg-light-bg rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Wondering If It&apos;s Time to Replace?
              </h3>
              <p className="text-gray-brand mb-6">
                Get an honest assessment from Air Experts. We&apos;ll evaluate
                your system and help you make the best decision for your home and
                budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-red-brand hover:bg-red-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Get a Free Assessment
                </Link>
                <a
                  href="tel:8163940099"
                  className="inline-flex items-center justify-center gap-2 bg-blue-brand hover:bg-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (816) 394-0099
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
