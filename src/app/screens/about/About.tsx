import HeaderAbout from "../../components/HeaderAbout";
import BioDetalhada from "@/app/components/BioDetalhada";
import Timeline from "@/app/components/Timeline";
import StacksConhecidas from "@/app/components/StacksConhecidas";
import CuriosidadesSobreMim from "@/app/components/CuriosidadesSobreMim";

import React from "react";

export default function About() {
  return (
    <>
    <HeaderAbout />
    <BioDetalhada />
    <Timeline />
    <StacksConhecidas />
    <CuriosidadesSobreMim />
    </>
  );
}