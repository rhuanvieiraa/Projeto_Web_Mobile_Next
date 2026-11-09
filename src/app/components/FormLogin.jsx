/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

"use client";

import { useState } from "react";

export default function FormLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function fazerLogin(event) {
        event.preventDefault();

        if (email === "" || senha === "") {
            alert("Preencha todos os campos.");
            return;
        }

        const usuarioSalvo = localStorage.getItem("usuario");

        if (usuarioSalvo === null) {
            alert("Nenhum usuário cadastrado.");
            return;
        }

        const usuario = JSON.parse(usuarioSalvo);

        if (email === usuario.email && senha === usuario.senha) {
            localStorage.setItem("logado", "true");

            alert("Login realizado com sucesso!");

            setEmail("");
            setSenha("");
        } else {
            alert("E-mail ou senha incorretos.");
        }
    }

    return (
        <section id="area-login">
            <h2>Login</h2>

            <form id="form-login" onSubmit={fazerLogin}>
                <label htmlFor="email"> E-mail: </label><br />

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required/>

                <label htmlFor="senha"> Senha: </label>

                <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    required/>

                <button type="submit"> Entrar </button>
            </form>

            <br />

            <p>
                Ainda não possui uma conta?
                <a href="#cadastro"> Cadastre-se </a>
            </p>
        </section>
    );
}