import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Item from "./Partials/Item";

export default function Index({ auth, resultados }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Resultados</h2>}
        >
            <Head title="Resultados" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 dark:bg-gray-800 p-10 rounded-lg text-gray-100">
                    
                    <h1 className="text-3xl font-bold">Resultados</h1>

                    <div className="mt-4">
                        {resultados.map((resultado) => (<Item key={resultado.id} resultado={resultado} />))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}