import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import Stat from "./ui/Stat";
import { fadeInUp } from "../utils/animations";

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2400&auto=format&fit=crop"
          alt="Hero"
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      <Container>
        <div className="h-[70vh] flex items-end pb-10">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Mewujudkan ruang yang indah, efisien, dan bernilai.
            </h1>
            <p className="mt-4 text-neutral-600 max-w-2xl">
              Arsil Group adalah studio arsitektur yang berfokus pada desain
              berkelanjutan dengan eksekusi rapi dan tepat waktu. Kami membantu
              residensial dan bisnis membangun ruang yang nyaman dan berdampak.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-3"
              >
                Lihat Portofolio <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-3"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-6">
              <Stat value="8+" label="Tahun Pengalaman" />
              <Stat value="120+" label="Proyek Terselesaikan" />
              <Stat value="30%" label="Rata-rata Hemat Energi*" />
              <div className="col-span-3 sm:col-span-3 text-xs text-neutral-500">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                  *Estimasi
                </span>
                berdasarkan penggunaan bukaan alami, material insulatif, dan
                orientasi bangunan.
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
