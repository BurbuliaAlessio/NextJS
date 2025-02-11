import { deleteSnippet } from "@/actions"; // Importa l'azione per eliminare uno snippet
import { db } from "@/app/db"; // Importa l'istanza del database
import Link from "next/link"; // Importa il componente Link per la navigazione
import { notFound } from "next/navigation"; // Funzione per gestire il caso in cui uno snippet non esiste

// Definisce i tipi delle proprietà del componente
interface SnippetShowProps {
  params: Promise<{ id: string }>; // Mantiene params come una Promise
}

// Definisce il componente asincrono per la visualizzazione del dettaglio di uno snippet
const SnippetDetailPage = async (props: SnippetShowProps) => {
    const { params } = props;
    const { id } = await params; // Attende la risoluzione della Promise params per ottenere l'id

    // Simula un caricamento asincrono (utile per debugging o testing di UX)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Recupera lo snippet dal database in base all'id
    const snippet = await db.snippet.findFirst({
        where: { id: +id }, // Il + converte la stringa in numero
    }) || notFound(); // Se non trova lo snippet, chiama la funzione notFound()

    // Crea un'azione legata all'eliminazione dello snippet
    const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

    return (
        <>
            <h1>Snippet Detail</h1>
            <div className="flex m-4 justify-between items-center gap-2">
                {/* Contenitore dello snippet */}
                <div className="container border p-3">
                    <div className="font-bold text-2xl">
                        {snippet.title}
                    </div>
                    <code className="font-mono">
                        {snippet.code}
                    </code>
                </div>
                {/* Link per modificare lo snippet */}
                <Link
                    className="p-2 border rounded bg-blue-600 text-white"
                    href={`/snippets/${snippet.id}/edit`}
                >
                    Edit
                </Link>
                {/* Pulsante per eliminare lo snippet */}
                <button 
                className="p-2 border rounded bg-red-600 text-white"
                onClick={deleteSnippetAction}
                >
                    Delete
                </button>
            </div>
        </>
    );
};

export default SnippetDetailPage;

//* Questa funzione genera i parametri statici
//* per la pre-generazione delle pagine statiche in Next.js
//* Quando la build viene eseguita, Next.js genera pagine statiche per questi parametri
//* Per aggiornare i dati dopo una modifica, bisogna usare revalidatePath('/snippets/[id]')

const generateStaticParams = async () => {
    const snippets = await db.snippet.findMany(); // Recupera tutti gli snippet dal database
    return snippets.map((snippet) => ({ id: snippet.id.toString() })); // Restituisce un array di parametri statici
};

export { generateStaticParams };