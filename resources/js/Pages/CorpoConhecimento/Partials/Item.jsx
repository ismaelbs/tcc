import Dropdown from '@/Components/Dropdown';
import { useState } from 'react';
import { HiBookOpen } from 'react-icons/hi';
import { HiEllipsisVertical } from "react-icons/hi2";
import { EditForm } from './EditForm';


export default function Item({ corpoconhecimento }) {
    const [editing, setEditing] = useState(false);

    return (
        <div className="p-6 flex space-x-2 bg-gray-900 rounded-md">
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
                            <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                                Editar
                            </button>
                        </Dropdown.Content>
                    </Dropdown>
                </div>

                <div className="flex justify-between gap-2 items-center">
                    <div className="p-2">
                        {editing ? <EditForm corpoconhecimento={corpoconhecimento} setEditing={setEditing}/> : <span className="dark:text-gray-100">{corpoconhecimento}</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}