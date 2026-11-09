/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDenuncia from "../components/CardDenuncia";

export default function MinhasDenuncias() {
    const [denuncias, setDenuncias] = useState([]);

    useEffect(() => {
        fetch("/api/denuncias")
            .then((resposta) => resposta.json())
            .then((dados) => {
                setDenuncias(dados);
            });
    }, []);

    return (
        <>
            <Header />

            <main>
                <section id="historico">
                    <h1>Denúncias realizadas</h1>

                    {denuncias.map((denuncia) => (
                        <CardDenuncia
                            key={denuncia.id}
                            id={denuncia.id}
                            titulo={denuncia.titulo}
                            protocolo={denuncia.protocolo}
                            data={denuncia.data}
                            bairro={denuncia.bairro}
                            status={denuncia.status}
                            descricao={denuncia.descricao}
                        />
                    ))}
                </section>
            </main>

            <Footer />
        </>
    );
}