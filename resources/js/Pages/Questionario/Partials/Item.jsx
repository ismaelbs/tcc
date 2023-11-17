// import { ActionHeader } from '@/Pages/Shared/ActionHeader';

export default function Item({ questionario }) {
    // const { patch } = useForm(questionario);

    // const onDisableHandler = (e) => {
    //     e.preventDefault();
    //     patch(route('corpo_conhecimento.disable', corpoconhecimento.id), {
    //         preserveScroll: true,
    //         onSuccess: () => {
    //             setEditing(false);
    //         }
    //     });
    // };

    // const onEnableHandler = (e) => {
    //     e.preventDefault();
    //     patch(route('corpo_conhecimento.enable', corpoconhecimento.id), {
    //         preserveScroll: true,
    //         onSuccess: () => {
    //             setEditing(false);
    //         }
    //     });
    // };

    // const actionSettings = {
    //     enabled: corpoconhecimento.enabled,
    //     onEnableClick: corpoconhecimento.enabled ? onDisableHandler : onEnableHandler,
    //     onEditClick: () => setEditing(true),
    // };

    return (
        <div className="p-6 flex space-x-2 bg-gray-900 rounded-md">
            <div className="flex-1 flex-col">
                {/* <ActionHeader settings={actionSettings} /> */}
                <div className="flex justify-between gap-2 items-center">
                    <div className="p-2 w-full">
                        {questionario.descricao}
                    </div>
                </div>
            </div>
        </div>
    )
}