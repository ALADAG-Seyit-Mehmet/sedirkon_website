import React from "react";
import Image from "next/image";

export default function LoaderLogo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className || ""}`}>
      <Image 
        src="/logo/sedirkon_logo_header.webp"
        alt="Sedirkon Logo"
        width={400}
        height={150}
        priority
        className="w-64 md:w-80 lg:w-96 h-auto object-contain brightness-0 invert" 
      />
    </div>
  );
}
