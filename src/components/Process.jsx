import { motion } from "framer-motion";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";
import { PROCESS } from "../data/process";

export default function Process() {
  return (
    <Section
      id="process"
      title="Cara Kami Bekerja"
      subtitle="Proses kolaboratif"
    >
      <motion.div {...fadeInUp} className="grid md:grid-cols-4 gap-5">
        {PROCESS.map((pr) => (
          <div key={pr.step} className="rounded-2xl border p-5">
            <div className="text-neutral-400 text-sm mb-1">{pr.step}</div>
            <h4 className="font-medium">{pr.title}</h4>
            <p className="text-sm text-neutral-600 mt-1">{pr.desc}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
