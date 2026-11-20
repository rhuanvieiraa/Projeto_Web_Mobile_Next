/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/imagens/conecta-cabecalho.png";

export default function Header() {
    const router = useRouter();

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

    function sair(event) {
        event.preventDefault();

        localStorage.removeItem("logado");
        setUsuarioLogado(false);

        alert("Logout realizado com sucesso!");

        router.push("/");
    }

    return (
        <header id="top">
            <Image
                src={logo}
                alt="Logo Conecta Cidade"
                priority
            />

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
                        <Link href="/" onClick={fecharMenu}>
                            Página Inicial
                        </Link>
                    </li>

                    <li>
                        <Link href="/denuncia" onClick={fecharMenu}>
                            Criar Denúncia
                        </Link>
                    </li>

                    <li>
                        <Link href="/minhas-denuncias" onClick={fecharMenu}>
                            Denúncias
                        </Link>
                    </li>

                    {usuarioLogado ? (
                        <li>
                            <a href="#" onClick={sair}>
                                Sair
                            </a>
                        </li>
                    ) : (
                        <li>
                            <Link href="/login" onClick={fecharMenu}>
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}