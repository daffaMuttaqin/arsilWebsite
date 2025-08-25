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
            Ceritakan kebutuhan Anda. Tim kami akan merespons dalam 1–2 hari
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
              <MapPin className="w-4 h-4 mt-0.5" /> Jl. Abadi No. 48B, Medan,
              Sumatera Utara
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

        {/* Maps */}
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3579693747603!2d107.6126267749966!3d-6.968722293043654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e81a3c77a3fb%3A0x58c4f9b33a68f2f9!2sArsil%20Group!5e0!3m2!1sid!2sid!4v1692802823432!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arsil Group Location"
          ></iframe>
        </div>
      </motion.div>
    </Section>
  );
}
