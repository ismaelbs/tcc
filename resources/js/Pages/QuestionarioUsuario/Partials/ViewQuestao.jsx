export default function ViewQuestao({ questao }) {
    return (
        <div className={"p-5 flex flex-col space-x-2 bg-gray-900 rounded-md border-gray-500 border-spacing-2 border-2 border-dashed " + (!questao.ativa && 'hidden')} key={questao.id}>
            <div className="flex-1 flex-col">
                <div className="block overflow-hidden">
                    <p className="text-md text-gray-600 dark:text-gray-400">{questao.enunciado}</p>
                </div>
            </div>
            <div className="block overflow-hidden">
                {questao.respostas.map(resposta => (
                    <div className="flex items-center space-x-2 mb-2" key={resposta.id}>
                        <input type="radio" name={`resposta-${questao.id}`} id={`resposta-${resposta.id}`} value={resposta.id} />
                        <label className="text-md text-gray-600 dark:text-gray-400" htmlFor={`resposta-${resposta.id}`}>{resposta.descricao}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}