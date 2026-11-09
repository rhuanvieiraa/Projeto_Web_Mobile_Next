/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import { denuncias } from "../../../../lib/db";

export async function GET(request, { params }) {
    const { id } = await params;

    const denuncia = denuncias.find((item) => {
        return item.id === Number(id);
    });

    if (!denuncia) {
        return Response.json(
            { erro: "Denúncia não encontrada" },
            { status: 404 }
        );
    }

    return Response.json(denuncia);
}