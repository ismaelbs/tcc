import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { CreateContext } from "@/Pages/Shared/Context/useCreateContext";
import { CreateForm } from "@/Pages/Shared/CreateForm";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";

export default function Create({ assunto }) {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        assunto_id: assunto.id,
        enunciado: '',
    });

    return (
        <CreateContext.Provider value={{ post, processing, recentlySuccessful, reset }}>
            <section>
                <SectionHeader 
                    title="Criar nova questão" 
                    description="Crie questões para os questionários."
                />
                <CreateForm path="questao.store">
                    <div>
                        <InputLabel value="Enunciado" />
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

                        <InputError className="mt-2" message={errors.enunciado} />
                    </div>
                </CreateForm>
            </section>
        </CreateContext.Provider>
    );
}