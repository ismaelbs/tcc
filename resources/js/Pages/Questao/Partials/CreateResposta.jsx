import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { CreateContext } from "@/Pages/Shared/Context/useCreateContext";
import { CreateForm } from "@/Pages/Shared/CreateForm";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";

export default function CreateResposta({ questao }) {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        questao_id: questao.id,
        assunto_id: questao.assunto_id,
        descricao: '',
        correta: '0',
    });

    return (
        <CreateContext.Provider value={{ post, processing, recentlySuccessful, reset }}>
            <section>
                <SectionHeader
                    title="Criar resposta"
                    description="Crie respostas para a questão."
                />
                <CreateForm path="resposta.store">
                    <div>
                        <InputLabel value="Resposta" />
                        <TextInput
                            id="resposta"
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
                        <InputLabel value="Correta?"></InputLabel>
                        <div className="mt-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio"
                                    name="correta"
                                    value="1"
                                    onChange={(e) => setData('correta', e.target.value)}
                                />
                                <span className="ml-2 block font-medium text-sm text-gray-700 dark:text-gray-300">Sim</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    className="form-radio"
                                    defaultChecked
                                    name="correta"
                                    value="0"
                                    onChange={(e) => setData('correta', e.target.value)}
                                />
                                <span className="ml-2 block font-medium text-sm text-gray-700 dark:text-gray-300">Não</span>
                            </label>
                        </div>
                        <InputError className="mt-2" message={errors.correta} />
                    </div>
                </CreateForm>
            </section>
        </CreateContext.Provider>
    );
}