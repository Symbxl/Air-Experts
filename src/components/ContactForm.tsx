"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-brand">We&apos;ve received your message and will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
          <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-brand focus:border-transparent outline-none transition-all" placeholder="John" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
          <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-brand focus:border-transparent outline-none transition-all" placeholder="Doe" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-brand focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-brand focus:border-transparent outline-none transition-all" placeholder="(816) 555-0123" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
        <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-brand focus:border-transparent outline-none transition-all bg-white">
          <option value="">Select a service...</option>
          <option value="cooling-installation">Cooling Installation</option>
          <option value="cooling-repair">Cooling Repair</option>
          <option value="cooling-maintenance">Cooling Maintenance</option>
          <option value="heating-installation">Heating Installation</option>
          <option value="heating-repair">Heating Repair</option>
          <option value="heating-maintenance">Heating Maintenance</option>
          <option value="indoor-air-quality">Indoor Air Quality</option>
          <option value="commercial">Commercial HVAC</option>
          <option value="residential">Residential HVAC</option>
          <option value="home-automation">Home Automation</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
        <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-brand focus:border-transparent outline-none transition-all resize-vertical" placeholder="Tell us about your HVAC needs..." />
      </div>
      <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-brand hover:bg-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
        <Send className="w-5 h-5" /> Send Message
      </button>
    </form>
  );
}
