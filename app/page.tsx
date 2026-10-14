import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="pt-[57px] md:ml-64 md:pt-0">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
