import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";
import { PROJECTS } from "../data/projects";

export default function Portfolio() {
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // fungsi untuk ganti slide
  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <Section id="portfolio" title="Portofolio" subtitle="Hasil karya kami">
      {/* 🔍 Search */}
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

      {/* 🔲 Project Cards */}
      <motion.div
        {...fadeInUp}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl overflow-hidden border bg-white cursor-pointer"
            onClick={() => {
              setSelectedProject(p);
              setCurrentImageIndex(0);
            }}
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

      {/* 🔹 Modal Slideshow */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)} // klik luar modal close
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full relative p-4"
            onClick={(e) => e.stopPropagation()} // cegah klik dalam modal ikut nutup
          >
            {/* Tombol close */}
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
              onClick={() => setSelectedProject(null)}
            ></button>

            {/* Slideshow */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {/* tombol prev/next */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Info Project */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{selectedProject.title}</h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                  {selectedProject.category}
                </span>
                <div className="inline-flex items-center gap-1 text-xs text-neutral-500">
                  <MapPin className="w-3 h-3" /> {selectedProject.location}
                </div>
              </div>
              <p className="mt-2 text-neutral-700">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
