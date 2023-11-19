import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export function EditForm({ questionario, setEditing }) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        descricao: questionario.descricao,
        tempo: questionario.tempo,
    });

    const onEditSubmitHandler = (e) => {
        e.preventDefault();
        patch(route('questionario.update', questionario.id), {
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
            <div>
                <InputLabel value="Descrição" />
                <TextInput
                    id="descricao"
                    name="descricao"
                    className="mt-1 block w-full"
                    value={data.descricao}
                    onChange={(e) => setData('descricao', e.target.value)}
                    required
                    isFocused
                    autoComplete="Descricao"
                />
                <InputError className="mt-2" message={errors.descricao} />
            </div>
            <div>
                <InputLabel value="Tempo" />
                <TextInput
                    id="tempo"
                    type="time"
                    name="tempo"
                    className="mt-1 block w-full"
                    value={data.tempo}
                    onChange={(e) => setData('tempo', e.target.value)}
                    required
                    isFocused
                    autoComplete="Tempo"
                />
                <InputError className="mt-2" message={errors.tempo} />
            </div>
            <div className="flex gap-2 space-x-2">
                <PrimaryButton className="mt-4">Salvar</PrimaryButton>
                <button className="mt-4 text-gray-100" onClick={onResetHandler}>Cancelar</button>
            </div>
        </form>
    )
}