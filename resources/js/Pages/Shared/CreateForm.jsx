import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { useCreateContext } from "./Context/useCreateContext";

export function CreateForm({ path, children }) {
    const { post, processing, recentlySuccessful, reset } = useCreateContext();

    const onSubmitHandler = e => {
        e.preventDefault();
        post(route(path), {
            onSuccess: () => reset(),
            preventScroll: true,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className="mt-6 space-y-6">
            {children}

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
    )
}