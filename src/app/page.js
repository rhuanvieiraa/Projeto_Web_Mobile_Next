/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/


import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDenuncia from "../components/CardDenuncia";
import FormularioDenuncia from "../components/FormularioDenuncia";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <section className="apresentacao">
                    <div className="apresentacao-conteudo">
                        <h1>Ajude a melhorar a sua cidade.</h1>
                        <p> Registre problemas do seu bairro, acompanhe ocorrências
                            e participe da transformação da comunidade. </p>
                        <a href="#denuncia">Fazer uma denúncia</a>
                    </div>
                </section>

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

                    <aside className="sobre-nos">
                        <h2>Sobre Nós</h2>
                        <p> O Conecta Cidade nasceu com a proposta de aproximar
                            a população dos problemas urbanos do dia a dia. </p>

                        <p> Nossa ideia é facilitar o registro de ocorrências
                            e permitir que a comunidade acompanhe situações
                            pendentes e resolvidas. </p>
                    </aside>
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