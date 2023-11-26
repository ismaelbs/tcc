export default function ItemDica({ dica }) {
    return (
        <div className="bg-gray-900 rounded-md p-3">
            <p className="font-semibold text-sm text-gray-900 dark:text-gray-200">{dica.dica}</p>
        </div>
    )
}