import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Snowflake,
  Flame,
  Wind,
  Building2,
  Home,
  Cpu,
  Shield,
  Clock,
  Users,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Wrench,
} from "lucide-react";

const services = [
  { icon: Snowflake, title: "Cooling Installation", href: "/services#cooling-installation", color: "blue" as const },
  { icon: Snowflake, title: "Cooling Maintenance", href: "/services#cooling-maintenance", color: "blue" as const },
  { icon: Wrench, title: "Cooling Repair", href: "/services#cooling-repair", color: "blue" as const },
  { icon: Flame, title: "Heating Installation", href: "/services#heating-installation", color: "red" as const },
  { icon: Flame, title: "Heating Maintenance", href: "/services#heating-maintenance", color: "red" as const },
  { icon: Wrench, title: "Heating Repair", href: "/services#heating-repair", color: "red" as const },
  { icon: Wind, title: "Indoor Air Quality Services", href: "/services#indoor-air-quality", color: "blue" as const },
  { icon: Building2, title: "Commercial Business Services", href: "/services#commercial", color: "red" as const },
  { icon: Home, title: "Residential Services", href: "/services#residential", color: "blue" as const },
  { icon: Cpu, title: "Home Automation Services", href: "/services#home-automation", color: "red" as const },
];

const brands = [
  "0001_Rheem", "0002_Ruud", "0003_Nordyne", "0004_Goodman", "0005_Ducane",
  "0006_Maytag", "0007_Coleman", "0008_Ameristar", "0009_Payne", "0010_heil",
  "0011_comfortmaker", "0012_Keeprite", "0013_Tempstar", "0014_Bryant",
  "0015_American-Standard", "0016_lennox", "0017_trane", "0018_Carrier", "0019_Mitsubishi",
];

