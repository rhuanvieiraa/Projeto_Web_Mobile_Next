/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

"use client";

import { useState } from "react";

export default function FormularioDenuncia() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [bairro, setBairro] = useState("");
    const [descricao, setDescricao] = useState("");

    function enviarDenuncia(event) {
        event.preventDefault();

        const novaDenuncia = {
            titulo: titulo,
            categoria: categoria,
            bairro: bairro,
            descricao: descricao
        };

        console.log(novaDenuncia);

        alert("Denúncia registrada com sucesso!");

        setTitulo("");
        setCategoria("");
        setBairro("");
        setDescricao("");
    }

    return (
        <form id="form-denuncia" onSubmit={enviarDenuncia}>
            <label htmlFor="titulo">Título:</label>

            <input
                type="text"
                id="titulo"
                name="titulo"
                placeholder="Ex: Buraco na rua"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
                required/>

            <label htmlFor="categoria">Categoria:</label>

            <select
                id="categoria"
                name="categoria"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
                required>

                <option value="">Selecione uma categoria</option>
                <option value="asfalto">Asfalto</option>
                <option value="iluminacao">Iluminação</option>
                <option value="lixo">Lixo</option>
                <option value="sinalizacao">Sinalização</option>
                <option value="outros">Outros</option>
            </select>

            <label htmlFor="bairro">Bairro:</label>

            <input
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Digite o bairro"
                value={bairro}
                onChange={(event) => setBairro(event.target.value)}
                required/>

            <label htmlFor="foto">Foto:</label>

            <input
                type="file"
                id="foto"
                name="foto"
                accept="image/*"/>

            <label htmlFor="descricao">Descrição:</label>

            <textarea
                id="descricao"
                name="descricao"
                placeholder="Descreva o problema encontrado"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                required/>

            <button type="submit">
                Publicar Ocorrência
            </button>
        </form>
    );
}