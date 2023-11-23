import { router } from "@inertiajs/react";
import ViewQuestao from "./ViewQuestao";

export function View({ questoes, onActivate, questionarioUsuario }) {
    const finalizarHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const input = Object.fromEntries(formData);
        const formControl = questoes.map(questao => {
            return {
                resposta_id: input[questao.id],
                questao_id: questao.id,
                questionario_usuario_id: questionarioUsuario.id,
            }
        });
        
        const naoRespondida = formControl.find(f => !f.resposta_id);
        if (naoRespondida) {
            onActivate(questoes.find(q => q.id === naoRespondida.id));
            alert('Responda todas as questões antes de finalizar');
            return;
        }
        
        router.post(route('questionario_usuario.finalizar', questionarioUsuario.id), {
            respostas: formControl,
        });
    };

    return (
        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div className="flex flex-col gap-4">
                <form onSubmit={finalizarHandler}>
                    {questoes.map(questao => (
                        <ViewQuestao key={questao.id} questao={questao} />
                    ))}
                    <div className="flex justify-end">
                        <button type="submit" className="px-4 py-2 mt-5 text-sm font-semibold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Finalizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}