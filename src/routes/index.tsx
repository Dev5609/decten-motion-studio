import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/ProjectCard";
import dectenAsset from "@/assets/dectenmotion.mp4.asset.json";
import circleAsset from "@/assets/circle.mp4.asset.json";
import project1Asset from "@/assets/project1.mp4.asset.json";
import project2Asset from "@/assets/project2.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Decten Motion — Kush Bharghava, Motion Graphics Editor" },
      { name: "description", content: "Portfolio of Kush Bharghava (Decten Motion) — motion graphics editor crafting kinetic typography, brand films and sound-led visual stories." },
      { property: "og:title", content: "Decten Motion — Kush Bharghava" },
      { property: "og:description", content: "Motion graphics editor portfolio." },
    ],
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div id="top" className="relative min-h-screen bg-[var(--ink)] text-[var(--cream)]">
      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden">
        {/* gradient bars background */}
        <div className="absolute inset-0 flex pointer-events-none opacity-30">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.4, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 bg-gradient-strip"
              style={{ marginLeft: i === 0 ? 0 : "4px" }}
            />
          ))}
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 flex-1 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--lilac)] mb-8"
          >
            ✦ Motion Graphics Editor · Available 2026
          </motion.p>

          <h1 className="font-display font-medium leading-[0.85] tracking-tighter text-[clamp(3.5rem,12vw,12rem)]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Decten
            </motion.span>
            <motion.span
              className="block text-gradient italic font-light"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              Motion.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl"
          >
            <div className="md:col-span-2">
              <p className="text-lg md:text-2xl font-light leading-relaxed text-[var(--cream)]/90">
                I'm <span className="text-[var(--lilac)]">Kush Bharghava</span> — a motion graphics editor crafting kinetic typography, brand films and sound-led visual stories that move people.
              </p>
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] space-y-2">
              <div className="flex justify-between border-b border-[var(--border)] pb-2"><span>Based</span><span className="text-[var(--cream)]">India</span></div>
              <div className="flex justify-between border-b border-[var(--border)] pb-2"><span>Experience</span><span className="text-[var(--cream)]">4+ yrs</span></div>
              <div className="flex justify-between"><span>Status</span><span className="text-[var(--lilac)]">● Open</span></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="relative z-10 flex justify-between items-end text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]"
        >
          <span>Scroll ↓</span>
          <span>Reel 2026 / Vol.1</span>
        </motion.div>
      </section>

      {/* MAIN REEL */}
      <section id="about" className="relative px-6 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-display">Reel <span className="text-[var(--lilac)]">/ 01</span></h2>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">Who I am</span>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-[var(--border)] aspect-video shadow-[0_30px_80px_-20px_rgba(0,51,255,0.5)]">
            <video
              src={dectenAsset.url}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="relative py-12 overflow-hidden border-y border-[var(--border)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-6xl md:text-8xl font-display italic font-light"
        >
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="flex gap-12 items-center">
              {["Kinetic Type", "✦", "Brand Films", "✦", "Sound Design", "✦", "Color", "✦", "3D Motion", "✦"].map((w, i) => (
                <span key={i} className={i % 2 === 1 ? "text-[var(--lilac)]" : "text-gradient"}>{w}</span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* WORK */}
      <section id="work" className="relative px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-3xl md:text-5xl font-display">Selected <span className="italic font-light text-gradient">work</span></h2>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">03 projects</span>
          </div>

          <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)] pb-4">
            <div className="col-span-1">№</div>
            <div className="col-span-4">Title</div>
            <div className="col-span-3">Category</div>
            <div className="col-span-2">Year</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          <ProjectCard index="01" title="Circle Progression" category="Kinetic / Loop" year="2026" videoSrc={circleAsset.url} />
          <ProjectCard index="02" title="Apple Animation" category="Brand Film" year="2026" videoSrc={project1Asset.url} />
          <ProjectCard index="03" title="Apple Style Animation for Gmail" category="Motion Concept" year="2026" videoSrc={project2Asset.url} />
          <div className="border-t border-[rgba(151,125,255,0.2)]" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 md:px-12 py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-strip opacity-20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--lilac)] mb-8"
          >
            ✦ Let's make something move
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display leading-[0.9] tracking-tighter mb-12"
          >
            Got a frame <br />
            <span className="italic font-light text-gradient">worth moving?</span>
          </motion.h2>

          <a
            href="mailto:workskush@gmail.com"
            className="inline-block group"
          >
            <span className="text-2xl md:text-4xl font-display border-b border-[var(--lilac)] pb-2 group-hover:text-[var(--lilac)] transition-colors">
              workskush@gmail.com
            </span>
          </a>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs font-mono uppercase tracking-widest">
            <a
              href="https://www.linkedin.com/in/kush-bhargava-1672b6367"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--lilac)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="text-[var(--border)]">/</span>
            <a
              href="https://instagram.com/dectenmotion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--lilac)] transition-colors"
            >
              Instagram @dectenmotion ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
        <span>© 2026 Kush Bharghava</span>
        <span>Decten Motion — Vol.1</span>
        <span>All pixels in motion</span>
      </footer>
    </div>
  );
}
