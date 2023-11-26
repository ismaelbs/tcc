import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { CreateContext } from "@/Pages/Shared/Context/useCreateContext";
import { CreateForm } from "@/Pages/Shared/CreateForm";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";

export default function CreateDica({ questao }) {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        questao_id: questao.id,
        dica: '',
    });

    return (
        <CreateContext.Provider value={{ post, processing, recentlySuccessful, reset }}>
            <section>
                <SectionHeader
                    title="Criar dica"
                    description="Crie dica para a questão."
                />
                <CreateForm path="dica.store">
                    <div>
                        <InputLabel value="Dica" />
                        <TextInput
                            id="dica"
                            name="dica"
                            className="mt-1 block w-full"
                            value={data.dica}
                            onChange={(e) => setData('dica', e.target.value)}
                            required
                            isFocused
                            autoComplete="Dica"
                        />

                        <InputError className="mt-2" message={errors.dica} />
                    </div>
                </CreateForm>
            </section>
        </CreateContext.Provider>
    );
}