import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ResumoSobreMim from "./components/ResumoSobreMim";
import SkillsPreview from "./components/SkillsPreview";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <ResumoSobreMim />
    <SkillsPreview />
    <CallToAction />
    <Footer />
    </>
  );
}
