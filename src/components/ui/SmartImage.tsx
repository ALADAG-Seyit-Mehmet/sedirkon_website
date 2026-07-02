import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface SmartImageProps extends Omit<ImageProps, "alt"> {
  alt: string; // Force required alt for accessibility
  aspectRatio?: string; // e.g. "aspect-video", "aspect-square", "aspect-[4/5]"
  containerClassName?: string; // Class for the wrapper div
}

export function SmartImage({
  src,
  alt,
  fill = true, // By default we use fill for responsive fluid layouts
  priority = false, // If true, disables lazy loading and preloads
  quality = 90, // Premium quality by default
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", // Responsive sizes
  className,
  containerClassName,
  aspectRatio,
  placeholder = "blur",
  blurDataURL,
  ...props
}: SmartImageProps) {
  
  // A generic fast blur placeholder base64 (dark grey) for remote URLs
  // Static imports get this generated automatically by Next.js
  const defaultBlur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  
  const isStringSrc = typeof src === "string";
  const finalBlurDataURL = isStringSrc ? (blurDataURL || defaultBlur) : undefined;

  return (
    <div 
      className={cn(
        "relative overflow-hidden w-full h-full min-h-[1px]",
        aspectRatio, // Can be overridden if needed
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        loading={priority ? "eager" : "lazy"} // Auto lazy loading
        quality={quality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={finalBlurDataURL}
        className={cn(
          "object-cover will-change-transform",
          className
        )}
        {...props}
      />
    </div>
  );
}
