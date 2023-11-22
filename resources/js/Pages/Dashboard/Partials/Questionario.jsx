import { Link } from '@inertiajs/react';
import dayjs from '../../../dayjsconfig';

export function Questionario({ questionario }) {
    return (
        <div className="overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-800 bg-white p-5">
            <h2 className="text-2xl font-bold text-gray-300 capitalize">{questionario.descricao} </h2>
            <span className="text-xs font-medium mb-8 text-gray-400">{dayjs(questionario.tempo, 'H:mm').format('[Finalizar em] HH [horas e] mm [minutos]')}</span>
            <Link as="button" href={route('questionario_usuario.responder', questionario.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded w-full">Iniciar</Link>
        </div>
    );
}