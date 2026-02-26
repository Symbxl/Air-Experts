import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Clock, Heart, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Three generations of HVAC expertise serving Kansas City. Meet the Air Experts team — Walt Barnes (CEO), James Ledford, and Carter Ledford. Licensed, certified technicians.",
};

const values = [
  { icon: Shield, title: "Trustworthy", description: "We stand behind our work — and are quick to act when a problem arises. You'll always get honest recommendations.", color: "red" as const },
  { icon: Award, title: "Full-Service", description: "From commercial to residential, initial installs to ongoing service. We handle it all with expert precision.", color: "blue" as const },
  { icon: Clock, title: "Customer-Focused", description: "We are committed to building long-lasting relationships with our customers. Your satisfaction is our priority.", color: "red" as const },
  { icon: Heart, title: "Community-Minded", description: "We proudly support Shepherd's Staff Food Pantry in Harrisonville, MO, providing residents with quality groceries.", color: "blue" as const },
];

const team = [
  {
    name: "Walt Barnes",
    role: "CEO",
    image: null,
    bio: "With 38+ years of HVAC experience and a Mechanical Engineering degree, Walt has worked on projects ranging from Disney World to KC Power & Light. His expertise in HVAC design and engineering drives the company's commitment to excellence.",
  },
  {
    name: "James Ledford",
    role: "Operations",
    image: "/images/James-Ledford-CY3A2712.jpg",
    bio: "James focuses on customer scheduling and satisfaction, ensuring every job runs smoothly. A dedicated father of seven, he brings the same care and attention to his customers as he does to his family.",
  },
  {
    name: "Carter Ledford",
    role: "Team Member",
    image: "/images/CY3A2697.jpg",
    bio: "Carter represents the newest generation of HVAC expertise at Air Experts. He's learning the trade from the ground up and brings fresh energy and a strong work ethic to the team.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with team photo */}
      <section className="relative min-h-[400px] flex items-center">
        <Image
          src="/images/CY3A2723.jpg"
          alt="Carter Ledford and James Ledford - Air Experts team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Air Experts</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Three generations of HVAC expertise serving the Kansas City area with honest, reliable heating and cooling solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-brand leading-relaxed text-lg">
                <p>
                  Air Experts is a trustworthy company that stands behind their work. We offer
                  full-service heating and cooling solutions for both commercial and residential
                  clients, from initial installs to ongoing service.
                </p>
                <p>
                  Three generations of our family have worked in the HVAC business. That experience
                  means we have the expertise to service all makes and models of furnaces, air
                  conditioners, heat pumps, water source heat pumps, rooftop units, boilers, and chillers.
                </p>
                <p>
                  We serve Cass County, Eastern Jackson County, and the greater Kansas City area.
                  Whether you need a brand-new installation, a quick repair, or ongoing maintenance,
                  our certified technicians are here to help — 24 hours a day, 7 days a week.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/CY3A2890.jpg" alt="Air Experts service truck" width={600} height={400} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 ${v.color === "red" ? "bg-red-light" : "bg-blue-light"}`}>
                  <v.icon className={`w-7 h-7 ${v.color === "red" ? "text-red-brand" : "text-blue-brand"}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-brand text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-brand text-center mb-14 max-w-2xl mx-auto">
            Our skilled and certified technicians bring years of hands-on experience to every job.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-light-bg rounded-2xl overflow-hidden border border-gray-100">
                <div className="relative h-72 bg-gradient-to-br from-blue-brand to-blue-dark flex items-center justify-center">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                  ) : (
                    <div className="text-white/20 text-6xl font-bold">{member.name.charAt(0)}</div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-red-brand font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-brand text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Certifications</h2>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <Image src="/images/01-3.png" alt="Master Mechanical" width={100} height={120} className="h-28 w-auto" />
            <Image src="/images/02-2.png" alt="PE certification" width={100} height={120} className="h-28 w-auto" />
            <Image src="/images/03-3.png" alt="EPA Certified for Refrigeration" width={100} height={120} className="h-28 w-auto" />
            <Image src="/images/03-2.png" alt="EPS Certified for Refrigeration" width={100} height={120} className="h-28 w-auto" />
          </div>
        </div>
      </section>

      {/* Giving Back */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-red-brand mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Giving Back</h2>
          <p className="text-lg text-gray-brand leading-relaxed mb-4">
            Air Experts supports Shepherd&apos;s Staff Food Pantry in Harrisonville, MO (64701),
            which provides residents with quality groceries twice a month at 1311 Sanders Street.
          </p>
          <p className="text-lg text-gray-brand leading-relaxed mb-8">
            As a family-owned business rooted in Kansas City, giving back to our community is a
            core part of who we are. We believe a strong community starts with neighbors helping neighbors.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-red-brand hover:bg-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
