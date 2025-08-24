import { motion } from "framer-motion";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";
import { TESTIMONIALS } from "../data/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonials" title="Apa kata klien" subtitle="Testimoni">
      <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-2xl border p-5 bg-white">
            <blockquote className="text-sm leading-relaxed text-neutral-700">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium">
              {t.name}
            </figcaption>
            <div className="text-xs text-neutral-500">{t.role}</div>
          </figure>
        ))}
      </motion.div>
    </Section>
  );
}
