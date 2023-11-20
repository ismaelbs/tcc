import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Questionario } from './Partials/Questionario';

export default function Dashboard({ auth, questionarios }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg flex flex-col gap-5">
                        { questionarios.map(questionario => (<Questionario questionario={questionario} key={questionario.id} />)) }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
