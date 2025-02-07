'use client';

import { createSnippet } from "@/actions";
import { useActionState, startTransition } from "react";

const SnippetCreatePage = () => {    
    const inputStyle = "border rounded px-3 p-1";
    const [formsState, action] = useActionState(createSnippet, { message : ""});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // previene il normale comportamento del form
        const formData = new FormData(event.currentTarget);
        
        startTransition(() => {
            action(formData);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
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
            className={inputStyle}>
        </textarea>

            {formsState.message && //se c'e'

            <div className="bg-red-400 text-white p-2 rounded">
                {formsState.message}
            </div>
            }

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