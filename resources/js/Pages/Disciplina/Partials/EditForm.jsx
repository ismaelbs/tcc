import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export function EditForm({disciplina, setEditing }) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        descricao: disciplina.descricao,
    });
 
    const onEditSubmitHandler = (e) => {
        e.preventDefault();
        patch(route('disciplina.update', disciplina.id), {
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
                name="descricao"
                className="mt-1 block w-full"
                value={data.descricao}
                onChange={(e) => setData('descricao', e.target.value)}
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