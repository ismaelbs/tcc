import { IoIosCheckmark } from "react-icons/io";
import { EditFormResposta } from "./EditFormResposta";
import { AiTwotoneEdit } from "react-icons/ai";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export function RespostaItem({ resposta }) {
    const [editing, setEditing] = useState(false);
    const { patch } = useForm(resposta);
    const markAsCorretaHandler = (e, resposta) => {
        e.preventDefault();
        patch(route('resposta.markAsCorrect', resposta.id), {
            onSuccess: () => {
                setEditing(false);
            },
            preserveScroll: true,
        });
    }

    return (
        <li className="flex items-start justify-between py-2">
            {editing && <EditFormResposta setEditingResposta={setEditing} resposta={resposta} />}
            {!editing && <span className="flex-1 text-lg text-gray-600 dark:text-gray-400">{resposta.descricao}</span>}
            <div className="flex gap-2">
                <button className="block flex-1 p-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out disabled:cursor-not-allowed" onClick={() => setEditing(true)}>
                    <AiTwotoneEdit />
                </button>
                {!resposta.correta && <button className="block flex-1 p-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out disabled:cursor-not-allowed" onClick={(e) => markAsCorretaHandler(e, resposta)} title="Marcar como correta" >
                    <IoIosCheckmark />
                </button>}
                {!!resposta.correta && <span className='flex gap-2  p-2 text-left text-sm leading-5 text-gray-300'>
                    <IoIosCheckmark className='text-green-500' />
                </span>}
            </div>
        </li>
    );
}