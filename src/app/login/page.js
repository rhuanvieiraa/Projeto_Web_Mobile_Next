/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

export default function Login() {
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
                <section className="login-apresentacao">
                    <h1>Acesse sua conta</h1>
                    <p> Entre na sua conta ou faça seu cadastro para participar
                        do Conecta Cidade. </p>
                </section>

                <div className="area-conta">
                    <section id="area-login">
                        <h2>Login</h2>

                        <form id="form-login">
                            <label htmlFor="email"> E-mail: </label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                required/>
                            <br />
                            <br />

                            <label htmlFor="senha"> Senha: </label>
                            <br />
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Digite sua senha"
                                required/>
                            <br />
                            <br />

                            <button type="submit"> Entrar </button>
                        </form>

                        <br />

                        <p>
                            Ainda não possui uma conta?
                            <a href="#cadastro"> Cadastre-se </a>
                        </p>
                    </section>

                    <section id="cadastro">
                        <h2>Cadastro</h2>

                        <form id="form-cadastro">
                            <label htmlFor="nome-completo"> Nome completo: </label>
                            <br />
                            <input
                                type="text"
                                id="nome-completo"
                                name="nome-completo"
                                placeholder="Digite seu nome completo"
                                required/>
                            <br />
                            <br />

                            <label htmlFor="email-cadastro"> E-mail: </label>
                            <br />
                            <input
                                type="email"
                                id="email-cadastro"
                                name="email-cadastro"
                                placeholder="Digite seu e-mail"
                                required/>
                            <br />
                            <br />

                            <label htmlFor="senha-cadastro"> Senha: </label>
                            <br />
                            <input
                                type="password"
                                id="senha-cadastro"
                                name="senha-cadastro"
                                placeholder="Digite sua senha"
                                required/>
                            <br />
                            <br />

                            <button type="submit"> Cadastrar </button>
                        </form>
                    </section>
                </div>
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