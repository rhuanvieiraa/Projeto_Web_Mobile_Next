/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default async function DetalheDenuncia({ params }) {
    const { id } = await params;

    return (
        <>
            <Header />

            <main>
                <section id="historico">
                    <h1>Detalhes da Denúncia</h1>

                    <p>
                        <strong>ID da denúncia:</strong> {id}
                    </p>
                </section>
            </main>

            <Footer />
        </>
    );
}