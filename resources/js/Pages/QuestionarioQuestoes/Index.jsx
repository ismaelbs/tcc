import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { NoResult } from '@/Pages/Shared/NoResult';
import { Questao } from './Partials/Questao';
import dayjs from '../../dayjsconfig';

export default function Index({ auth, questionario, questoesAdicionadas, questoesAdicionaveis }) {
    const { post, delete: deleteQuestion } = useForm(questionario);

    const handleAdicionar = questao => {
        post(route('questionario_questoes.store', {
            questionario: questionario.id,
            questao: questao.id,
        }));
    }

    const handleRemove = questao => {
        deleteQuestion(route('questionario_questoes.destroy', {
            questionario: questionario.id,
            questao: questao.id,
        }));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{questionario.descricao} / {dayjs(questionario.tempo, 'H:mm').format('[Finalizar em] HH [horas e] mm [minutos]')}</h2>}
        >
            <Head title="Selecionar questões" />
            <div className="mt-8">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="shadow sm:rounded-lg">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col p-4 divide-y-2 divide-gray-400 dark:bg-gray-800">
                                <h2 className='text-xl font-semibold text-center text-zinc-300'>Questões disponíveis</h2>
                                {questoesAdicionaveis.length === 0 && <NoResult text="Nenhuma questão adicionável para este questionário" />}
                                {questoesAdicionaveis.map((questao) => (
                                    <Questao key={questao.id} questao={questao}>
                                        <button
                                            type="button"
                                            className="w-full py-2 mt-5 text-sm font-semibold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                            onClick={() => handleAdicionar(questao)}
                                        >
                                            Adicionar
                                        </button>
                                    </Questao>
                                ))}
                            </div>
                            <div className="flex flex-col divide-y-2 p-4 divide-gray-400 dark:bg-gray-800">
                                <h2 className='text-xl font-semibold text-center text-zinc-300'>Questões adicionadas</h2>
                                {questoesAdicionadas.length === 0 && <NoResult text="Nenhuma questão adicionada para este questionário" />}
                                {questoesAdicionadas.map((questao) => (
                                    <Questao key={questao.id} questao={questao}>
                                        <button
                                            type="button"
                                            className="w-full py-2 mt-5 text-sm font-semibold text-white uppercase bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                                            onClick={() => handleRemove(questao)}
                                        >
                                            Remover
                                        </button>
                                    </Questao>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
