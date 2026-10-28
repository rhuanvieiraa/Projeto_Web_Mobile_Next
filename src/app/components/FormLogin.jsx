/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

export default function FormLogin() {
    return (
        <section id="area-login">
            <h2> Login </h2>

            <form id="form-login">
                    <label htmlFor="email"> E-mail: </label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        required/>
                    <br />
                    <br />

                    <label htmlFor="senha"> Senha: </label>
                    <br />
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        required/>
                    <br />
                    <br />

                    <button type="submit"> Entrar </button>
            </form>

            <br />

            <p>
                Ainda não possui uma conta?
                <a href="#cadastro"> Cadastre-se </a>
            </p>
        </section>
    );
}