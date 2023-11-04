import Item from "./Item";

export default function List({ questoes }) {
    return (<>
        {questoes.length === 0 && (<p className="mt-1 text-center text-sm text-gray-600 dark:text-gray-400">Nenhuma questão cadastrada no momento.</p>)}
        <ul className="grid grid-cols-1">
            {questoes.map(questao => (
                <Item key={questao.id} questao={questao} />
            ))}
        </ul>
    </>
    );
}