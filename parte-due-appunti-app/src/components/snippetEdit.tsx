'use client';

import { Editor } from "@monaco-editor/react"
import { useState } from "react";
import { editSnippet } from "@/actions";

interface SnippetEditProps {
    snippet: {
        id: number,
        title: string,
        code: string
    }
}


const SnippetEditForm = ({snippet}: SnippetEditProps) => {
    
    const [code, setCode] = useState(snippet.code);
    
    const handleEditorChange = (value: string = "") => {
        setCode(value);
    }

    const editSnippetActin = editSnippet.bind(null, snippet.id, code);

    return (
        <div
        className="border rounded m-3"
        >
        <Editor
            defaultLanguage="typescript"
            defaultValue={snippet.code}
            height={"50vh"}
            theme="vs-dark"
            options={{ minimap: { enabled: false } }}
            onChange={handleEditorChange}
        />
        <button 
        onClick={() => {
            editSnippetActin();
        }} type="submit">
            Save
        </button>
        </div>
    )
}

export default SnippetEditForm;