import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { HiBookOpen } from 'react-icons/hi';
import { HiEllipsisVertical } from "react-icons/hi2";


export default function Item({ corpoconhecimento }) {
    const [editing, setEditing] = useState(false);

    const { data, setData, clearErrors, reset, errors } = useForm({
        tema: corpoconhecimento,
    });
 
    const onEditDubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="p-6 flex space-x-2 bg-gray-900">
            <div className="flex-1 flex-col">
                <div className="flex justify-between gap-2 items-center p-1 border-b mb-2">
                    <HiBookOpen className="text-gray-300 text-lg" />
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button>
                                <HiEllipsisVertical className="text-gray-300 text-lg" />
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                                Editar
                            </button>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            
                <div className="flex justify-between gap-2 items-center">
                    <div className="p-2">
                        {editing
                            ? <form onSubmit={onEditDubmitHandler}>
                                <TextInput
                                    id="descricao"
                                    className="mt-1 block w-full"
                                    value={data.tema}
                                    onChange={(e) => setData('tema', e.target.value)}
                                    required
                                    isFocused
                                    autoComplete="Descrição"
/>
                                <InputError message={errors.message} className="mt-2" />
                                <div className="space-x-2">
                                    <PrimaryButton className="mt-4">Salvar</PrimaryButton>
                                    <button className="mt-4 text-gray-100" onClick={() => { setEditing(false); reset(); clearErrors(); }}>Cancelar</button>
                                </div>
                            </form>
                            : <span className="dark:text-gray-100">{ corpoconhecimento }</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}