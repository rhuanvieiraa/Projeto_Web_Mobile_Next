/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

export default function FormularioDenuncia() {
    return (
        <form id="form-denuncia">
            <label htmlFor="titulo"> Titulo da ocorrência: </label>
            <br />
            <input
                type="text"
                id="titulo"
                name="titulo"
                placeholder="Ex: Buraco na pista"
                required/>
            <br />
            <br />

            <label htmlFor="categoria"> Categoria: </label>
            <br />
            <select
                id="categoria"
                name="categoria"
                required>
                <option value="">Selecione uma opção</option>
                <option value="asfalto"> Asfalto / Buraco </option>
                <option value="iluminacao"> Iluminação Pública </option>
                <option value="lixo"> Lixo / Entulho </option>
                <option value="sinalizacao"> Sinalização / Placa </option>
                <option value="outros"> Outros </option>
            </select>
            <br />
            <br />

            <label htmlFor="bairro"> Bairro / Endereço: </label>
            <br />
            <input
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Ex: Av Paulista, 1000"
                required/>
            <br />
            <br />

            <label htmlFor="foto"> Foto do problema: </label>
            <br />
            <input
                type="file"
                id="foto"
                name="foto"
                accept="image/*"></input>
            <br />
            <br />

            <label htmlFor="descricao"> Descrição do Problema: </label>
            <br />
            <textarea
                id="descricao"
                name="descricao"
                rows="4"
                placeholder="Conte mais detalhes sobre a situação..."
                required/>
            <br />
            <br />

            <button type="submit"> Publicar Ocorrência </button>
        </form>
    );
}