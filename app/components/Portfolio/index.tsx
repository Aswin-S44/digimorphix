"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { getImagePath } from "@/lib/utils";

const categories = ["All", "Web App", "Mobile App"];

const projects = [
  {
    id: 1,
    title: "Wheelzloop",
    category: "Web App",
    image: getImagePath("/assets/portfolios/wheelzloop.png"),
    description:
      "A premium automotive marketplace streamlining the used car buying and selling experience with intuitive search filters and verified listings.",
  },
  {
    id: 2,
    title: "Glamio",
    category: "Mobile App",
    image: getImagePath("/assets/portfolios/glamio.jpg"),
    description:
      "An elegant appointment scheduling platform for luxury salons, offering real-time stylist availability and a seamless booking experience for premium beauty services.",
  },

  {
    id: 3,
    title: "Vision Builderz",
    category: "Web App",
    image: getImagePath("/assets/portfolios/vision_builderz.png"),
    description:
      "Launch your vision faster with this smart website builder. Featuring a drag-and-drop interface and optimized templates, it allows anyone to create a fully custom, mobile-ready site tailored to their unique brand identity in minutes.",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-24 bg-white px-6" id="portfolios">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-navyblue sm:text-3xl  lg:text-5xl md:4px lh-96">
              Our Works <br />
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              We offer end-to-end software development services tailored to your
              business needs, from initial planning to robust deployment.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-[15px] font-bold transition-all duration-300 border ${
                  filter === cat
                    ? "bg-blue-50 text-blue-600 border-blue-100 shadow-sm"
                    : "bg-white text-gray-400 border-gray-100 hover:border-gray-200 hover:text-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-white rounded-[2.5rem] p-5 border border-gray-100 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] transition-all duration-500"
              >
                <div className="relative h-72 w-full overflow-hidden rounded-[1.8rem] mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-2xl text-[11px] font-black text-gray-800 uppercase tracking-[0.1em] shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="px-3 pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                      {project.title}
                    </h3>
                    <div className="bg-gray-50 p-2.5 rounded-xl group-hover:bg-blue-600 group-hover:text-white text-gray-400 transition-all duration-300">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  <p className="text-gray-500 text-[16px] leading-relaxed mb-8 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-[14px] font-black text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                    VIEW CASE STUDY
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 text-center">
          <button className="group relative bg-gray-900 text-white px-12 py-5 rounded-[1.5rem] font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200">
            <span className="relative z-10 flex items-center gap-3"></span>
            <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
