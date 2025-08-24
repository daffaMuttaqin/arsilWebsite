import { motion } from "framer-motion";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";
import { CLIENT_LOGOS } from "../data/clients";

export default function Clients() {
  return (
    <Section
      id="clients"
      title="Klien & Mitra"
      subtitle="Mereka pernah bekerja dengan kami"
    >
      <motion.div
        {...fadeInUp}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center"
      >
        {CLIENT_LOGOS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Client ${i + 1}`}
            className="opacity-70 hover:opacity-100 transition mx-auto"
          />
        ))}
      </motion.div>
    </Section>
  );
}
