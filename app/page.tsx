import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import RevealSection from "./components/RevealSection";
import TechStack from "./components/TechStack";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 relative">
      <ParticleBackground />
      <Navbar />

      <div className="relative z-10 w-full flex flex-col gap-32">
        <section id="hero" className="w-full">
          <div className="max-w-6xl mx-auto px-6">
            <Hero />
          </div>
        </section>

        <SectionDivider />

        <section id="about" className="w-full">
          <div className="max-w-5xl mx-auto px-6">
            <About />
          </div>
        </section>

        <SectionDivider />

        <section id="skills" className="w-full">
          <div className="max-w-5xl mx-auto px-6">
            <Skills />
          </div>
        </section>

        <SectionDivider />

        <section id="techstack" className="w-full">
          <div className="max-w-6xl mx-auto px-6">
            <TechStack />
          </div>
        </section>

        <SectionDivider />

        <section id="projects" className="w-full">
          <div className="max-w-5xl mx-auto px-6">
            <Projects />
          </div>
        </section>

        <SectionDivider />

        <section id="whyhireme" className="w-full">
          <div className="max-w-6xl mx-auto px-6">
            <WhyHireMe />
          </div>
        </section>

        <SectionDivider />

        <section id="achievements" className="w-full">
          <div className="max-w-5xl mx-auto px-6">
            <Achievements />
          </div>
        </section>

        <SectionDivider />

        <section id="contact" className="w-full">
          <div className="max-w-5xl mx-auto px-6">
            <Contact />
          </div>
        </section>

        <Footer />
      </div>

      <Chatbot />
    </main>
  );
}
