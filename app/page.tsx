import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <Portfolio />
    </main>
  );
}
