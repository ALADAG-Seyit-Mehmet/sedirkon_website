import Hero from "@/components/Hero";
import Showroom from "@/components/Showroom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Showroom />
    </main>
  );
}
