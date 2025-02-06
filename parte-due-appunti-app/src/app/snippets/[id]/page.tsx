import { deleteSnippet } from "@/actions";
import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowProps {
    params: {
        id: string;
    };
}

const SnippetDetailPage = async (props: SnippetShowProps) => {
    const { params } = props;
    const { id } = await params; // Await the params object

    // Simulate an asynchronous loading
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Find the snippet based on the id
    const snippet = await db.snippet.findFirst({
        where: { id: +id },
    }) || notFound();

    const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

    return (
        <>
            <h1>Snippet Detail</h1>
            <div className="flex m-4 justify-between items-center gap-2">
                <div className="container border p-3">
                    <div className="font-bold text-2xl">
                        {snippet.title}
                    </div>
                    <div className="font-mono">
                        {snippet.code}
                    </div>
                </div>
                <Link
                    className="p-2 border rounded bg-blue-600 text-white"
                    href={`/snippets/${snippet.id}/edit`}
                >
                    Edit
                </Link>
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