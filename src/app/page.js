/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/


import Header from "src/app/components/header";
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
                        <article className="card-denuncia">
                            <h3>Buraco na via principal</h3>
                            <p> <strong>Bairro:</strong> Pinheiros </p>

                            <p> <strong>Status:</strong> Pendente </p>

                            <p> Existe um buraco na pista da direita provocando
                                risco aos motoristas. </p>
                        </article>

                        <article className="card-denuncia">
                            <h3>Poste com Iluminação Queimada</h3>
                            <p> <strong>Bairro:</strong> Butantã </p>

                            <p> <strong>Status:</strong> Resolvido </p>

                            <p> Rua escura perto da travessa principal. </p>
                        </article>
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
                    <form id="form-denuncia">
                        <label htmlFor="titulo"> Título da Ocorrência: </label>
                        <br />
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            placeholder="Ex: Buraco na pista"
                            required/>
                        <br />
                        <br />
                        <label htmlFor="categoria"> Categoria: </label>
                        <br />
                        <select
                            id="categoria"
                            name="categoria"
                            required>
                            <option value="">Selecione uma opção</option>
                            <option value="asfalto">Asfalto / Buraco</option>
                            <option value="iluminacao">Iluminação Pública</option>
                            <option value="lixo">Lixo / Entulho</option>
                            <option value="outros">Outros</option>
                        </select>
                        <br />
                        <br />
                        <label htmlFor="bairro"> Bairro / Endereço: </label>
                        <br />
                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            placeholder="Ex: Pinheiros"
                            required/>
                        <br />
                        <br />
                        <label htmlFor="foto"> Foto do Problema (Opcional): </label>
                        <br />
                        <input
                            type="file"
                            id="foto"
                            name="foto"
                            accept="image/*"/>
                        <br />
                        <br />
                        <label htmlFor="descricao"> Descrição detalhada: </label>
                        <br />
                        <textarea
                          id="descricao"
                          name="descricao"
                          rows="4"
                          placeholder="Conte mais detalhes..."
                          required/>
                        <br />
                        <br />
                        <button type="submit">
                            Enviar Denúncia
                        </button>
                    </form>
                </section>
            </main>

            <Footer />
        </>
    );
}