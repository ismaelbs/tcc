export function Questao({ questao, children }) {
    return (
        <div className="flex flex-col p-5">
            <span className="h-3 mb-5 font-semibold text-gray-500 dark:text-gray-400">Assunto: {questao.assunto.descricao}</span>
            <span className="text-sm text-justify text-gray-500 dark:text-gray-400">{questao.enunciado}</span>
            { children }
        </div>
    );
}