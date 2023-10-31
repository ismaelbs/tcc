export function SectionHeader({ title, description }) {
    return (
        <header>
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">{ title }</h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                { description }
            </p>
        </header>
    );
}