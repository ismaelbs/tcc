import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { ActionHeader } from '@/Pages/Shared/ActionHeader';
import { EditForm } from './EditForm';
import { BiMessageSquareAdd } from "react-icons/bi";
import { RespostaModal } from './RespostaModal';
import { RespostaItem } from './RespostaItem';
import { PiChatCircleTextFill } from "react-icons/pi";
import { DicasModal } from './DicasModal';

export default function Item({ questao }) {
    const [editing, setEditing] = useState(false);
    const [respostaModal, setRespostaModal] = useState(false);
    const [dicasModal, setDicasModal] = useState(false);
    const { patch } = useForm(questao);

    const onDisableHandler = (e) => {
        e.preventDefault();
        patch(route('questao.disable', questao.id), {
            onSuccess: () => {
                setEditing(false);
            }
        });
    };

    const onEnableHandler = (e) => {
        e.preventDefault();
        patch(route('questao.enable', questao.id));
    };

    const actionSettings = {
        enabled: questao.enabled,
        onEnableClick: questao.enabled ? onDisableHandler : onEnableHandler,
        onEditClick: () => setEditing(true),
    };

    return (
        <div className="p-6 flex space-x-2 bg-gray-900 rounded-md">
            <div className="flex-1 flex-col">
                <ActionHeader settings={actionSettings}>
                    <button type="button" title="Receber dica" className="block w-full p-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out disabled:cursor-not-allowed" onClick={() => setDicasModal(true)}>
                        <PiChatCircleTextFill />
                    </button>
                    <button className="block w-full p-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out disabled:cursor-not-allowed" onClick={() => setRespostaModal(true)} >
                        <BiMessageSquareAdd />
                    </button>
                </ActionHeader>
                {respostaModal && <RespostaModal closeModal={() => setRespostaModal(false)} questao={questao} />}
                {dicasModal && <DicasModal closeModal={() => setDicasModal(false)} questao={questao} />}
                <div className="block">
                    {editing && <EditForm questao={questao} setEditing={setEditing} />}
                    {!editing &&
                        <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">{questao.enunciado}</p>
                    }
                    {!editing &&
                        <>
                            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight mt-10">Respostas:</h2>
                            {questao.respostas.length === 0 && (<p className="mt-1 text-center text-sm text-gray-600 dark:text-gray-400">Nenhuma resposta cadastrada no momento.</p>)}
                            <ul className="grid grid-cols-1 gap-2 divide-y-2 divide-gray-400 list-none">
                                {questao.respostas.map(resposta => (
                                    <RespostaItem key={resposta.id} resposta={resposta} />
                                ))}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}