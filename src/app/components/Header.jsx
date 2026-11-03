/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

"use client";

import { useEffect, useState } from "react";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [usuarioLogado, setUsuarioLogado] = useState(false);

    useEffect(() => {
        const logado = localStorage.getItem("logado");

        if (logado === "true") {
            setUsuarioLogado(true);
        }
    }, []);

    function alternarMenu() {
        setMenuAberto(!menuAberto);
    }

    function fecharMenu() {
        setMenuAberto(false);
    }

    function sair() {
        localStorage.removeItem("logado");
        setUsuarioLogado(false);

        alert("Logout realizado com sucesso!");

        window.location.href = "/";
    }

    return (
        <header id="top">
            <img
                src="/imagens/conecta-cabecalho.png"
                alt="Logo Conecta Cidade"/>

            <button
                id="menu-btn"
                onClick={alternarMenu}
                aria-expanded={menuAberto}
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}>
                {menuAberto ? "×" : "☰"}
            </button>

            <nav
                id="menu-navegacao"
                className={menuAberto ? "menu-aberto" : ""}>

                <ul>
                    <li>
                        <a href="/" onClick={fecharMenu}>
                            Página Inicial
                        </a>
                    </li>

                    <li>
                        <a href="/denuncia" onClick={fecharMenu}>
                            Criar Denúncia
                        </a>
                    </li>

                    <li>
                        <a href="/minhas-denuncias" onClick={fecharMenu}>
                            Denúncias
                        </a>
                    </li>

                    {usuarioLogado ? (
                        <li>
                            <a href="#" onClick={sair}>
                                Sair
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a href="/login" onClick={fecharMenu}>
                                Login
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}