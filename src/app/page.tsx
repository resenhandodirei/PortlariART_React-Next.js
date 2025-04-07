import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ResumoSobreMim from "./components/ResumoSobreMim";
import ProjetosDestaque from "./components/ProjetosDestaque";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <ResumoSobreMim />
    <ProjetosDestaque />
    <Footer />
    </>
  );
}
