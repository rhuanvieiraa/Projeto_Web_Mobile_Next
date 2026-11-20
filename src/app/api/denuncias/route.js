/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import { denuncias } from "../../../lib/db";

export async function GET() {
    return Response.json(denuncias);
}

export async function POST(request) {
    const dados = await request.json();

    if (!dados.titulo || !dados.categoria || !dados.bairro || !dados.descricao) {
        return Response.json(
            { erro: "Preencha todos os campos obrigatórios." },
            { status: 400 }
        );
    }

    const id = Math.max(0, ...denuncias.map((item) => item.id)) + 1;

    const novaDenuncia = {
        id: id,
        titulo: dados.titulo,
        categoria: dados.categoria,
        protocolo: `#${new Date().getFullYear()}${String(id).padStart(3, "0")}`,
        data: new Date().toLocaleDateString("pt-BR"),
        bairro: dados.bairro,
        status: "Pendente",
        descricao: dados.descricao
    };

    denuncias.push(novaDenuncia);

    return Response.json(novaDenuncia, { status: 201 });
}