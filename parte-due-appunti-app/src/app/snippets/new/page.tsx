import { db } from "@/app/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
    
    const createSnippet = async (formdata: FormData) => {
    'use server';
        
    const snippet = await db.snippet.create({
            data: {
                title: formdata.get("title") as string,
                code: formdata.get("code") as string
            }
        });

        console.log(snippet);

        redirect('/');
    }
    
    const inputStyle = "border rounded px-3 p-1";
    
    return (
        <form action={createSnippet}>
        <h3 
        className="text-2xl bold">
        Create Snippet
        </h3>
        <div className="flex flex-col gap-4">
        <label htmlFor="title">
        Title
        </label>
        
        <input 
        type="text" 
        name="title" 
        id="title" 
        className={inputStyle}/>
        
        <label htmlFor="code">
        Code
        </label>
        
        <textarea 
        name="code" 
        id="code" 
        cols={30} rows={10} 
        className={inputStyle}></textarea>
        
        <button 
        type="submit" 
        className="border rounded p-1 bg-blue-600 text-white hover:bg-blue-700">
        Create Snippet
        </button>
        </div>
        </form>
    );
}

export default SnippetCreatePage;