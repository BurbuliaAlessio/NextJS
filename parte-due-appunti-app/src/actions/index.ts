'use server';
import { db } from "@/app/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const createSnippet = async (fromActionSate: {message: string}, formData: FormData) => {
    
    try{
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;


        if (!title || !code) 
            return { message: "Title and code are required." };
        else if (title.length > 20 || title.length < 3) 
            return { message: "Title must be between 3 and 20 characters." };
        else if (code.length > 1000) 
            return { message: "Code must be less than 1000 characters." };
        
        else {
            
            await db.snippet.create({
                data: {
                    title,
                    code
                }
            });

        }
    } catch (error: unknown) {
        if(error instanceof Error) 
            return { message: error.message };
        else
            return { message: "Error database." }
    }
    revalidatePath('/');
    redirect(`/`);
}

export const editSnippet = async (id: number, code: string) => {

    await db.snippet.update({
        where: {id: id},
        data: { code: code }
    })
    revalidatePath('/snippets/' + id);
    redirect('/snippets/' + id);
}

export const deleteSnippet = async (id: number) => {
    await db.snippet.delete({where: {id: id}})
    revalidatePath('/');
    redirect('/');
}