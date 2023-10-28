import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export function EditForm({corpoconhecimento, setEditing }) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        tema: corpoconhecimento.tema,
    });
 
    const onEditSubmitHandler = (e) => {
        e.preventDefault();
        patch(route('corpo_conhecimento.update', corpoconhecimento.id), {
            onSuccess: onResetHandler,
        });
    };

    const onResetHandler = () => {
        setEditing(false);
        reset();
        clearErrors();
    };

    return (
        <form onSubmit={onEditSubmitHandler}>
            <TextInput
                id="descricao"
                className="mt-1 block w-full"
                value={data.tema}
                onChange={(e) => setData('tema', e.target.value)}
                required
                isFocused
                autoComplete="Descrição"
            />
            <InputError message={errors.message} className="mt-2" />
            <div className="flex gap-2 space-x-2">
                <PrimaryButton className="mt-4">Salvar</PrimaryButton>
                <button className="mt-4 text-gray-100" onClick={onResetHandler}>Cancelar</button>
            </div>
        </form>
    )
}