import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

export default function Create({ corpoConhecimento }) {
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm({
        corpo_conhecimento_id: corpoConhecimento.id,
        descricao: '',
    });

    const onSubmitHandler = e => {
        e.preventDefault();
        post(route('disciplina.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset('descricao');
            }
        });
    }

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Criar nova disciplina</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Crie novas disciplinas para os questionários.
                </p>
            </header>

            <form onSubmit={onSubmitHandler} className="mt-6 space-y-6">
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