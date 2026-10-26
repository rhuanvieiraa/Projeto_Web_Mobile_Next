/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

export default function MinhasDenuncias() {
    return (
        <>
            <header id="top">
                <img src="/imagens/conecta-cabecalho.png"
                    alt="Logo Conecta Cidade"/>
                <button
                    id="menu-btn"
                    aria-expanded="false"
                    aria-label="Abrir menu">
                    ☰ </button>

                <nav id="menu-navegacao">
                    <ul>
                        <li><a href="/">Página Inicial</a></li>
                        <li><a href="/denuncia">Criar Denúncia</a></li>
                        <li><a href="/minhas-denuncias">Denúncias</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="historico">
                    <h1>Denúncias realizadas</h1>

                    <article className="card-denuncia">
                        <h3>Buraco na via principal</h3>
                        <p> <strong>Protocolo:</strong> #2026001 </p>
                        <p> <strong>Data:</strong> 10/03/2026 </p>
                        <p> <strong>Status:</strong> Pendente </p>
                        <p> Existe um buraco na pista da direita provocando
                            risco aos motoristas e ciclistas. </p>
                    </article>

                    <article className="card-denuncia">
                        <h3>Vazamento de água</h3>
                        <p> <strong>Protocolo:</strong> #2026002 </p>
                        <p> <strong>Data:</strong> 15/03/2026 </p>
                        <p> <strong>Status:</strong> Resolvido </p>
                        <p> Vazamento de água próximo à calçada principal
                            do bairro. </p>
                    </article>

                    <div id="lista-denuncias"></div>
                </section>
            </main>

            <footer>
                <div className="footer-links">
                    <a href="#">Contato</a>
                    <a href="#top">Voltar ao Início</a>
                </div>
                <p> © 2026 Conecta Cidade - Projeto Extensionista </p>
            </footer>
        </>
    );
}