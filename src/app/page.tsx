import { GrainOverlay }    from "@/components/GrainOverlay";
import { ScrollProgress }  from "@/components/ScrollProgress";
import { Nav }             from "@/components/Nav";
import { Hero }            from "@/components/Hero";
import { Marquee }         from "@/components/Marquee";
import { Stats }           from "@/components/Stats";
import { Skills }          from "@/components/Skills";
import { Experience }      from "@/components/Experience";
import { Projects }        from "@/components/Projects";
import { Contact }         from "@/components/Contact";
import { Footer }          from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative bg-[#060606]">
      <GrainOverlay />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
