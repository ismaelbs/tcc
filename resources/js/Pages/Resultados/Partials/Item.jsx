import { useState } from "react";

export default function Item({ resultado }) {
    const [mostrarRespostas, setMostrarRespostas] = useState(false);
    const { id, questionario, questionario_usuario_respostas: respostas } = resultado;
    const calcularAcertos = repostas => {
        return repostas.reduce((acertos, resposta) => {
            if (resposta.resposta.correta === 1) {
                acertos++;
            }

            return acertos;
        }, 0);
    }

    const avaliarResposta = (respondeu, respostaQuestao) => {
        if (respostaQuestao.correta === 1) {
            return 'border-green-500';
        }

        if (respondeu.resposta.id === respostaQuestao.id && respostaQuestao.correta === 0) {
            return 'border-red-500';
        }

        return '';
    }
    const porcentagem = (calcularAcertos(respostas) / respostas.length * 100).toFixed(2);
    const statusClasses = calculo => {
        calculo = parseFloat(calculo);
        console.log(calculo);
        if (calculo >= 70.0) {
            return 'bg-green-500';
        }

        if (calculo >= 40.0) {
            return 'bg-yellow-500';
        }

        return 'bg-red-500';
    }
    
    return (
        <div key={id} className="bg-gray-700 rounded-lg p-5 mt-4">
            <div className="flex justify-between">
                <p className="text-xl font-bold">{questionario.descricao}</p>
                <button
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                    onClick={() => setMostrarRespostas(!mostrarRespostas)}
                >
                    {mostrarRespostas ? 'Esconder' : 'Mostrar'} respostas
                </button>
            </div>
            <p>Acertos: {calcularAcertos(respostas)} de {respostas.length}</p>
            <div className="my-3">
                <div className="progress cursor-progress bg-slate-900 rounded-md overflow-hidden">
                    <div className={`progress-ba h-2 rounded-md ${statusClasses(porcentagem)}`} style={{ width: `${porcentagem}%` }}></div>
                </div>
            </div>
            <p>Progresso: {porcentagem}%</p>
            <div className={`mt-4 grid grid-cols-1 gap-2 ${mostrarRespostas ? '' : 'hidden'}`}>
                {respostas.map((respondeu) => (
                    <div key={respondeu.id} className="p-6 space-x-2 bg-gray-900 rounded-md">
                        <p className="mb-5">{respondeu.questao.enunciado}</p>
                        <ul className="grid grid-cols-1 gap-2">
                            {respondeu.questao.respostas.map((respostaQuestao) => (
                                <li className={`p-5 flex flex-col space-x-2 bg-gray-900 rounded-md border-gray-500 border-spacing-2 border-2 border-dashed ${avaliarResposta(respondeu, respostaQuestao)}`} key={respostaQuestao.id}>
                                    {respostaQuestao.descricao}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}