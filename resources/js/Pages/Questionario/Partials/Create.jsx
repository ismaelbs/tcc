import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { CreateContext } from "@/Pages/Shared/Context/useCreateContext";
import { CreateForm } from "@/Pages/Shared/CreateForm";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        descricao: '',
        tempo:''
    });

    return (
        <CreateContext.Provider value={{ post, processing, recentlySuccessful, reset }}>
            <section>
                <SectionHeader 
                    title="Criar novo questionário" 
                    description="Crie um novo questionário."
                />
                <CreateForm path="questionario.store">
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
                </CreateForm>
            </section>
        </CreateContext.Provider>
    );
}