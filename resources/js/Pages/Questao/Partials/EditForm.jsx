import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export function EditForm({questao, setEditing }) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        enunciado: questao.enunciado,
    });
 
    const onEditSubmitHandler = (e) => {
        e.preventDefault();
        patch(route('questao.update', questao.id), {
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
                id="enunciado"
                name="enunciado"
                className="mt-1 block w-full"
                value={data.enunciado}
                onChange={(e) => setData('enunciado', e.target.value)}
                required
                isFocused
                autoComplete="Enunciado"
            />
            <InputError message={errors.message} className="mt-2" />
            <div className="flex gap-2 space-x-2">
                <PrimaryButton className="mt-4">Salvar</PrimaryButton>
                <button className="mt-4 text-gray-100" onClick={onResetHandler}>Cancelar</button>
            </div>
        </form>
    )
}