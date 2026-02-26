import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "The Complete Guide to Indoor Air Quality for Your Home",
  description:
    "Poor indoor air quality affects your health. Learn about air filtration, ventilation, and solutions from Kansas City HVAC experts at Air Experts.",
  openGraph: {
    title:
      "The Complete Guide to Indoor Air Quality for Your Home | Air Experts KC",
    description:
      "Poor indoor air quality affects your health. Learn about air filtration, ventilation, and solutions from Kansas City HVAC experts.",
  },
};

export default function IndoorAirQualityGuide() {
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
              Indoor Air Quality
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              The Complete Guide to Indoor Air Quality for Your Home
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-brand">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                February 10, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-brand leading-relaxed">
              According to the EPA, indoor air can be 2-5 times more polluted
              than outdoor air. Since most people spend about 90% of their time
              indoors, the quality of the air in your home has a direct impact on
              your health. At Air Experts, we help Kansas City homeowners breathe
              easier with whole-house air quality solutions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Common Indoor Air Pollutants
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Understanding what&apos;s in your air is the first step to
              improving it. Common indoor pollutants include:
            </p>
            <ul className="list-disc pl-6 text-gray-brand space-y-2 mt-4">
              <li>
                <strong>Dust and dust mites</strong> — The most common indoor
                allergen, found in bedding, upholstery, and carpets.
              </li>
              <li>
                <strong>Pollen</strong> — Enters through open windows and doors,
                especially during Kansas City&apos;s allergy seasons.
              </li>
              <li>
                <strong>Pet dander</strong> — Tiny flakes of skin shed by cats,
                dogs, and other animals with fur or feathers.
              </li>
              <li>
                <strong>Mold and mildew</strong> — Thrives in humid environments
                like bathrooms, basements, and around HVAC systems.
              </li>
              <li>
                <strong>Volatile organic compounds (VOCs)</strong> — Released by
                cleaning products, paint, furniture, and building materials.
              </li>
              <li>
                <strong>Carbon monoxide</strong> — An odorless, dangerous gas
                that can leak from gas furnaces and appliances.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How Your HVAC System Affects Air Quality
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Your HVAC system is the lungs of your home — all air in your house
              passes through it multiple times a day. A well-maintained system
              with proper filtration actively cleans your air. A neglected system
              can actually make air quality worse by recirculating pollutants and
              even growing mold inside ductwork.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Whole-House Air Filtration Systems
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Whole-house air filtration systems capture the smallest
              contaminants, like pollen, mold, and pet dander. Unlike portable
              air purifiers that only clean one room, whole-house systems are
              integrated with your HVAC system to clean all the air throughout
              your home. Options include:
            </p>
            <ul className="list-disc pl-6 text-gray-brand space-y-2 mt-4">
              <li>
                <strong>HEPA filtration</strong> — Captures 99.97% of particles
                as small as 0.3 microns.
              </li>
              <li>
                <strong>Electronic air cleaners</strong> — Use an electrical
                charge to trap particles, effective for smoke and fine dust.
              </li>
              <li>
                <strong>UV air purifiers</strong> — Use ultraviolet light to
                kill bacteria, viruses, and mold spores as they pass through your
                system.
              </li>
              <li>
                <strong>Activated carbon filters</strong> — Excellent for
                removing odors and VOCs from your air.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Humidity Control
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Kansas City&apos;s climate means dealing with both dry winters and
              humid summers. The ideal indoor humidity level is between 30-50%.
              Too much humidity promotes mold growth and dust mites. Too little
              causes dry skin, respiratory irritation, and static electricity.
              Whole-house humidifiers and dehumidifiers maintain the perfect
              balance automatically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Ventilation Improvements
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Modern homes are built tight for energy efficiency, which is great
              for your utility bills but can trap pollutants inside. Proper
              ventilation brings in fresh outdoor air while exhausting stale
              indoor air. Energy recovery ventilators (ERVs) do this without
              wasting the energy you&apos;ve spent heating or cooling your air.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Simple Steps You Can Take Today
            </h2>
            <ol className="list-decimal pl-6 text-gray-brand space-y-3 mt-4">
              <li>
                Change your HVAC filter every 1-3 months — this is the easiest
                and most impactful thing you can do.
              </li>
              <li>
                Vacuum regularly with a HEPA-filter vacuum, especially if you
                have pets.
              </li>
              <li>
                Use exhaust fans in kitchens and bathrooms to remove moisture and
                pollutants at the source.
              </li>
              <li>
                Avoid smoking indoors — tobacco smoke contains over 4,000
                chemicals.
              </li>
              <li>
                Keep humidity levels in check — use your AC in summer and a
                humidifier in winter.
              </li>
              <li>
                Schedule annual HVAC maintenance to ensure your system is
                filtering and circulating air properly.
              </li>
              <li>
                Consider having your air ducts professionally cleaned every 3-5
                years.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              When to Call a Professional
            </h2>
            <p className="text-gray-brand leading-relaxed">
              If anyone in your household suffers from allergies, asthma, or
              respiratory issues, or if you notice musty smells, excessive dust,
              or inconsistent humidity, it&apos;s time to talk to an HVAC
              professional about your indoor air quality. At Air Experts, we
              offer comprehensive air quality assessments and can recommend the
              right solutions for your home and budget.
            </p>

            {/* CTA */}
            <div className="bg-light-bg rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Concerned About Your Indoor Air Quality?
              </h3>
              <p className="text-gray-brand mb-6">
                Air Experts can assess your home&apos;s air quality and recommend
                solutions tailored to your needs. Breathe easier with
                whole-house air filtration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-red-brand hover:bg-red-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Schedule an Assessment
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
