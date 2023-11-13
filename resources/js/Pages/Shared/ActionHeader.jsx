import { AiTwotoneEdit } from "react-icons/ai";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export function ActionHeader({ settings, children }) {
    const enableIcon = settings.enabled ? <MdVisibility className="text-gray-300 text-lg" /> : <MdVisibilityOff className="text-gray-300 text-lg" />;
    return (
        <header className="flex justify-end gap-2 items-center p-1 border-b mb-2">
            <div className="flex justify-start">
                {children}
                <button className="block w-full p-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out disabled:cursor-not-allowed" disabled={!settings.enabled} onClick={settings.onEditClick}>
                    <AiTwotoneEdit />
                </button>
                <button className="block w-full p-2 text-left text-sm leading-5 text-gray-300 hover:bg-gray-800 focus:bg-gray-800 hover:text-gray-100 transition duration-150 ease-in-out" onClick={settings.onEnableClick}>
                    {enableIcon}
                </button>
            </div>
        </header>
    );
}