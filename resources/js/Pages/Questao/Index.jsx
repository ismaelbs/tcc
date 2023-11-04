import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Create from './Partials/Create';
import List from './Partials/List';

export default function Index({ auth, assunto, questoes }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{assunto.descricao}</h2>}
        >
            <Head title="Questões" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <Create assunto={assunto}/>
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        {<List questoes={questoes} />}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
