/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import Header from "../components/Header";
import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin";
import FormCadastro from "../components/FormCadastro";

export default function Login() {
    return (
        <>
            <Header />

            <main>
                <section className="login-apresentacao">
                    <h1>Acesse sua conta</h1>
                    <p> Entre na sua conta ou faça seu cadastro para participar
                        do Conecta Cidade. </p>
                </section>

                <div className="area-conta">
                    
                    <FormLogin />

                    <FormCadastro />

                </div>
            </main>

            <Footer />
        </>
    );
}