export default function CardDenuncia(props) {
    return (
        <article className="card-denuncia">
            <h3>{props.titulo}</h3>

            {props.protocolo && (
                <p> <strong>Protocolo:</strong> {props.protocolo} </p>
            )}

            {props.data && (
                <p> <strong>Data:</strong> {props.data} </p>
            )}

            {props.bairro && (
                <p> <strong>Bairro:</strong> {props.bairro} </p>
            )}

            <p> <strong>Status:</strong> {props.status} </p>

            <p>{props.descricao}</p>

            <a href={`/denuncias/${props.id}`}>
                Ver detalhes
            </a>
        </article>
    );
}