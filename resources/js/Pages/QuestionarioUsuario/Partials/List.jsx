import Item from "./Item";

export default function List({ questoes, onActivate }) {
    return (
        <ul className="grid grid-cols-1 gap-2">
            {questoes.map(questao => (
                <Item onActivate={onActivate} key={questao.id} questao={questao} />
            ))}
        </ul>
    );
}