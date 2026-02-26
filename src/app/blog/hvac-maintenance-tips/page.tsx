import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "10 HVAC Maintenance Tips Every Homeowner Should Know",
  description:
    "Regular HVAC maintenance can extend your system's life by years. Learn the top 10 tips from Kansas City's trusted HVAC experts at Air Experts.",
  openGraph: {
    title:
      "10 HVAC Maintenance Tips Every Homeowner Should Know | Air Experts KC",
    description:
      "Regular HVAC maintenance can extend your system's life by years. Learn the top 10 tips from Kansas City's trusted HVAC experts.",
  },
};

export default function HvacMaintenanceTips() {
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
              Maintenance
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              10 HVAC Maintenance Tips Every Homeowner Should Know
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-brand">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                February 20, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />8 min read
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-brand leading-relaxed">
              Your HVAC system is one of the most important — and expensive —
              components of your home. Regular maintenance not only keeps your
              family comfortable but can extend the life of your system by years
              and save you thousands of dollars in unexpected repairs. At Air
              Experts, we&apos;ve been maintaining HVAC systems in Kansas City
              for three generations. Here are our top tips.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              1. Change Your Air Filters Regularly
            </h2>
            <p className="text-gray-brand leading-relaxed">
              This is the single most important thing you can do for your HVAC
              system. A clogged filter restricts airflow, forcing your system to
              work harder and use more energy. For standard 1-inch filters, we
              recommend changing them every 1-3 months. If you have pets or
              allergies, lean toward monthly changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              2. Schedule Annual Professional Inspections
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Have your heating system inspected in the fall and your cooling
              system in the spring. A professional technician can catch small
              issues before they become expensive problems. Our certified
              technicians at Air Experts check refrigerant levels, electrical
              connections, and overall system performance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              3. Keep Your Outdoor Unit Clean
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Your outdoor condenser unit needs clear airflow to operate
              efficiently. Keep at least two feet of clearance around the unit.
              Remove leaves, grass clippings, and debris regularly. In Kansas
              City, spring storms can deposit all kinds of debris around your
              unit — make it part of your post-storm checklist.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              4. Check and Clean Your Vents
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Walk through your home and make sure all supply and return vents
              are unblocked by furniture, rugs, or curtains. Blocked vents cause
              uneven temperatures and force your system to work harder. Vacuum
              your vents periodically to remove dust buildup.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              5. Program Your Thermostat
            </h2>
            <p className="text-gray-brand leading-relaxed">
              If you still have a manual thermostat, consider upgrading to a
              programmable or smart thermostat. Setting your thermostat back 7-10
              degrees for 8 hours a day can save you up to 10% on your annual
              heating and cooling costs. Smart thermostats can learn your
              schedule and adjust automatically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              6. Inspect Your Ductwork
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Leaky ducts can waste 20-30% of your conditioned air. Look for
              visible gaps at joints and connections in accessible areas like
              your attic or basement. Listen for whistling sounds that indicate
              leaks. Professional duct sealing can dramatically improve your
              system&apos;s efficiency.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              7. Check Your Carbon Monoxide Detectors
            </h2>
            <p className="text-gray-brand leading-relaxed">
              If you have a gas furnace, working carbon monoxide detectors are
              essential. Test them monthly and replace batteries annually. A
              cracked heat exchanger can leak carbon monoxide — another reason
              annual professional inspections are so important.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              8. Clear Your Condensate Drain
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Your AC produces condensation that drains through a line. Over
              time, this line can become clogged with algae and mold, causing
              water damage. Pour a cup of white vinegar down the drain line every
              few months to keep it clear.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              9. Seal Air Leaks in Your Home
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Even the best HVAC system can&apos;t overcome a leaky home. Check
              around windows, doors, and where pipes or wires enter your home for
              air leaks. Use caulk and weatherstripping to seal gaps. This
              reduces the load on your HVAC system and lowers energy bills.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              10. Don&apos;t Ignore Strange Sounds or Smells
            </h2>
            <p className="text-gray-brand leading-relaxed">
              Your HVAC system shouldn&apos;t make banging, squealing, or
              grinding noises. Unusual smells — especially burning odors — should
              be investigated immediately. These are often early warning signs of
              problems that are cheaper to fix now than later. When in doubt,
              call a professional.
            </p>

            {/* CTA */}
            <div className="bg-light-bg rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Need Professional HVAC Maintenance?
              </h3>
              <p className="text-gray-brand mb-6">
                Air Experts offers comprehensive maintenance plans to keep your
                system running at peak efficiency. Our certified technicians
                service all makes and models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-red-brand hover:bg-red-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Schedule Maintenance
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
