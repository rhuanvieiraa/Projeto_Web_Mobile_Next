/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDenuncia from "../components/CardDenuncia";

export default function MinhasDenuncias() {
    return (
        <>
            <Header />

            <main>
                <section id="historico">
                    <h1>Denúncias realizadas</h1>

                    <CardDenuncia
                            titulo = "Buraco na via principal"
                            protocolo = "#2026001"
                            data = "10/03/2026"
                            status = "Pendente"
                            descricao = "Existe um buraco na pista provocando risco aos motoristas e ciclistas."
                    />

                    <CardDenuncia
                            titulo = "Vazamento de água"
                            protocolo = "#2026002"
                            data = "15/03/2026"
                            status = "Resolvido"
                            descricao = "Vazamento próximo a calçada principal do bairro."
                    />

                    <div id="lista-denuncias"></div>
                </section>
            </main>

            <Footer />
        </>
    );
}