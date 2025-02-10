import { Link } from "react-scroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ITSMPortfolio from "@/components/ITSMPortfolio";
import Certifications from "@/components/Certifications";
import NGOGallery from "@/components/NGOGallery";
import ClientExperience from "@/components/ClientExperience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-raleway">
      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="portfolio" className="py-20">
          <ITSMPortfolio />
        </section>

        <section id="experience" className="py-20 bg-muted/30">
          <ClientExperience />
        </section>

        <section id="certifications" className="py-20">
          <Certifications />
        </section>

        <section id="co-curricular" className="py-20 bg-muted/30"> {/* Renamed section */}
          <NGOGallery />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}