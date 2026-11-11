"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? " bg-[#141312]/90 backdrop-blur-md" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-[85px] w-[calc(100%-64px)] max-w-[1120px] items-center justify-between border-b border-zinc-800 max-sm:h-[73px] max-sm:w-[calc(100%-40px)]">
        <a
          className="text-[24px] font-extrabold tracking-[-0.09em] max-sm:text-[22px]"
          href="#top"
          aria-label="Raksa Sou home"
        >
          DIVA <span className="text-orange">RS.</span>
        </a>
        <div className="font-medium ml-[80px] flex gap-[38px] text-[13px] text-copy max-md:ml-0 max-sm:gap-[15px] max-sm:text-[10px]">
          <a className="transition-colors hover:!text-orange" href="#about">About</a>
          <a className="transition-colors hover:!text-orange max-sm:hidden" href="#resume">Experience</a>
          <a className="transition-colors hover:!text-orange" href="#projects">Projects</a>
        </div>
        <a
          className="inline-flex items-center gap-4.5 rounded-full border border-line bg-orange px-3.75 py-2.75 text-[12px] font-semibold text-[#17110e] transition-all duration-300 hover:border-orange/80 hover:bg-[#de7523] hover:text-[#17110e] max-sm:gap-2 max-sm:px-2.75 max-sm:py-2.25 max-sm:text-[10px]"
          href="#contact"
        >
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}
