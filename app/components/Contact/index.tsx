"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzr2dYhd18oP6wXscbq42mYfpGCKLELCIJ39M_0U2RVAriRcPR-9cUD-boe7ftBsCCK/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let&apos;s build something{" "}
              <span className="text-blue-600">great</span> together.
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-md">
              Ready to transform your business with custom software? Reach out
              and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">
                    Email us
                  </h4>
                  <p className="text-slate-600">hello@yourstartup.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-xl text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">
                    Call us
                  </h4>
                  <p className="text-slate-600">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">
                    Visit us
                  </h4>
                  <p className="text-slate-600">
                    Innovation Hub, Silicon Valley, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FDF8F3] p-8 md:p-12 rounded-[2rem] border border-orange-100/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Service Needed
                </label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                >
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>MVP Development</option>
                  <option>Marketing / SEO</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                ></textarea>
              </div>

              <button
                disabled={status === "loading"}
                className="w-full bg-[#0A0A0B] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center font-medium">
                  Message sent successfully! We&apos;ll be in touch.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
