import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { SectionHeader } from "@/Pages/Shared/SectionHeader";
import { useForm } from "@inertiajs/react";
import { TbFileTextAi } from "react-icons/tb";
import ListDicas from "./ListDica";
import axios from "axios";
import { useRef, useState } from "react";

export default function CreateDica({ questao }) {
    const apiUrl = import.meta.env.VITE_IA_API;
    const [loading, setLoading] = useState(false);
    const questaoRef = useRef(null);
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

    const generateViaIA = async () => {
        setLoading(true);
        const { data } = await axios.post(`${apiUrl}/v1/chat/completions`, {
            "max_tokens": 512,
            "messages": [
                {
                    "role": "user",
                    "content": `Gere dicas para seguinte questão: ${questao.enunciado}. ### Resposta:`
                }
            ]
        });

        const saida = data["choices"][0]["message"]["content"];
        setData('dica', saida);
        setLoading(false);
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
                    <div className="flex justify-center items-start gap-2 mt-1">
                        <textarea
                            id="dica"
                            ref={questaoRef}
                            disabled={loading}
                            name="dica"
                            className="block w-full min-h-[200px] border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm disabled:bg-slate-800 resize-none"
                            value={data.dica}
                            onChange={(e) => setData('dica', e.target.value)}
                            required
                            autoComplete="Dica"
                        />
                    </div>

                    <InputError className="mt-2" message={errors.dica} />
                </div>

                <div className="flex items-stretch gap-4">
                    <PrimaryButton disabled={processing || loading}>Salvar</PrimaryButton>
                    <button type="button" disabled={loading} onClick={generateViaIA} className="bg-slate-100 rounded-md p-2 disabled:opacity-25">
                        {loading ? (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="spinner_SoJz" d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z" /></svg>) : (<TbFileTextAi className="w-[24px] h-[24px]" />)}
                    </button>
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