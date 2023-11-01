import { useState } from 'react';
import { EditForm } from './EditForm';
import { Link, useForm } from '@inertiajs/react';
import { ActionHeader } from '@/Pages/Shared/ActionHeader';

export default function Item({ assunto }) {
    const [editing, setEditing] = useState(false);
    const { patch } = useForm(assunto);

    const onDisableHandler = (e) => {
        e.preventDefault();
        patch(route('assunto.disable', assunto.id), {
            onSuccess: () => {
                setEditing(false);
            }
        });
    };

    const onEnableHandler = (e) => {
        e.preventDefault();
        patch(route('assunto.enable', assunto.id));
    };

    const actionSettings = {
        enabled: assunto.enabled,
        onEnableClick: assunto.enabled ? onDisableHandler : onEnableHandler,
        onEditClick: () => setEditing(true),
    };

    return (
        <div className="p-6 flex space-x-2 bg-gray-900 rounded-md">
            <div className="flex-1 flex-col">
                <ActionHeader settings={actionSettings} />

                <div className="flex justify-between gap-2 items-center">
                    <div className="p-2">
                        {editing && <EditForm assunto={assunto} setEditing={setEditing} />}
                        {!editing && 
                            <Link 
                                as="button" 
                                disabled={!assunto.enabled} 
                                // href={TODO} 
                                className="dark:text-gray-100 disabled:text-slate-500 disabled:cursor-not-allowed">
                                    {assunto.descricao}
                            </Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}