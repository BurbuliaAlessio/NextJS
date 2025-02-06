'use server';
import { db } from "@/app/db";
import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
    await db.snippet.update({
        where: {id: id},
        data: { code: code }
    })

    redirect('/snippets/' + id);``
}

export const deleteSnippet = async (id: number) => {
    await db.snippet.delete({where: {id: id}})

    redirect('/');
}