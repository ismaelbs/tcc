import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { ActionHeader } from '@/Pages/Shared/ActionHeader';
import { EditForm } from './EditForm';
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoIosCheckmark } from "react-icons/io";
import { RespostaModal } from './RespostaModal';

export default function Item({ questao }) {
    const [editing, setEditing] = useState(false);
    const [respostaModal, setRespostaModal] = useState(false);
    const { patch } = useForm(questao);
    const [respostas, setRespostas] = useState(questao.respostas);

    const onDisableHandler = (e) => {
        e.preventDefault();
        patch(route('questao.disable', questao.id), {
            onSuccess: () => {
                setEditing(false);
            }
        });
    };

    const markAsCorretaHandler = (e, resposta) => {
        e.preventDefault();
        patch(route('resposta.markAsCorrect', resposta.id), {
            onSuccess: () => {
                setEditing(false);
                setRespostas(respostas.map(r => {
                    r.correta = r.id === resposta.id;
                    return r;
                }));
            },
            preserveScroll: true,
        });
    }

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
                    <button className="block w-full p-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out disabled:cursor-not-allowed" onClick={() => setRespostaModal(true)} >
                        <BiMessageSquareAdd />
                    </button>
                </ActionHeader>
                {respostaModal && <RespostaModal closeModal={() => setRespostaModal(false)} questao={questao} />}
                <div className="block">
                    {editing && <EditForm questao={questao} setEditing={setEditing} />}
                    {!editing &&
                        <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">{questao.enunciado}</p>
                    }
                    {!editing &&
                        <>
                            {respostas.length === 0 && (<p className="mt-1 text-center text-sm text-gray-600 dark:text-gray-400">Nenhuma resposta cadastrada no momento.</p>)}
                            <ul className="grid grid-cols-1 gap-2 divide-y-2 divide-gray-400 list-none">
                                {respostas.map(resposta => (
                                    <li key={resposta.id} className="flex items-center justify-between py-2">
                                        <span className="flex-1 text-lg text-gray-600 dark:text-gray-400">{resposta.descricao}</span>
                                        {!!resposta.correta && <span className='flex gap-2  p-2 text-left text-sm leading-5 text-gray-300'>
                                            <IoIosCheckmark className='text-green-500' />
                                            Correta
                                        </span>}
                                        {!resposta.correta && <button className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 false " onClick={(e) => markAsCorretaHandler(e, resposta)} >
                                            Marcar como correta
                                        </button>}
                                    </li>
                                ))}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}