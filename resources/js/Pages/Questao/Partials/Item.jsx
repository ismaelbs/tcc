import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { ActionHeader } from '@/Pages/Shared/ActionHeader';
import { EditForm } from './EditForm';

export default function Item({ questao }) {
    const [editing, setEditing] = useState(false);
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
                <ActionHeader settings={actionSettings} />
                <div className="block">
                    {editing && <EditForm questao={questao} setEditing={setEditing} />}
                    {!editing && 
                        <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">{questao.enunciado}</p>
                    }
                </div>
            </div>
        </div>
    )
}