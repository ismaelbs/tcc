import ItemDica from "./ItemDica";

export default function ListDicas({ dicas }) {
    return (<>
        {dicas.length === 0 && (<p className="mt-1 text-center text-sm text-gray-600 dark:text-gray-400">Nenhuma dica cadastrada no momento.</p>)}
        <ul className="grid grid-cols-1 gap-2 max-h-[200px] overflow-y-scroll">
            {dicas.map(dica => (
                <ItemDica key={dica.id} dica={dica} />
            ))}
        </ul>
    </>
    );
}