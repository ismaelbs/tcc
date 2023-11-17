import { NoResult } from "@/Pages/Shared/NoResult";
import Item from "./Item";

export default function List({ questionarios }) {
    return (<>
        {questionarios.length === 0 && (<NoResult text="Nenhum questionário encontrado." />)}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {questionarios.map((questionario) => (
                <Item key={questionario.id} questionario={questionario} />
            ))}
        </ul>
    </>
    );
}