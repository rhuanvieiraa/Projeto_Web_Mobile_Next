/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

export default function FormCadastro() {
    return (
        <section in="cadastro"> 
                <h2> Cadastro </h2>

                <form id="form-cadastro">
                    <label htmlFor="nome-completo"> Nome completo: </label>
                    <br />
                    <input
                        type="text"
                        id="nome-completo"
                        name="nome-completo"
                        placeholder="Digite seu nome completo"
                        required/>
                    <br />
                    <br />

                    <label htmlFor="email-cadastro"> E-mail: </label>
                    <br />
                    <input
                        type="email"
                        id="email-cadastro"
                        name="email-cadastro"
                        placeholder="Digite seu e-mail"
                        required/>
                    <br />
                    <br />

                    <label htmlFor="senha-cadastro"> Senha: </label>
                    <br />
                    <input
                        type="password"
                        id="senha-cadstro"
                        name="senha-cadastro"
                        placeholder="Digite sua senha"
                        required/>
                    <br />
                    <br />

                    <button type="Submit"> Cadastrar </button>
                </form>
        </section>
    );
}