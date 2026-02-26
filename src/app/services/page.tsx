import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Snowflake, Flame, Wind, Building2, Home, Cpu, Wrench,
  CheckCircle, ArrowRight, Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Services",
  description:
    "Complete heating, cooling, and indoor air quality services in Kansas City. Installation, repair, and maintenance for all makes and models. 24/7 emergency service.",
};

const serviceCategories = [
  {
    id: "cooling-installation", icon: Snowflake, title: "Cooling Installation", color: "blue" as const,
    image: "/images/residential.jpg",
    description: "For three generations, our certified technicians have been installing air conditioning systems of all makes and models throughout the Kansas City area. Air Experts provides air conditioning installation in Cass County and Eastern Jackson County. We work with customers to ensure they get the right size unit for their space.",
    details: ["Central air conditioning systems", "Ductless mini-split systems", "Heat pump installations", "Custom system sizing for your space", "Energy-efficient system recommendations", "Professional installation with warranty"],
  },
  {
    id: "cooling-repair", icon: Wrench, title: "Cooling Repair", color: "blue" as const,
    image: "/images/heating2.jpg",
    description: "When your air conditioning breaks down, you need fast and reliable service. Our technicians diagnose and repair all makes and models of cooling systems, with 24-hour emergency service available.",
    details: ["AC not cooling properly", "Strange noises from your unit", "Refrigerant leaks and recharging", "Compressor and fan motor repairs", "Thermostat issues", "24/7 emergency repair service"],
  },
  {
    id: "cooling-maintenance", icon: Snowflake, title: "Cooling Maintenance", color: "blue" as const,
    image: "/images/CY3A2877.jpg",
    description: "Air Experts offers ongoing service and maintenance with available 24-hour service. Regular maintenance extends the life of your system, improves efficiency, and prevents unexpected breakdowns.",
    details: ["Annual tune-ups and inspections", "Filter replacement and cleaning", "Coil cleaning and inspection", "Refrigerant level checks", "Electrical connection tightening", "Performance optimization"],
  },
  {
    id: "heating-installation", icon: Flame, title: "Heating Installation", color: "red" as const,
    image: "/images/CY3A2815.jpg",
    description: "Air Experts offers heater installation in Cass County and Eastern Jackson County. Our skilled and certified experts give honest recommendations on which system meets your property's specific needs, then install the system and connect it to the power supply.",
    details: ["Furnace installation (gas & electric)", "Heat pump systems", "Boiler installations", "Ductwork design and installation", "System sizing and load calculations", "Energy-efficient upgrades"],
  },
  {
    id: "heating-repair", icon: Wrench, title: "Heating Repair", color: "red" as const,
    image: "/images/CY3A2740.jpg",
    description: "Don't get left in the cold. Our certified technicians respond quickly to heating emergencies and can repair all makes and models of furnaces, boilers, heat pumps, and more.",
    details: ["Furnace not heating", "Pilot light and ignition issues", "Heat pump malfunctions", "Boiler repairs", "Thermostat troubleshooting", "24/7 emergency heating repair"],
  },
  {
    id: "heating-maintenance", icon: Flame, title: "Heating Maintenance", color: "red" as const,
    image: "/images/CY3A2815.jpg",
    description: "Whether you need preventative maintenance or an annual inspection on your furnace, boiler, or heat pump, our certified technicians will do the job right. Regular maintenance keeps your system running safely and efficiently.",
    details: ["Annual furnace inspections", "Boiler maintenance", "Heat pump tune-ups", "Carbon monoxide testing", "Filter replacement", "Safety checks and diagnostics"],
  },
  {
    id: "indoor-air-quality", icon: Wind, title: "Indoor Air Quality Services", color: "blue" as const,
    image: "/images/indoor.jpg",
    description: "Whole-house air filtration systems capture the smallest contaminants, like pollen, mold, and pet dander. We help you breathe easier with comprehensive indoor air quality solutions.",
    details: ["Whole-house air filtration", "UV air purifiers", "Humidifiers and dehumidifiers", "Air duct cleaning", "Ventilation improvements", "Air quality testing"],
  },
  {
    id: "commercial", icon: Building2, title: "Commercial Business Services", color: "red" as const,
    image: "/images/CY3A2877.jpg",
    description: "Air Experts provides HVAC design for commercial buildings. We offer full-service commercial heating and cooling solutions, from design and installation to ongoing maintenance and repair of rooftop units, chillers, and boilers.",
    details: ["Commercial HVAC system design", "Rooftop unit installation and repair", "Chiller maintenance and repair", "Building automation systems", "Planned maintenance programs", "Energy audits and optimization"],
  },
  {
    id: "residential", icon: Home, title: "Residential Services", color: "blue" as const,
    image: "/images/residential.jpg",
    description: "Your home comfort is our priority. We provide HVAC replacement, repair, and maintenance for residential systems including furnaces, boilers, and air conditioners. From a single repair to a complete system overhaul, we've got you covered.",
    details: ["Complete home comfort systems", "System upgrades and replacements", "Ductwork inspection and repair", "Zoning systems", "Thermostat installation", "Maintenance agreements"],
  },
  {
    id: "home-automation", icon: Cpu, title: "Home Automation", color: "red" as const,
    image: "/images/automation.jpg",
    description: "Adjust your thermostat remotely through your phone, tablet, or other internet-accessible device. Smart thermostat integration with Apple and Google platforms increases comfort and reduces energy bills.",
    details: ["Smart thermostat installation", "Apple & Google integration", "Wi-Fi enabled HVAC controls", "Zoning system automation", "Energy monitoring solutions", "Remote temperature management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[350px] flex items-center">
        <Image src="/images/CY3A2815.jpg" alt="HVAC technician at work" fill className="object-cover" priority />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            With expertise to service all makes and models of furnaces, air conditioners, heat pumps, rooftop units, boilers, and chillers.
          </p>
        </div>
      </section>

      {/* Equipment Bar */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-brand">
            <span className="text-blue-brand font-semibold">Equipment We Service:</span>
            {["Furnaces", "Air Conditioners", "Heat Pumps", "Water Source Heat Pumps", "Rooftop Units", "Boilers", "Chillers"].map((item) => (
              <span key={item} className="bg-light-bg px-4 py-2 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {serviceCategories.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-28 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                <div className="relative lg:w-2/5 h-64 lg:h-auto">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className={`absolute top-4 left-4 ${service.color === "red" ? "bg-red-brand" : "bg-blue-brand"} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {service.color === "red" ? "Heating" : "Cooling"}
                  </div>
                </div>
                <div className="p-8 lg:p-10 lg:w-3/5">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color === "red" ? "bg-red-light" : "bg-blue-light"}`}>
                    <service.icon className={`w-6 h-6 ${service.color === "red" ? "text-red-brand" : "text-blue-brand"}`} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-brand leading-relaxed mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${service.color === "red" ? "text-red-brand" : "text-blue-brand"}`} />
                        <span className="text-gray-brand text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className={`inline-flex items-center gap-2 ${service.color === "red" ? "bg-red-brand hover:bg-red-dark" : "bg-blue-brand hover:bg-blue-dark"} text-white font-semibold px-6 py-3 rounded-lg transition-colors`}>
                    Get a Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
          <p className="text-lg text-red-100 mb-8">We offer 24/7 emergency HVAC service. When your system fails, we respond fast.</p>
          <a href="tel:8163940099" className="inline-flex items-center gap-2 bg-white text-red-brand font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            <Phone className="w-5 h-5" /> Call Now: 816.394.0099
          </a>
        </div>
      </section>
    </>
  );
}
