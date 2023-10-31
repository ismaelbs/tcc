import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { CreateContext } from "@/Pages/Shared/Context/useCreateContext";
import { CreateForm } from "@/Pages/Shared/CreateForm";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";

export default function Create({ corpoConhecimento }) {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        corpo_conhecimento_id: corpoConhecimento.id,
        descricao: '',
    });

    return (
        <CreateContext.Provider value={{ post, processing, recentlySuccessful, reset }}>
            <section>
                <SectionHeader 
                    title="Criar nova disciplina" 
                    description="Crie novas disciplinas para os questionários."
                />
                <CreateForm path="disciplina.store">
                    <div>
                        <InputLabel htmlFor="descricao" value="Descrição" />
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

                        <InputError className="mt-2" message={errors.disciplina} />
                    </div>
                </CreateForm>
            </section>
        </CreateContext.Provider>

    );
}