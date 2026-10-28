/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

export default function CardDenuncia(props) {
    return (
        <article className = "card-denuncia">
            <h3> (props.titulo) </h3>

            {props.protocolo && (
                <p> <strong> Protocolo: </strong> {props.protocolo} </p>
            )}

            {props.data && (
                <p><strong> Data: </strong> {props.data} </p>
            )}

            {props.bairro && (
                <p><strong> Bairro: </strong> {props.bairro} </p>
            )}

            <p><strong> Status: </strong> {props.status} </p>

            <p> {props.descricao} </p>
        </article>
    );
}