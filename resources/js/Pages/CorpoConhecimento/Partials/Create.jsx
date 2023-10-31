import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { CreateContext } from "@/Pages/Shared/Context/useCreateContext";
import { CreateForm } from "@/Pages/Shared/CreateForm";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        tema: '',
    });

    return (
        <CreateContext.Provider value={{ post, processing, recentlySuccessful, reset }}>
            <section>
                <SectionHeader title="Criar novo corpo de conhecimento" description="Crie novos corpos de conhecimento para os questionários." />
                <CreateForm path="corpo_conhecimento.store">
                    <div>
                        <InputLabel htmlFor="descricao" value="Descrição" />

                        <TextInput
                            id="descricao"
                            className="mt-1 block w-full"
                            value={data.tema}
                            onChange={(e) => setData('tema', e.target.value)}
                            required
                            isFocused
                            autoComplete="Descrição"
                        />

                        <InputError className="mt-2" message={errors.tema} />
                    </div>
                </CreateForm>
            </section>
        </CreateContext.Provider>

    );
}