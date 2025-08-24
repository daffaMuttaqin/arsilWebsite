import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Hubungi Kami"
      subtitle="Mulai dari konsultasi gratis"
    >
      <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-4">
          <p className="text-neutral-700">
            Ceritakan kebutuhan Anda—tim kami akan merespons dalam 1–2 hari
            kerja. Kami dapat membantu menyusun brief, estimasi anggaran, dan
            timeline.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:hello@arsilgroup.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> hello@arsilgroup.com
            </a>
            <a href="tel:+6281234567890" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +62 812-3456-7890
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5" /> Jl. Arsitek No. 10, Jakarta
              Selatan
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-1 text-neutral-700 hover:underline"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-neutral-700 hover:underline"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Terima kasih! Pesan Anda sudah terkirim.");
          }}
          className="rounded-2xl border p-5 space-y-4"
        >
          <div>
            <label className="text-sm">Nama</label>
            <input
              required
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="Nama lengkap"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="nama@email.com"
              />
            </div>
            <div>
              <label className="text-sm">Telepon/WA</label>
              <input
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="08xxxxxxxxxx"
              />
            </div>
          </div>
          <div>
            <label className="text-sm">Jenis Proyek</label>
            <select className="mt-1 w-full rounded-xl border px-3 py-2">
              <option>Residensial</option>
              <option>Komersial</option>
              <option>Interior</option>
              <option>Renovasi</option>
              <option>Lainnya</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Pesan</label>
            <textarea
              className="mt-1 w-full rounded-xl border px-3 py-2 h-28"
              placeholder="Ceritakan kebutuhan, lokasi, dan perkiraan anggaran"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-3"
          >
            Kirim Pesan <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </Section>
  );
}
