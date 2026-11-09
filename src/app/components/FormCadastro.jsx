/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

"use client";

import { useState } from "react";

export default function FormCadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function fazerCadastro(event) {
        event.preventDefault();

        if (nome === "" || email === "" || senha === "") {
            alert("Preencha todos os campos.");
            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Cadastro realizado com sucesso!");

        setNome("");
        setEmail("");
        setSenha("");
    }

    return (
        <section id="cadastro">
            <h2>Cadastro</h2>

            <form id="form-cadastro" onSubmit={fazerCadastro}>
                <label htmlFor="nome"> Nome: </label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    required/>

                <label htmlFor="email-cadastro"> E-mail: </label>

                <input
                    type="email"
                    id="email-cadastro"
                    name="email-cadastro"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required/>

                <label htmlFor="senha-cadastro"> Senha: </label>

                <input
                    type="password"
                    id="senha-cadastro"
                    name="senha-cadastro"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    required/>

                <button type="submit"> Cadastrar </button>
            </form>
        </section>
    );
}