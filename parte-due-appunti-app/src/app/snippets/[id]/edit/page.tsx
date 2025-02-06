import SnippetEditForm from "@/components/snippetEdit";
import { db } from "@/app/db";
import { notFound } from "next/navigation";

interface SnippetEditProps {
    params: {
        id: string;
    }
}

const SnippetEditPage = async (props: SnippetEditProps) => {

    const { params } = props;
    const { id } = await params;

    const snippet = await db.snippet
    .findFirst({where: {id: +id}})
    || notFound();
    
    return (<div>
                <SnippetEditForm snippet={snippet} />
            </div>)
}

export default SnippetEditPage;