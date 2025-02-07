import Link from "next/link";
import { db } from "./db";

//! export const dynamic = "force-dynamic";

const Home = async () => {
  
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <>
    <div className="flex justify-between items-center p-3">
    <h1 className="text-3xl mb-3 mt-3">
      Snippets
    </h1>
        <Link 
        href="/snippets/new" 
        className="text-2xl mb-3 border rounded p-2"
        >
      Create snippet
    </Link>
    </div>
    <div className="flex w-full gap-2 flex-col">
        {renderedSnippets}
    </div>
    </>
  );
}

export default Home;