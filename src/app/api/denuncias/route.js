/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import { denuncias } from "../../../lib/db";

export async function GET() {
    return Response.json(denuncias);
}