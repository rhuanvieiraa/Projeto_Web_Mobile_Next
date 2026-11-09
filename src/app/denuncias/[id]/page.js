/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetalheDenuncia from "../../components/DetalheDenuncia";

export default async function Detalhe({ params }) {
    const { id } = await params;

    return (
        <>
            <Header />

            <main> 
                <DetalheDenuncia id={id} />
            </main>

            <Footer />
        </>
    );
}