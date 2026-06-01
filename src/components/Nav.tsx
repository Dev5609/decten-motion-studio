export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between backdrop-blur-sm bg-[rgba(0,3,61,0.4)]">
      <a href="#top" className="font-display font-bold tracking-tight text-lg">
        DECTEN<span className="text-[var(--lilac)]">.</span>MOTION
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#work" className="hover:text-[var(--lilac)] transition-colors">Work</a>
        <a href="#about" className="hover:text-[var(--lilac)] transition-colors">About</a>
        <a href="#contact" className="hover:text-[var(--lilac)] transition-colors">Contact</a>
      </div>
      <a
        href="mailto:workskush@gmail.com"
        className="text-xs font-mono uppercase tracking-widest border border-[var(--lilac)] px-4 py-2 rounded-full hover:bg-[var(--lilac)] hover:text-[var(--ink)] transition-colors"
      >
        Let's talk
      </a>
    </nav>
  );
}
