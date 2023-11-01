import Item from "./Item";

export default function List({ assuntos }) {
    return (<>
            {assuntos.length === 0 && (<p className="mt-1 text-center text-sm text-gray-600 dark:text-gray-400">Nenhuma assunto cadastrado no momento para esta disciplina.</p>)}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {assuntos.map(assunto => (
                <Item key={assunto.id} assunto={assunto} />
                ))}
        </ul>
        </>
    );
}