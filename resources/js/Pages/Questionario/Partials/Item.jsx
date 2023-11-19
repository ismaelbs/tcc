import { useState } from 'react';
import { ActionHeader } from '@/Pages/Shared/ActionHeader';
import { useForm } from '@inertiajs/react';
import dayjs from '../../../dayjsconfig';
import { EditForm } from './EditForm';

export default function Item({ questionario }) {
    const [editing, setEditing] = useState(false);
    const { patch } = useForm(questionario);

    const onDisableHandler = (e) => {
        e.preventDefault();
        patch(route('questionario.disable', questionario.id), {
            preserveScroll: true,
            onSuccess: () => {
                setEditing(false);
            }
        });
    };

    const onEnableHandler = (e) => {
        e.preventDefault();
        patch(route('questionario.enable', questionario.id), {
            preserveScroll: true,
            onSuccess: () => {
                setEditing(false);
            }
        });
    };

    const actionSettings = {
        enabled: questionario.habilitado,
        onEnableClick: questionario.habilitado ? onDisableHandler : onEnableHandler,
        onEditClick: () => setEditing(true),
    };

    return (
        <div className="p-6 flex space-x-2 bg-gray-900 rounded-md">
            <div className="flex-1 flex-col">
                <ActionHeader settings={actionSettings} />
                {editing && <EditForm questionario={questionario} setEditing={setEditing} />}
                {!editing && (
                    <div className="block">
                        <div className="p-2 w-full dark:text-gray-100 disabled:text-slate-500
                        disabled:cursor-not-allowed">
                            {questionario.descricao}
                        </div>
                        <div className="p-2 w-full dark:text-gray-100 disabled:text-slate-500
                        disabled:cursor-not-allowed">
                            {dayjs(questionario.tempo, 'H:mm').format('[Finalizar em] HH [horas e] mm [minutos]')}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}