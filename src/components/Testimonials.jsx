import { motion } from "framer-motion";
import Section from "./ui/Section";
import { fadeInUp } from "../utils/animations";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Testimonials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/testimonials`
        );

        setData(res.data);
      } catch (error) {
        setErr(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Section id="testimonials" title="Apa kata klien" subtitle="Testimoni">
      <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-5">
        {data.map((item) => (
          <figure key={item.id} className="rounded-2xl border p-5 bg-white">
            <blockquote className="text-sm leading-relaxed text-neutral-700">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium">
              {item.name}
            </figcaption>
            <div className="text-xs text-neutral-500">{item.role}</div>
          </figure>
        ))}
      </motion.div>
    </Section>
  );
}
