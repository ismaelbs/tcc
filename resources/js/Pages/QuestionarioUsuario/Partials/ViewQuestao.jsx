import { useState } from "react";
import { PiChatCircleTextFill } from "react-icons/pi";
import { FcInfo } from "react-icons/fc";

export default function ViewQuestao({ questao }) {
    const [show, setShow] = useState(false);
    const [ disabled, setDisabled ] = useState(false);
    const [ dica, setDica ] = useState('');
    const receberDica = () => {
        setShow(true);
        setDisabled(true);
        setDica(getRandom(questao.dicas));
    };

    const getRandom = dicas => {
        return dicas[Math.floor((Math.random() * dicas.length))];
    }

    return (
        <div className={`p-5 flex flex-col space-x-2 bg-gray-900 rounded-md border-gray-500 border-spacing-2 border-2 border-dashed ${!questao.ativa && 'hidden'}`} key={questao.id}>
            {questao.dicas.length > 0 && (
                <div className="flex justify-end">
                    <button type="button" title="Receber dica" className="block p-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out disabled:cursor-not-allowed" onClick={() => receberDica()} disabled={disabled}>
                        <PiChatCircleTextFill />
                    </button>
                </div>)}
            {questao.dicas.length > 0 && show && (
                <div className="bg-yellow-700 text-gray-200 rounded-sm p-2 my-4">
                    <div className="flex justify-end border-b-2 border-gray-200 p-2">
                        <FcInfo />
                    </div>
                    <p className="text-justify text-sm p-4">{dica.dica}</p>
                </div>
            )}
            
            <div className="flex-1 flex-col mb-5">
                <div className="block overflow-hidden">
                    <p className="text-md text-justify text-gray-600 dark:text-gray-400">{questao.enunciado}</p>
                </div>
            </div>
            <div className="block overflow-hidden">
                {questao.respostas.map(resposta => (
                    <div className="flex items-center space-x-2 mb-2" key={resposta.id}>
                        <input type="radio" name={questao.id} id={`resposta-${resposta.id}`} value={resposta.id} />
                        <label className="text-md text-gray-600 dark:text-gray-400" htmlFor={`resposta-${resposta.id}`}>{resposta.descricao}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}