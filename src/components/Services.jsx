import { motion } from "framer-motion";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <Section id="services" title="Layanan" subtitle="Apa yang kami kerjakan">
      <motion.div
        {...fadeInUp}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="rounded-2xl border p-5 hover:shadow-sm transition"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-1">{s.title}</h3>
              <p className="text-sm text-neutral-600">{s.desc}</p>
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
}
