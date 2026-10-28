/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/


import Header from "./components/Header";
import Footer from "./components/Footer";
import CardDenuncia from "./components/CardDenuncia";
import FormularioDenuncia from "./components/FormularioDenuncia";
import Hero from "./components/Hero";
import SobreNos from "./components/SobreNos";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                
                <Hero />

                <section className="area-conteudo">
                    <div id="denuncias-recentes">
                        <h2>Denúncias Recentes</h2>
                        
                        <CardDenuncia
                            titulo = "Buraco na via principal"
                            bairro = "Pinheiros"
                            status = "Pendente"
                            descricao = "Existe um buraco na pista da direita provocando risco aos motoristas."
                        />
                        
                        <CardDenuncia
                            titulo="Poste com Iluminação Queimada"
                            bairro="Butantã"
                            status="Resolvido"
                            descricao="Rua escura perto da travessa principal."
                        />

                    </div>

                    <SobreNos />

                </section>

                <section id="denuncia">
                    <h2>Registrar Ocorrência</h2>
                    <FormularioDenuncia />
                </section>
            </main>

            <Footer />
        </>
    );
}