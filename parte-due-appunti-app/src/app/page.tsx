import Link from "next/link"; // Importa il componente Link di Next.js per la navigazione senza ricaricare la pagina
import { db } from "./db"; // Importa l'istanza del database (probabilmente Prisma)

// Definisce un componente asincrono Home, poiché utilizza await per recuperare i dati
const Home = async () => {
  
  // Recupera tutti gli snippet dal database
  const snippets = await db.snippet.findMany();

  // Mappa gli snippet per renderizzarli come link
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`} // Corregge l'errore di sintassi con l'uso corretto delle backtick
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <>
      {/* Intestazione della pagina con il titolo e il link per creare un nuovo snippet */}
      <div className="flex justify-between items-center p-3">
        <h1 className="text-3xl mb-3 mt-3">Snippets</h1>
        <Link 
          href="/snippets/new" 
          className="text-2xl mb-3 border rounded p-2"
        >
          Create snippet
        </Link>
      </div>

      {/* Contenitore per la lista degli snippet */}
      <div className="flex w-full gap-2 flex-col">
        {renderedSnippets}
      </div>
    </>
  );
};

export default Home; // Esporta il componente per l'uso in altre parti dell'app