const testimonials = [
  { name: "Sarah M.", location: "Lee's Summit, MO", text: "Air Experts installed our new AC system and the difference is incredible. Professional, on time, and the price was very fair. Highly recommend!" },
  { name: "Mike T.", location: "Belton, MO", text: "Our furnace went out on the coldest night of the year. Air Experts came out within an hour and had it running again. Amazing 24/7 service." },
  { name: "Jennifer K.", location: "Raymore, MO", text: "Three generations of experience really shows. They gave us honest advice about our system and didn't try to upsell. Trustworthy company!" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — truck image background */}
      <section className="relative min-h-[600px] flex items-center">
        <Image
          src="/images/CY3A2890.jpg"
          alt="Air Experts service truck"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Have Heating and Cooling Peace of Mind.{" "}
              <span className="text-red-brand">With Air Experts.</span>
            </h1>
            <p className="animate-fade-in-up-delay text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Providing commercial and residential heating and cooling services
              to Cass County and Eastern Jackson County. Three generations of
              expertise you can trust.
            </p>
            <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-brand hover:bg-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8163940099"
                className="inline-flex items-center justify-center gap-2 bg-blue-brand hover:bg-blue-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                816.394.0099
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Trustworthy", desc: "We stand behind our work — and are quick to act when a problem arises.", color: "red" },
              { icon: Wrench, title: "Full-Service", desc: "From commercial to residential, initial installs to ongoing maintenance.", color: "blue" },
              { icon: Users, title: "Customer-Focused", desc: "We are committed to building long-lasting relationships with our customers.", color: "red" },
              { icon: Heart, title: "Community-Minded", desc: "We proudly support Shepherd's Staff Food Pantry in Harrisonville, MO.", color: "blue" },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${item.color === "red" ? "bg-red-light" : "bg-blue-light"}`}>
                  <item.icon className={`w-8 h-8 ${item.color === "red" ? "text-red-brand" : "text-blue-brand"}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-brand text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-light-bg py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Image src="/images/01-3.png" alt="Master Mechanical certification" width={100} height={120} className="h-24 w-auto" />
            <Image src="/images/02-2.png" alt="PE certification" width={100} height={120} className="h-24 w-auto" />
            <Image src="/images/03-3.png" alt="EPA Certified for Refrigeration" width={100} height={120} className="h-24 w-auto" />
            <Image src="/images/03-2.png" alt="EPS Certified for Refrigeration" width={100} height={120} className="h-24 w-auto" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-brand max-w-2xl mx-auto">
              Providing commercial and residential heating and cooling services to Cass County and Eastern Jackson County.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-light-bg rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-gray-200"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${service.color === "red" ? "bg-red-light group-hover:bg-red-brand" : "bg-blue-light group-hover:bg-blue-brand"} transition-colors`}>
                  <service.icon className={`w-7 h-7 ${service.color === "red" ? "text-red-brand group-hover:text-white" : "text-blue-brand group-hover:text-white"} transition-colors`} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-blue-brand transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-brand hover:bg-blue-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Stay Comfortable — Process */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
            How We Keep You Comfortable
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consult", desc: "We determine your HVAC needs with an honest, no-pressure assessment. Our experts evaluate your space and recommend the best solution for your property.", color: "red", img: "/images/CY3A2740.jpg" },
              { step: "02", title: "Install", desc: "Our certified technicians execute repairs, installations, or service work quickly and professionally. We work with all makes and models.", color: "blue", img: "/images/CY3A2815.jpg" },
              { step: "03", title: "Maintain", desc: "That's not all — we offer ongoing maintenance with available 24-hour service to keep your system running smoothly year-round.", color: "red", img: "/images/CY3A2877.jpg" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-4 left-4 ${item.color === "red" ? "bg-red-brand" : "bg-blue-brand"} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                    Step {item.step}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-brand text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Air Experts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Kansas City Trusts Air Experts
              </h2>
              <p className="text-lg text-gray-brand mb-8 leading-relaxed">
                Air Experts is a trustworthy company that stands behind their work. We offer
                full-service heating and cooling solutions for both commercial and residential
                clients, from initial installs to ongoing service. Three generations of our
                family have worked in the HVAC business, and we bring that experience to every job.
              </p>
              <div className="space-y-4">
                {[
                  { text: "Three generations of HVAC expertise", color: "red" },
                  { text: "24/7 emergency service available", color: "blue" },
                  { text: "Service all makes and models", color: "red" },
                  { text: "Honest recommendations — no upselling", color: "blue" },
                  { text: "Certified, skilled technicians", color: "red" },
                  { text: "Custom HVAC design capabilities", color: "blue" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.color === "red" ? "text-red-brand" : "text-blue-brand"}`} />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/CY3A2723.jpg" alt="Carter Ledford and James Ledford - Air Experts team" width={600} height={400} className="w-full h-auto" />
              </div>
              <div className="absolute -top-6 -right-6 bg-blue-brand text-white p-6 rounded-xl shadow-lg hidden md:block">
                <Clock className="w-8 h-8 mb-1" />
                <div className="text-sm font-semibold">24/7 Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="py-12 bg-light-bg border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-center text-gray-brand font-semibold text-sm uppercase tracking-wider">
            We Service All Major Brands
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll" style={{ width: "max-content" }}>
            {[...brands, ...brands].map((brand, i) => (
              <div key={`${brand}-${i}`} className="flex-shrink-0 mx-6">
                <Image
                  src={`/images/brands/${brand}.jpg`}
                  alt={brand.split("_").slice(1).join(" ")}
                  width={100}
                  height={50}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-brand">Don&apos;t just take our word for it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-light-bg rounded-xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-red-brand text-red-brand" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-brand">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proudly Serving the Kansas City Area</h2>
          <p className="text-lg text-gray-brand mb-10 max-w-3xl mx-auto">
            Air Experts provides HVAC services throughout Cass County, Eastern Jackson County, and the greater Kansas City metropolitan area.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Kansas City", "Cass County", "Eastern Jackson County", "Belton", "Raymore", "Peculiar", "Grandview", "Lee's Summit", "Blue Springs", "Harrisonville"].map((area) => (
              <span key={area} className="bg-white text-gray-brand px-5 py-2.5 rounded-full font-medium text-sm border border-gray-200 shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">HVAC Tips & Insights</h2>
            <p className="text-lg text-gray-brand">Expert advice to keep your home comfortable year-round.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "10 HVAC Maintenance Tips Every Homeowner Should Know", excerpt: "Regular maintenance can extend the life of your HVAC system by years.", slug: "hvac-maintenance-tips", date: "February 20, 2026", img: "/images/heating2.jpg" },
              { title: "When Should You Replace Your HVAC System? 7 Warning Signs", excerpt: "Is your system on its last legs? Learn the warning signs.", slug: "when-to-replace-hvac", date: "February 15, 2026", img: "/images/CY3A2877.jpg" },
              { title: "The Complete Guide to Indoor Air Quality", excerpt: "Poor indoor air quality can affect your health. Here's how to fix it.", slug: "indoor-air-quality-guide", date: "February 10, 2026", img: "/images/indoor.jpg" },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-light-bg rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-brand">{post.date}</time>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-brand transition-colors">{post.title}</h3>
                  <p className="text-gray-brand text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-brand font-semibold hover:text-blue-dark transition-colors text-lg">
              Read More Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
