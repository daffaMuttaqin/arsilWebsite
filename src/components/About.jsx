import { motion } from "framer-motion";
import { Mail, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";

export default function About() {
  return (
    <Section id="about" title="Tentang Arsil Group" subtitle="Siapa kami">
      <motion.div
        {...fadeInUp}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <p>
            Kami merancang ruang yang berpijak pada <strong>fungsi</strong>,{" "}
            <strong>keindahan</strong>, dan <strong>konteks</strong>. Filosofi
            kami sederhana: desain yang baik harus mempermudah hidup
            penggunanya, tidak sekadar terlihat cantik.
          </p>
          <ul className="space-y-2">
            {[
              "Pendekatan kolaboratif dari awal hingga akhir.",
              "Transparansi biaya dan timeline yang realistis.",
              "Material tepat guna, berkelanjutan bila memungkinkan.",
              "Kontrol kualitas ketat di tahap konstruksi.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-neutral-800" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 pt-2">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2"
            >
              <ImageIcon className="w-4 h-4" /> Lihat karya
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2"
            >
              <Mail className="w-4 h-4" /> Ajukan brief
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
