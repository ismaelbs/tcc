import CreateResposta from "./CreateResposta";
import { HiOutlineX } from "react-icons/hi";

export function RespostaModal({ closeModal, questao }) {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-950 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-gray-950 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="flex justify-end items-center">
                            <div className="ml-3 h-7 flex items-center">
                                <button type="button" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={closeModal}>
                                    <span className="sr-only">Close</span>
                                    <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <CreateResposta questao={questao} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}