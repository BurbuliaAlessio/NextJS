`use client`

import Link from "next/link";
import { db } from "./db";

const Home = async () => {

  const snippets = await db.snippet.findMany();

  const rederedSnippets = snippets.map(
    (snippet) => {
      return (
        <Link 
        className="text-2xl flex justify-between items-center mb-2 border p-4 w-full"
        href={`/snippets/${snippet.id}`}
        >
          <div
          key={snippet.id} 
          >
            {snippet.title}
          </div>
          <div>
            view
          </div>
        </Link>
      );
    }
  )

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
      {rederedSnippets}
    </div>
    </>
  );
}

export default Home;