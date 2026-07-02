import React from "react";

export default function LoaderLogo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className || ""}`}>
      {/* Sedirkon S Logo Mark - minimalist luxury style */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4"
      >
        <path
          d="M20 70C20 85 35 90 50 90C65 90 80 85 80 70C80 55 50 50 50 50C50 50 20 45 20 30C20 15 35 10 50 10C65 10 80 15 80 30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          className="text-cream-500"
        />
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" opacity="0.3" className="text-cream-500" />
      </svg>
      {/* Logotype */}
      <h2 className="font-serif text-3xl md:text-4xl tracking-[0.2em] text-cream-500 font-light">
        SEDIRKON
      </h2>
      <p className="font-sans text-xs md:text-sm tracking-[0.4em] text-cream-500/60 mt-2 uppercase">
        Mobilya
      </p>
    </div>
  );
}
