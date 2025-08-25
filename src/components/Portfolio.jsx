import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";
import { PROJECTS } from "../data/projects";

export default function Portfolio() {
  const [query, setQuery] = useState("");
  const filteredProjects = useMemo(() => {
    if (!query) return PROJECTS;
    const q = query.toLowerCase();
    return PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Section id="portfolio" title="Portofolio" subtitle="Hasil karya kami">
      <motion.div
        {...fadeInUp}
        className="flex items-center justify-between gap-4 mb-6"
      >
        <p className="text-sm text-neutral-600">
          Jelajahi proyek berdasarkan kategori, lokasi, atau judul.
        </p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari: rumah, kafe, kantor…"
          className="w-full sm:w-80 rounded-xl border px-3 py-2 text-sm"
        />
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl overflow-hidden border bg-white"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.cover}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                  {p.category}
                </span>
                <div className="inline-flex items-center gap-1 text-xs text-neutral-500">
                  <MapPin className="w-3 h-3" /> {p.location}
                </div>
              </div>
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-neutral-600 mt-1">{p.description}</p>
            </div>
          </article>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center text-sm text-neutral-500 mt-6">
          Tidak ada proyek yang cocok dengan kata kunci.
        </div>
      )}
    </Section>
  );
}
