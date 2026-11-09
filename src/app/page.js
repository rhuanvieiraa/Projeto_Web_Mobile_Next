/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardDenuncia from "./components/CardDenuncia";
import FormularioDenuncia from "./components/FormularioDenuncia";
import Hero from "./components/Hero";
import SobreNos from "./components/SobreNos";

export default function Home() {
    const [denuncias, setDenuncias] = useState([]);

    useEffect(() => {
        fetch("/api/denuncias")
            .then((resposta) => resposta.json())
            .then ((dados) => {
                setDenuncias(dados);
            });
    },[]);

    return (
        <>
            <Header />

            <main>
                <Hero />

                <section className="area-conteudo">
                    <div id="denuncias-recentes">
                        <h2> Denúncias Recentes </h2>

                        {denuncias.map((denuncia) => (
                            <CardDenuncia
                            key={denuncia.id}
                            id={denuncia.id}
                            titulo={denuncia.titulo}
                            bairro={denuncia.bairro}
                            status={denuncia.status}
                            descricao={denuncia.descricao}
                            />
                        ))}
                    </div>

                    <SobreNos />
                </section>

                <section id="denuncia">
                        <h2> Registrar Ocorrências </h2>

                        <FormularioDenuncia />
                </section>
            </main>

            <Footer />
        </>
    );
}