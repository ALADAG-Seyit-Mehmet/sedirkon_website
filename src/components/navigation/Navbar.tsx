"use client";

import { useEffect, useRef, useState } from "react";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tokens } from "@/styles/tokens";
import { useSearch } from "@/components/search/SearchContext";

const NAV_ITEMS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Koleksiyon", href: "/koleksiyon" },
  { label: "Malzemeler", href: "/malzemeler" },
  { label: "Atölye", href: "/atolye" },
  { label: "Projeler", href: "/projeler" },
  { label: "İletişim", href: "/#iletisim" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openSearch } = useSearch();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Navbar scroll animation
      ScrollTrigger.create({
        start: "top -50",
        end: 99999,
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: tokens.colors.charcoal[950] + "F2", // 95% opacity
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: tokens.colors.charcoal[950] + "00", // 0% opacity
            backdropFilter: "blur(0px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0)",
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current || !mobileLinksRef.current) return;

    const links = Array.from(mobileLinksRef.current.children);

    if (isMobileMenuOpen) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== "undefined" && (window as any).lenis) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lenis.stop();
      }

      gsap.to(mobileMenuRef.current, {
        yPercent: 0,
        duration: 0.8,
        ease: "power4.inOut",
      });

      gsap.fromTo(
        links,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (typeof window !== "undefined" && (window as any).lenis) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).lenis.start();
          }
        }
      });
    }
  }, [isMobileMenuOpen]);

  // Handle smooth scroll to section via Lenis
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (href.startsWith("/#") && typeof window !== "undefined" && w.lenis) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.replace("/#", "");
      const ease = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
      if (targetId === "") {
        w.lenis.scrollTo(0, { duration: 1.5, ease });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          w.lenis.scrollTo(targetElement, { duration: 1.5, offset: -80, ease });
        }
      }
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-100 transition-colors py-lg border-b border-transparent"
        style={{ backgroundColor: tokens.colors.charcoal[950] + "00" }}
      >
        <div className="container mx-auto px-md md:px-xl flex items-center justify-between relative">
          {/* 1. Sol: Logo */}
          <div className="flex-1 flex justify-start">
            <TransitionLink href="/" className="relative z-110 flex items-center gap-2 group">
              <span className="font-serif text-2xl tracking-[0.15em] text-cream-500 uppercase">
                Sedirkon
              </span>
            </TransitionLink>
          </div>

          {/* 2. Orta: Nav Items (Tam Ortalanmış) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <TransitionLink
                key={item.label}
                href={item.href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollTo(e, item.href)}
                className="group relative font-sans text-xs xl:text-sm tracking-wider text-cream-500 uppercase transition-colors hover:text-white whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-full h-px bg-cream-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.19,1,0.22,1)]" />
              </TransitionLink>
            ))}
          </div>

          {/* 3. Sağ: Arama ve CTA */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
            <button 
              onClick={openSearch}
              className="text-cream-500/80 hover:text-white transition-colors flex items-center"
              title="Arama (CMD+K)"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Button
              variant="outline"
              className="border-cream-500/20 text-cream-500 hover:bg-cream-500 hover:text-charcoal-950 font-sans tracking-widest text-xs uppercase px-8 transition-colors duration-500"
            >
              Kataloğu İncele
            </Button>
          </div>

          {/* Mobile Menu Toggle & Search */}
          <div className="lg:hidden flex items-center gap-2 z-110 relative">
            <button 
              onClick={openSearch}
              className="text-cream-500 p-2"
              aria-label="Arama"
            >
              <Search size={24} strokeWidth={1} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cream-500 focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-105 bg-charcoal-950 flex flex-col justify-center items-center -translate-y-full will-change-transform"
      >
        <ul ref={mobileLinksRef} className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="overflow-hidden">
              <TransitionLink
                href={item.href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollTo(e, item.href)}
                className="font-serif text-4xl text-cream-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                {item.label}
              </TransitionLink>
            </li>
          ))}
          <li className="mt-8 overflow-hidden">
            <Button
              variant="outline"
              className="border-cream-500/20 text-cream-500 hover:bg-cream-500 hover:text-charcoal-950 font-sans tracking-widest text-xs uppercase px-12 transition-colors duration-500"
            >
              Kataloğu İncele
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
