import { motion } from "motion/react";
import { useRef, useState } from "react";

interface Props {
  index: string;
  title: string;
  category: string;
  year: string;
  videoSrc: string;
}

export function ProjectCard({ index, title, category, year, videoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      href={videoSrc}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => {
        setHover(true);
        videoRef.current?.play().catch(() => {});
      }}
      onHoverEnd={() => {
        setHover(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      className="group relative block border-t border-[rgba(151,125,255,0.2)] py-6 md:py-8 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
        <div className="col-span-1 text-xs text-[var(--muted-foreground)] font-mono">{index}</div>
        <div className="col-span-9 md:col-span-4">
          <h3 className="text-xl md:text-4xl font-display font-medium">
            <span className={hover ? "text-gradient" : ""}>{title}</span>
          </h3>
          <div className="md:hidden mt-1 text-xs text-[var(--muted-foreground)] font-mono">
            {category} · {year}
          </div>
        </div>
        <div className="hidden md:block col-span-3 text-sm text-[var(--muted-foreground)]">{category}</div>
        <div className="hidden md:block col-span-2 text-sm text-[var(--muted-foreground)] font-mono">{year}</div>
        <div className="col-span-2 flex justify-end">
          <motion.div
            animate={{ scale: hover ? 1 : 0.9, opacity: hover ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-mono uppercase tracking-widest text-[var(--lilac)]"
          >
            Open →
          </motion.div>
        </div>
      </div>

      {/* hover video preview - desktop only */}
      <motion.div
        className="hidden md:block pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 w-80 aspect-video rounded-md overflow-hidden shadow-2xl z-10"
        initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
        animate={{
          opacity: hover ? 1 : 0,
          scale: hover ? 1 : 0.8,
          rotate: hover ? 0 : -4,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.a>
  );
}
