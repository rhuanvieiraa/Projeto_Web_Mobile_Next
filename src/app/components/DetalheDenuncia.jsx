/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

"use client";

import { useEffect, useState } from "react";

export default function DetalheDenuncia(props) {
    const [ denuncia, setDenuncia ] = useState(null);

    useEffect(() => {
        fetch(`/api/denuncias/${props.id}`)
        .then((resposta) => resposta.json())
        .then((dados) => {
            setDenuncia(dados);
        });
    }, [props.id]);

    if (!denuncia) {
        return <p> Carregando... </p>
    }

    if (denuncia.erro) {
        return <p> {denuncia.erro} </p>
    }

    return (
        <section id="historico">
            <h1> Detalhes da Denúncia </h1>

            <h2> {denuncia.titulo} </h2>

            <p>
                <strong> Protocolo: </strong> {denuncia.protocolo}   
            </p>

            <p>
                <strong> Data: </strong> {denuncia.data}   
            </p>

            <p>
                <strong> Bairro: </strong> {denuncia.bairro}   
            </p>

            <p>
                <strong> Status: </strong> {denuncia.status}   
            </p>

            <p> {denuncia.descricao} </p>
        </section>
    );
}