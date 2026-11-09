/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import Header from "../components/Header";
import Footer from "../components/Footer";
import FormularioDenuncia from "../components/FormularioDenuncia";

export default function Denuncia() {
    return (
        <>
            <Header />

            <main className="pagina-denuncia">
                <FormularioDenuncia />
            </main>

            <Footer />
        </>
    );
}