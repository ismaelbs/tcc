import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        tema: '',
    });
    const onSubmitHandler = e => {
        e.preventDefault();
        post(route('corpo_conhecimento.store'));
    }
    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Criar novo corpo de conhecimento</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Crie novos corpos de conhecimento para os questionários.
                </p>
            </header>

            <form onSubmit={onSubmitHandler} className="mt-6 space-y-6">
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