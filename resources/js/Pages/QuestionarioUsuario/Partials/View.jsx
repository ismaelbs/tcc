import ViewQuestao from "./ViewQuestao";

export function View({ questoes }) {
    return (
        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div className="flex flex-col gap-4">
                {questoes.map(questao => (
                    <ViewQuestao key={questao.id} questao={questao} />
                ))}
            </div>
        </div>
    )
}