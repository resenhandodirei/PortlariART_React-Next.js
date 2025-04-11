import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ResumoSobreMim from "./components/ResumoSobreMim";
import ProjetosDestaque from "./components/ProjetosDestaque";
import SkillsPreview from "./components/SkillsPreview";
import CallToAction from "./components/CallToAction";
import SpotifyPlayer from "./components/SpotifyPlayer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <ResumoSobreMim />
    <ProjetosDestaque />
    <SkillsPreview />
    <CallToAction />
    <SpotifyPlayer />
    <Footer />
    </>
  );
}
