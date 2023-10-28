import Item from "./Item";

export default function List({ corpoconhecimentos }) {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {corpoconhecimentos.map(({id, tema}) => (
                <Item key={id} corpoconhecimento={tema} />
            ))}
        </ul>
    );
}