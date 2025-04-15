import HeaderContato from "@/app/components/HeaderContato";
import FormularioContato from "@/app/components/FormularioContato";
import ContatoDireto from "@/app/components/ContatoDireto";
import Localizacao from "@/app/components/Localizacao";
import FAQContato from "@/app/components/FAQContato";
import CallToActionContato from "@/app/components/CallToActionContato";

import React from "react";

export default function Contatos() {
  return (
    <>
    <HeaderContato />
    <FormularioContato />
    <ContatoDireto />
    <Localizacao />
    <FAQContato />
    <CallToActionContato />

    </>
  );
}