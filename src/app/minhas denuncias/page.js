/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

export default function MinhasDenuncias() {
    return (
        <>
            <Header />

            <main>
                <section id="historico">
                    <h1>Denúncias realizadas</h1>

                    <article className="card-denuncia">
                        <h3>Buraco na via principal</h3>
                        <p> <strong>Protocolo:</strong> #2026001 </p>
                        <p> <strong>Data:</strong> 10/03/2026 </p>
                        <p> <strong>Status:</strong> Pendente </p>
                        <p> Existe um buraco na pista da direita provocando
                            risco aos motoristas e ciclistas. </p>
                    </article>

                    <article className="card-denuncia">
                        <h3>Vazamento de água</h3>
                        <p> <strong>Protocolo:</strong> #2026002 </p>
                        <p> <strong>Data:</strong> 15/03/2026 </p>
                        <p> <strong>Status:</strong> Resolvido </p>
                        <p> Vazamento de água próximo à calçada principal
                            do bairro. </p>
                    </article>

                    <div id="lista-denuncias"></div>
                </section>
            </main>

            <Footer />
        </>
    );
}