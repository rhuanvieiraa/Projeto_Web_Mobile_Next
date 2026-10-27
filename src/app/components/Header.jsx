/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

export default function Header() {
    return (
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
    );
}