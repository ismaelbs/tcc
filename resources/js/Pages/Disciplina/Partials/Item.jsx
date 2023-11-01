import { useState } from 'react';
import { EditForm } from './EditForm';
import { Link, useForm } from '@inertiajs/react';
import { ActionHeader } from '@/Pages/Shared/ActionHeader';

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

    const actionSettings = {
        enabled: disciplina.enabled,
        onEnableClick: disciplina.enabled ? onDisableHandler : onEnableHandler,
        onEditClick: () => setEditing(true),
    };

    return (
        <div className="p-6 flex space-x-2 bg-gray-900 rounded-md">
            <div className="flex-1 flex-col">
                <ActionHeader settings={actionSettings} />

                <div className="flex justify-between gap-2 items-center">
                    <div className="p-2">
                        {editing && <EditForm disciplina={disciplina} setEditing={setEditing} />}
                        {!editing && 
                        <Link as="button" disabled={!disciplina.enabled} href={route('assunto.create', disciplina.id)} className="dark:text-gray-100 disabled:text-slate-500
                        disabled:cursor-not-allowed">{disciplina.descricao}</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}