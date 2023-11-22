export default function Item({ questao, onActivate }) {
    const { enunciado } = questao;
    const MAX_LENGTH = 100;

    return (
        <div onClick={() => onActivate(questao)} className={`p-5 flex space-x-2 bg-gray-900 rounded-md border-gray-500 border-spacing-2 border-2 border-dashed cursor-pointer ${questao.ativa && "border-gray-50"}`}>
            <div className="flex-1 flex-col">
                <div className="block overflow-hidden">
                    {enunciado.length > MAX_LENGTH &&  <p className="text-md text-gray-600 dark:text-gray-400">{enunciado.slice(0, 100)}&hellip;</p>}
                    {enunciado.length <= MAX_LENGTH &&  <p className="text-md text-gray-600 dark:text-gray-400">{enunciado}</p>}
                </div>
            </div>
        </div>
    );
}