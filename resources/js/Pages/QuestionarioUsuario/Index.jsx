import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from "react";
import List from "./Partials/List";
import { View } from "./Partials/View";

export default function Index({ questionarioUsuario, auth }) {
    const questoesMap = questionarioUsuario.questionario.questoes.map((questao, index) => ({ ...questao, ativa: index === 0 }))
    const [questoes, setQuestoes] = useState(questoesMap);

    const onActivate = questao => {
        const questoesMap = questoes.map(q => ({ ...q, ativa: q.id === questao.id }));
        setQuestoes(() => questoesMap);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Responder questionário</h2>}
        >
            <Head title="Responder questionário" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-[1fr_400px] gap-2">
                    <form>
                        <View questoes={questoes} />
                    </form>
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <List onActivate={onActivate} questoes={questoes} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}