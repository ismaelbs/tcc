import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { CreateContext } from "@/Pages/Shared/Context/useCreateContext";
import { CreateForm } from "@/Pages/Shared/CreateForm";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";

export default function Create({ disciplina }) {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        disciplina_id: disciplina.id,
        descricao: '',
    });

    return (
        <CreateContext.Provider value={{ post, processing, recentlySuccessful, reset }}>
            <section>
                <SectionHeader 
                    title="Criar novo assunto" 
                    description="Crie novos assuntos para os questionários."
                />
                <CreateForm path="assunto.store">
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

                        <InputError className="mt-2" message={errors.assunto} />
                    </div>
                </CreateForm>
            </section>
        </CreateContext.Provider>
    );
}