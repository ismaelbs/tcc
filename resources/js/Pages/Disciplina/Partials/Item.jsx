import Dropdown from '@/Components/Dropdown';
import { useState } from 'react';
import { HiBookOpen } from 'react-icons/hi';
import { HiEllipsisVertical } from "react-icons/hi2";
import { EditForm } from './EditForm';
import { useForm } from '@inertiajs/react';

export default function Item({ disciplina }) {
    const [editing, setEditing] = useState(false);
    const { patch } = useForm(disciplina);

    const onDisableHandler = (e) => {
        e.preventDefault();
        patch(route('disciplina.disable', disciplina.id), {
            onSuccess: () => {
                setEditing(false);
            }
        });
    };

    const onEnableHandler = (e) => {
        e.preventDefault();
        patch(route('disciplina.enable', disciplina.id));
    };

    return (
        <div className="p-6 flex space-x-2 bg-gray-900 rounded-md">
            <div className="flex-1 flex-col">
                <div className="flex justify-between gap-2 items-center p-1 border-b mb-2">
                    <div className='flex gap-2 items-center'>
                        <HiBookOpen className="text-gray-300 text-lg" />
                        {disciplina.enabled ? <span className="text-xs text-green-500">Ativo</span> : <span className="text-xs text-red-500">Inativo</span>}
                    </div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button>
                                <HiEllipsisVertical className="text-gray-300 text-lg" />
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out" disabled={!disciplina.enabled} onClick={() => setEditing(true)}>
                                Editar
                            </button>
                            {disciplina.enabled ?
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out" onClick={onDisableHandler}>
                                    Desabilitar
                                </button> :
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out" onClick={onEnableHandler}>
                                    Habilitar
                                </button>
                            }
                        </Dropdown.Content>
                    </Dropdown>
                </div>

                <div className="flex justify-between gap-2 items-center">
                    <div className="p-2">
                        {editing ? <EditForm disciplina={disciplina} setEditing={setEditing} /> : <span className="dark:text-gray-100">{disciplina.descricao}</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}