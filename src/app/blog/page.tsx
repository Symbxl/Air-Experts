import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Blog - Tips & Insights",
  description: "Expert HVAC tips, maintenance guides, and industry insights from Air Experts Kansas City.",
};

const blogPosts = [
  { title: "10 HVAC Maintenance Tips Every Homeowner Should Know", excerpt: "Regular maintenance can extend the life of your HVAC system by years and save you thousands in repair costs.", slug: "hvac-maintenance-tips", date: "February 20, 2026", readTime: "8 min read", category: "Maintenance", img: "/images/heating2.jpg" },
  { title: "When Should You Replace Your HVAC System? 7 Warning Signs", excerpt: "Is your heating or cooling system on its last legs? Learn the critical warning signs that indicate it's time for replacement.", slug: "when-to-replace-hvac", date: "February 15, 2026", readTime: "6 min read", category: "Repair & Replacement", img: "/images/CY3A2877.jpg" },
  { title: "The Complete Guide to Indoor Air Quality for Your Home", excerpt: "Poor indoor air quality can significantly affect your family's health. Discover how to improve the air you breathe.", slug: "indoor-air-quality-guide", date: "February 10, 2026", readTime: "10 min read", category: "Indoor Air Quality", img: "/images/indoor.jpg" },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative min-h-[300px] flex items-center">
        <Image src="/images/residential.jpg" alt="HVAC tips and insights" fill className="object-cover" priority />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">HVAC Tips & Insights</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Expert advice from three generations of HVAC professionals.</p>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-light text-blue-brand px-3 py-1 rounded-full text-xs font-semibold">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-brand"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-brand"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-brand transition-colors">{post.title}</h2>
                  <p className="text-gray-brand leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-red-brand font-semibold text-sm group-hover:gap-2 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
