import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";
import { TbFileTextAi } from "react-icons/tb";
import ListDicas from "./ListDica";

export default function CreateDica({ questao }) {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        questao_id: questao.id,
        assunto_id: questao.assunto_id,
        dica: '',
    });

    const onSubmitHandler = e => {
        e.preventDefault();
        post(route('dica.store', questao.id), {
            onSuccess: () => reset(),
            preventScroll: true,
        });
    }

    return (

        <section>
            <SectionHeader
                title="Criar dica"
                description="Crie dica para a questão."
            />
            <ListDicas dicas={questao.dicas} />

            <form onSubmit={onSubmitHandler} className="mt-6 space-y-6">
                <div>
                    <InputLabel value="Dica" />
                    <div className="flex justify-center items-stretch gap-2 mt-1">
                        <TextInput
                            id="dica"
                            name="dica"
                            className="block w-full"
                            value={data.dica}
                            onChange={(e) => setData('dica', e.target.value)}
                            required
                            isFocused
                            autoComplete="Dica"
                        />
                        <button className="bg-slate-100 rounded-sm p-2">
                            <TbFileTextAi />
                        </button>
                    </div>

                    <InputError className="mt-2" message={errors.dica} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Salvar</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Criado.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}