import Item from "./Item";

export default function List({ disciplinas }) {
    return (<>
            {disciplinas.length === 0 && (<p className="mt-1 text-center text-sm text-gray-600 dark:text-gray-400">Nenhuma disciplina cadastrada no momento.</p>)}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {disciplinas.map(disciplina => (
                <Item key={disciplina.id} disciplina={disciplina} />
                ))}
        </ul>
        </>
    );
}